
// TODO: Verify that a type cant change from one type to another.
const {ParPlusPlusListener} = require('./antlr4AutoGen/ParPlusPlusListener');
const virtualMemoryHandler = require('./virtualMemoryHandler');
const { memoryCtr } = require('./virtualMemoryHandler');
const Quadruple = require('./quadruples/quadruple');
const quadruplerHandler = require('./quadruples/quadrupleHandler');
const semanticCube = require('./semantics/semanticCube');
const semanticCubeHandler = require('./semantics/semanticCubeHandler');
var Stack = require('stackjs');
// const prompt = require('prompt-sync')({sigint: true});

const DefaultListener = require('./defaultListener');

let executionCtr = {};
let currentQuadrupleIndex = 0;
let globalListQuadruples; 

// Tener un Stack que tenga memoria local
var localMemory = new Stack();
var jumps = new Stack();
var output = "";
var prepareLocal = new Stack();


class ResultObject {
    constructor() {
        this.resultObtained = '';
        this.listQuadruples = new Array();
        this.currentQuadrupleIndex = 0;
      }
}


executionCtr.startExecution = function(functionTable, constantTable, listQuadruples, resultObject) {
    // console.log('=============== function table   ==================');
    // console.log(functionTable);

    // console.log('=============== constant table    ==================');
    // console.log(constantTable);

    // console.log('=============== list cuadruples     ==================');
    // console.log(listQuadruples);


    resultObject.listQuadruples = listQuadruples;
    this.initGlobalMemory(functionTable, constantTable);
    this.initLocalMemorys(functionTable);
    this.initQuadrupleExecution(resultObject)
}

executionCtr.initLocalMemorys = function(functionTable){
    executionCtr.localFunctionMap = new Map();
     functionTable.forEach((value, key, map) => {
         if(key != "Global"){
             let localValue = value.temps;
             value.vars.forEach((key,value,map) =>{
                if(key.start){
                    for(let i = key.start; key.dims >1 ? i< key.start + key.max1 * key.max2 :  i< key.start + key.max1 ; i++){
                        localValue.set(i, this.getDefaultValue(i));
                    }
                }else{
                    localValue.set(key,this.getDefaultValue(key));
                }
                 
             });
             executionCtr.localFunctionMap.set(key, localValue);
         }
     });
}


// Esta función va a hacer un mapa para la variable global
executionCtr.initGlobalMemory = function(functionTable, constantTable) {
    //  Hacer un mapa de TODA la memoria, no de cada función
    executionCtr.globalMap = new Map();
    
    // Key es el nombre de la variable |  Value es la dirección de memoria, 
    functionTable.get('Global').vars.forEach( (value, key, map ) => {
        // Ver qué tipo es y asignarla al globalmap
        if(value != null && value.start > -1){
            for(let i = value.start; value.dims >1 ? i< value.start + value.max1 * value.max2 : i < value.start + value.max1 ; i++){
                executionCtr.globalMap.set(i, this.getDefaultValue(i));
            }
        }else{
            executionCtr.globalMap.set(value, this.getDefaultValue(value));
        }
    })

    // Asignar las variables temporales
    functionTable.get('Global').temps.forEach( (value, key, map ) => {

        // Ver qué tipo es y asignarla al globalmap

        executionCtr.globalMap.set(key, value);
    })

    // Asignar las variables constantes
    constantTable.forEach( (value, key, map ) => {
        // Ver qué tipo es y asignarla al globalmap

        // Check if the key is a char or number        
            if(key.includes('\'') || key.includes('\"') ) {
                let str = key.slice(1);
                str = str.slice(0, str.length - 1)
                executionCtr.globalMap.set(value, str);
            } 
            else{
                executionCtr.globalMap.set(value, Number(key));
           }
    });
        
}


// This function will return the default value to store in the map (depending on the memory variable type)
executionCtr.getDefaultValue = function(memDir) {
    let type = memoryCtr.getType(memDir);
    if( type == "INT" || type == "FLOAT"){
        return 0;
    }
    // CHAR
    else {
        return '';
    }
}

executionCtr.initQuadrupleExecution = function(resultObject) {
        while(resultObject.currentQuadrupleIndex < resultObject.listQuadruples.length)
        {
        this.processQuadruple(resultObject.listQuadruples[resultObject.currentQuadrupleIndex], resultObject);
        }
}


executionCtr.parseToType = function(dir){
    if(dir != null && dir.sum){
        let value = (!localMemory.isEmpty() && localMemory.peek().has(dir.sum ))? localMemory.peek().get(dir.sum ) : executionCtr.globalMap.get(dir.sum );
        dir = dir.start + value;
    }

    let type = memoryCtr.getType(dir);
    if(!localMemory.isEmpty() && localMemory.peek().has(dir)){
        if(type == "INT"){
            localMemory.peek().set(dir,parseInt(localMemory.peek().get(dir)));
        }else if (type == "FLOAT"){
            localMemory.peek().set(dir,parseFloat(localMemory.peek().get(dir)));
        }
    }else if(!prepareLocal.isEmpty()  && prepareLocal.peek().has(dir)){
        if(type == "INT"){
            prepareLocal.peek().set(dir,parseInt(prepareLocal.peek().get(dir)));
        }else if (type == "FLOAT"){
            prepareLocal.peek().set(dir,parseFloat(prepareLocal.peek().get(dir)));
        }
    }else{
        if(type == "INT"){
            executionCtr.globalMap.set(dir,parseInt(executionCtr.globalMap.get(dir)));
        }else if (type == "FLOAT"){
            executionCtr.globalMap.set(dir,parseFloat(executionCtr.globalMap.get(dir)));
        }
    }

}


executionCtr.operationTwoOperands = function(quadruple,operator) {
    let value = quadruple.iDirThree;
    let value1 = quadruple.iDirOne;
    let value2 = quadruple.iDirTwo;

    if(quadruple.iDirThree != null && quadruple.iDirThree.sum){
        value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirThree.sum ))? localMemory.peek().get(quadruple.iDirThree.sum ) : executionCtr.globalMap.get(quadruple.iDirThree.sum );
        value = quadruple.iDirThree.start + value;
    }
    if(quadruple.iDirOne != null && quadruple.iDirOne.sum){
        value1 = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne.sum ))? localMemory.peek().get(quadruple.iDirOne.sum ) : executionCtr.globalMap.get(quadruple.iDirOne.sum );
        value1 = quadruple.iDirOne.start + value1;
    }
    if(quadruple.iDirTwo != null && quadruple.iDirTwo.sum){
        value2 = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirTwo.sum ))? localMemory.peek().get(quadruple.iDirTwo.sum ) : executionCtr.globalMap.get(quadruple.iDirTwo.sum );
        value2 = quadruple.iDirTwo.start + value2;
    }
    // If we are not processing a function we are on the global scope
    if(localMemory.isEmpty()){
        // Solo global
            executionCtr.globalMap.set(value , 
                ( 
                    operator(
                        executionCtr.globalMap.get(value1), executionCtr.globalMap.get(value2) 
                    ) 
                ) 
            );
    }
    else
    {
        let local = localMemory.peek();
        localMemory.pop();
            local.has(value) ? 
            local.set(value , 
                operator(
                    (
                        local.has(value1) ? local.get(value1) : executionCtr.globalMap.get(value1)
                    )
                    // Operator
                        ,
                    (
                        local.has(value2) ? local.get(value2) : executionCtr.globalMap.get(value2)
                    ) 
                )
            ) 
        : 
            executionCtr.globalMap.set(value , 
                operator(
                    (
                        local.has(value1) ? local.get(value1) : executionCtr.globalMap.get(value1)
                    )
                    // Operator
                    ,
                    (
                        local.has(value2) ? local.get(value2) : executionCtr.globalMap.get(value2)
                    )
                )
            );

        localMemory.push(local);
        //Agarramos en Local y si no esta checamos en global
    } 
    this.parseToType(quadruple.iDirThree);
}

executionCtr.operationOneOperand = function(quadruple, operator) {
        let value = quadruple.iDirThree;
        let value1 = quadruple.iDirOne;
        if(quadruple.iDirThree != null && quadruple.iDirThree.sum){
            value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirThree.sum ))? localMemory.peek().get(quadruple.iDirThree.sum ) : executionCtr.globalMap.get(quadruple.iDirThree.sum );
            value = quadruple.iDirThree.start + value;
        }
        if(quadruple.iDirOne != null && quadruple.iDirOne.sum){
            value1 = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne.sum ))? localMemory.peek().get(quadruple.iDirOne.sum ) : executionCtr.globalMap.get(quadruple.iDirOne.sum );
            value1 = quadruple.iDirOne.start + value1;
        }
    if(value != null){
        // If we are not processing a function we are on the global scope
        if(localMemory.isEmpty()){
            // Solo global
                executionCtr.globalMap.set(value , 
                    ( 
                        operator(
                            executionCtr.globalMap.get(value1)
                        )  
                    )  
                );
        }
        else
        {
            let local = localMemory.peek();
            localMemory.pop();
                local.has(value) ? 
                local.set(value , 
                    operator(
                        (
                            local.has(value1) ? local.get(value1) : executionCtr.globalMap.get(value1)
                        )
                    )
                ) 
            : 
                executionCtr.globalMap.set(value , 
                    operator(
                        (
                            local.has(value1) ? local.get(value1) : executionCtr.globalMap.get(value1)
                        )
                    )
                );
 
            localMemory.push(local);
            //Agarramos en Local y si no esta checamos en global
        } 
        this.parseToType(quadruple.iDirThree);
    }
}

executionCtr.verify = function(quadruple){
    let value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne))? localMemory.peek().get(quadruple.iDirOne) : executionCtr.globalMap.get(quadruple.iDirOne);
    if(value < quadruple.iDirTwo || value >= quadruple.iDirThree ){
        throw Error("Index out of range");
    }
}

executionCtr.parseValue = function(data,type){
    if( type == 'INT'){
        return parseInt(data);

    }else if (type == 'FLOAT'){
        return parseFloat(data);
    }else{
        return data[0];
    }
}


executionCtr.nextProcess = function(resultObject){
    resultObject.currentQuadrupleIndex++;  
}

executionCtr.createLocalMemory = function(funcName){
    DefaultListener.functionTable
}

executionCtr.initParam = function(quadruple, operator) {
    let value = quadruple.iDirThree;
    let value1 = quadruple.iDirOne;
    if(quadruple.iDirThree != null && quadruple.iDirThree.sum){
    value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirThree.sum ))? localMemory.peek().get(quadruple.iDirThree.sum ) : executionCtr.globalMap.get(quadruple.iDirThree.sum );
    value = quadruple.iDirThree.start + value;
    }
    if(quadruple.iDirOne != null && quadruple.iDirOne.sum){
        value1 = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne.sum ))? localMemory.peek().get(quadruple.iDirOne.sum ) : executionCtr.globalMap.get(quadruple.iDirOne.sum );
        value1 = quadruple.iDirOne.start + value1;
    } 
        prepareLocal.peek().set(value , 
            operator(
                (
                    (!localMemory.isEmpty() && localMemory.peek().has(value1)) ? localMemory.peek().get(value1) : executionCtr.globalMap.get(value1)
                )
            )
        );
        this.parseToType(quadruple.iDirThree);

          

}

// Procesar los cuádruplos
executionCtr.processQuadruple = function(quadruple, resultObject) {
    if(quadruple.operator == '+')
    {
        // console.log('ENTERED PLUS');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a + b; })
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '-') 
    {
        // console.log('ENTERED MINUS');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a - b; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '*') 
    {
        // console.log('ENTERED MULTIPLICATION');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a * b; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '/') 
    {
        // console.log('ENTERED DIVISION');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a / b; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '%') 
    {
        // console.log('ENTERED MODULO');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a % b; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '==') 
    {
        // console.log('ENTERED ==');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a == b ? 1 : 0;; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '>=') 
    {
        // console.log('ENTERED >=');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a >= b ? 1 : 0;; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '<=') 
    {
        // console.log('ENTERED <=');
        
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a <= b ? 1 : 0;; });
       
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '!=') 
    {
        // console.log('ENTERED !=');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a != b ? 1 : 0;; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '!') 
    {
        // console.log('ENTERED !');
        executionCtr.operationOneOperand(quadruple , function(a) { return (a < 1) ? 1 : 0; })
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '||') 
    {
        // console.log('ENTERED OR');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a || b ? 1 : 0; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '&&') 
    {
        // console.log('ENTERED AND');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a && b ? 1 : 0; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '>') 
    {
        // console.log('ENTERED Greater Than');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a > b ? 1 : 0; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '<') 
    {
        // console.log('ENTERED Less Than');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a < b ? 1 : 0; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == '=') 
    {
        // Diferent
        //console.log(quadruple);
        executionCtr.operationOneOperand(quadruple , function(a) { return a; })
        // console.log("EQUAL OPERATION");
        this.nextProcess(resultObject);
    }
    // Other Quadruple Operators
    else if (quadruple.operator == 'ENDFUNC') 
    {
        // console.log('Enter End Function' );
        if(!localMemory.isEmpty()){            
            localMemory.pop();
            resultObject.currentQuadrupleIndex = jumps.peek()
            jumps.pop();
        }
        this.nextProcess(resultObject);

    }
    else if (quadruple.operator == 'RETURN') 
    {
        // console.log('Enter Return' );
        executionCtr.operationOneOperand(quadruple , function(a) { return a; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == 'ERA') 
    {
        prepareLocal.push(new Map(executionCtr.localFunctionMap.get(quadruple.iDirOne)));
        // console.log('Enter Era' );
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == 'GOSUB') 
    {
        // console.log('Enter Go Sub' );
        localMemory.push(prepareLocal.peek());
        prepareLocal.pop();
        jumps.push(resultObject.currentQuadrupleIndex);
        resultObject.currentQuadrupleIndex = quadruple.iDirThree - 1;
        this.nextProcess(resultObject);
        

        
    }
    else if (quadruple.operator == 'PARAMETER') 
    {
        // console.log('Enter Parameter' );
        executionCtr.initParam(quadruple , function(a) { return a; });
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == 'GOTOF') 
    {
        // console.log('Enter Go To False' );

        // Check if var is in the local memory first
        if(!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne) ){
            // If the condition is false then do the GOTO.
            if(localMemory.peek().get(quadruple.iDirOne) < 1 ){
                resultObject.currentQuadrupleIndex = quadruple.iDirThree - 1;
            }
        }
        // Global Var.
        else {
            if(executionCtr.globalMap.get(quadruple.iDirOne) < 1 ){
                resultObject.currentQuadrupleIndex = quadruple.iDirThree - 1;
            }
        }
        this.nextProcess(resultObject);
    }
    else if (quadruple.operator == 'GOTO') 
    {
        // console.log('Enter Go To' );
        resultObject.currentQuadrupleIndex = quadruple.iDirThree - 1;
        this.nextProcess(resultObject);
    }

    else if (quadruple.operator == 'VERIFY'){
        executionCtr.verify(quadruple);
        this.nextProcess(resultObject);
    }else if (quadruple.operator == 'WRITE'){
        let value = 0;
        let text;
        if(quadruple.iDirOne != null && quadruple.iDirOne.sum){
            value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne.sum ))? localMemory.peek().get(quadruple.iDirOne.sum ) : executionCtr.globalMap.get(quadruple.iDirOne.sum );
            text = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne.start + value))? localMemory.peek().get(quadruple.iDirOne.start + value) : executionCtr.globalMap.get(quadruple.iDirOne.start + value);
        }else{
            text = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne ))? localMemory.peek().get(quadruple.iDirOne ) : executionCtr.globalMap.get(quadruple.iDirOne );
        }
        output = output + text;
        //console.log(executionCtr.globalMap);
        this.nextProcess(resultObject);
    } else if(quadruple.operator == 'ENDLINE'){
        resultObject.resultObtained += `${output} \n`;
        output = '';
        this.nextProcess(resultObject);
    }else if (quadruple.operator == 'READ'){
        let type = memoryCtr.getType(quadruple.iDirOne);
        let data = prompt();
        let result = this.parseValue(data,type);
        if(!result){
            result = this.getDefaultValue(quadruple.iDirOne);
        }
        let value = -1;
        if(quadruple.iDirOne != null && quadruple.iDirOne.sum){
            value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne.sum ))? localMemory.peek().get(quadruple.iDirOne.sum ) : executionCtr.globalMap.get(quadruple.iDirOne.sum );
            value = quadruple.iDirOne.start + value;
        }
        if(value > -1){
            (!localMemory.isEmpty() && localMemory.peek().has(value ))? localMemory.peek().set(value,result) : executionCtr.globalMap.set(value, result);

        }else{
            (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne ))? localMemory.peek().set(quadruple.iDirOne,result) : executionCtr.globalMap.set(quadruple.iDirOne, result);
        }
       
        //console.log(executionCtr.globalMap);
        this.nextProcess(resultObject);
    }else {
        throw new Error('Error: No se encontró el operador del quádruplo.')
    }
}

/*
    i = 10;
    j = 3;
    k = 8;
*/


module.exports = {executionCtr, ResultObject};