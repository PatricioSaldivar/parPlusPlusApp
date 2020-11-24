
// TODO: Verify that a type cant change from one type to another.
const {ParPlusPlusListener} = require('./antlr4AutoGen/ParPlusPlusListener');
const virtualMemoryHandler = require('./virtualMemoryHandler');
const { memoryCtr } = require('./virtualMemoryHandler');
const Quadruple = require('./quadruples/quadruple');
const quadruplerHandler = require('./quadruples/quadrupleHandler');
const semanticCube = require('./semantics/semanticCube');
const semanticCubeHandler = require('./semantics/semanticCubeHandler');
var Stack = require('stackjs');

const DefaultListener = require('./defaultListener');

let executionCtr = {};
let currentQuadrupleIndex = 0;
let globalListQuadruples; 

// Tener un Stack que tenga memoria local
var localMemory = new Stack();
var jumps = new Stack();
var output = "";
var prepareLocal = new Stack();

executionCtr.startExecution = function(functionTable, constantTable, listQuadruples) {
    globalListQuadruples = listQuadruples;
    this.initGlobalMemory(functionTable, constantTable);
    this.initLocalMemorys(functionTable);
    this.initQuadrupleExecution()
   /*
    console.log('=============== list quadruples   ==================');
    console.log(globalListQuadruples);

    console.log('=============== constant table    ==================');
    console.log(constantTable);

    console.log('=============== function table    ==================');
    console.log(functionTable);

    console.log('=============== locals table    ==================');
    console.log(executionCtr.localFunctionMap);


 
    console.log('=============== GLOBAL TABLE  =============== ');
    console.log(executionCtr.globalMap);
  
*/
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
        if(value.start){
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

executionCtr.initQuadrupleExecution = function() {
        this.processQuadruple(globalListQuadruples[0]);
}


executionCtr.parseToType = function(dir){
    if(dir.start){
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
    if(quadruple.iDirThree.start){
        let value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirThree.sum ))? localMemory.peek().get(quadruple.iDirThree.sum ) : executionCtr.globalMap.get(quadruple.iDirThree.sum );
        quadruple.iDirThree = quadruple.iDirThree.start + value;
    }
    // If we are not processing a function we are on the global scope
    if(localMemory.isEmpty()){
        // Solo global
        executionCtr.globalMap.set(quadruple.iDirThree , 
            ( 
                operator(
                    executionCtr.globalMap.get(quadruple.iDirOne), executionCtr.globalMap.get(quadruple.iDirTwo) 
                ) 
            ) 
        );
    }
    else
    {
        let local = localMemory.peek();
        localMemory.pop();
        local.has(quadruple.iDirThree) ? 
                local.set(quadruple.iDirThree , 
                    operator(
                        (
                            local.has(quadruple.iDirOne) ? local.get(quadruple.iDirOne) : executionCtr.globalMap.get(quadruple.iDirOne)
                        )
                        // Operator
                            ,
                        (
                            local.has(quadruple.iDirTwo) ? local.get(quadruple.iDirTwo) : executionCtr.globalMap.get(quadruple.iDirTwo)
                        ) 
                    )
                ) 
            : 
                executionCtr.globalMap.set(quadruple.iDirThree , 
                    operator(
                        (
                            local.has(quadruple.iDirOne) ? local.get(quadruple.iDirOne) : executionCtr.globalMap.get(quadruple.iDirOne)
                        )
                        // Operator
                        ,
                        (
                            local.has(quadruple.iDirTwo) ? local.get(quadruple.iDirTwo) : executionCtr.globalMap.get(quadruple.iDirTwo)
                        )
                    )
                );
        localMemory.push(local);
        //Agarramos en Local y si no esta checamos en global
    } 
    this.parseToType(quadruple.iDirThree);
}

executionCtr.operationOneOperand = function(quadruple, operator) {
    if(quadruple.iDirThree){
        if(quadruple.iDirThree.start){
            let value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirThree.sum ))? localMemory.peek().get(quadruple.iDirThree.sum ) : executionCtr.globalMap.get(quadruple.iDirThree.sum );
            quadruple.iDirThree = quadruple.iDirThree.start + value;
        }
        // If we are not processing a function we are on the global scope
        if(localMemory.isEmpty()){
            // Solo global
            executionCtr.globalMap.set(quadruple.iDirThree , 
                ( 
                    operator(
                        executionCtr.globalMap.get(quadruple.iDirOne)
                    )  
                )  
            );
        }
        else
        {
            let local = localMemory.peek();
            localMemory.pop();
            local.has(quadruple.iDirThree) ? 
                    local.set(quadruple.iDirThree , 
                        operator(
                            (
                                local.has(quadruple.iDirOne) ? local.get(quadruple.iDirOne) : executionCtr.globalMap.get(quadruple.iDirOne)
                            )
                        )
                    ) 
                : 
                    executionCtr.globalMap.set(quadruple.iDirThree , 
                        operator(
                            (
                                local.has(quadruple.iDirOne) ? local.get(quadruple.iDirOne) : executionCtr.globalMap.get(quadruple.iDirOne)
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



executionCtr.nextProcess = function(){
    currentQuadrupleIndex++;
    if (currentQuadrupleIndex >= globalListQuadruples.length)
    {
        return;
    }
    executionCtr.processQuadruple(globalListQuadruples[currentQuadrupleIndex]);   
}

executionCtr.createLocalMemory = function(funcName){
    DefaultListener.functionTable
}

executionCtr.initParam = function(quadruple, operator) {
    if(quadruple.iDirThree.start){
        let value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirThree.sum ))? localMemory.peek().get(quadruple.iDirThree.sum ) : executionCtr.globalMap.get(quadruple.iDirThree.sum );
        quadruple.iDirThree = quadruple.iDirThree.start + value;
    }        
                prepareLocal.peek().set(quadruple.iDirThree , 
                    operator(
                        (
                            (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne)) ? localMemory.peek().get(quadruple.iDirOne) : executionCtr.globalMap.get(quadruple.iDirOne)
                        )
                    )
                );
                this.parseToType(quadruple.iDirThree);

}

// Procesar los cuádruplos
executionCtr.processQuadruple = function(quadruple) {
    // OPERATOR +
    if(quadruple.operator == '+')
    {
        // console.log('ENTERED PLUS');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a + b; })
        this.nextProcess();
    }
    else if (quadruple.operator == '-') 
    {
        // console.log('ENTERED MINUS');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a - b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '*') 
    {
        // console.log('ENTERED MULTIPLICATION');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a * b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '/') 
    {
        // console.log('ENTERED DIVISION');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a / b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '%') 
    {
        // console.log('ENTERED MODULO');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a % b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '==') 
    {
        // console.log('ENTERED ==');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a == b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '>=') 
    {
        // console.log('ENTERED >=');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a >= b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '<=') 
    {
        // console.log('ENTERED <=');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a <= b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '!=') 
    {
        // console.log('ENTERED !=');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a != b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '!') 
    {
        // console.log('ENTERED !');
        executionCtr.operationOneOperand(quadruple , function(a) { return (a < 1) ? 1 : 0; })
        this.nextProcess();
    }
    else if (quadruple.operator == '||') 
    {
        // console.log('ENTERED OR');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a || b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '&&') 
    {
        // console.log('ENTERED AND');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a && b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '>') 
    {
        // console.log('ENTERED Greater Than');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a > b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '<') 
    {
        // console.log('ENTERED Less Than');
        executionCtr.operationTwoOperands(quadruple , function(a, b) { return a < b; });
        this.nextProcess();
    }
    else if (quadruple.operator == '=') 
    {
        // Diferent
        executionCtr.operationOneOperand(quadruple , function(a) { return a; })
        // console.log("EQUAL OPERATION");
        this.nextProcess();
    }
    // Other Quadruple Operators
    else if (quadruple.operator == 'ENDFUNC') 
    {
        // console.log('Enter End Function' );
        localMemory.pop();
        currentQuadrupleIndex = jumps.peek()
        jumps.pop();
        this.nextProcess();
    }
    else if (quadruple.operator == 'RETURN') 
    {
        // console.log('Enter Return' );
        //console.log(localMemory);
        executionCtr.operationOneOperand(quadruple , function(a) { return a; });
        this.nextProcess();
    }
    else if (quadruple.operator == 'ERA') 
    {
        prepareLocal.push(new Map(executionCtr.localFunctionMap.get(quadruple.iDirOne)));
        // console.log('Enter Era' );
        this.nextProcess();
    }
    else if (quadruple.operator == 'GOSUB') 
    {
        // console.log('Enter Go Sub' );
        localMemory.push(prepareLocal.peek());
        prepareLocal.pop();
        jumps.push(currentQuadrupleIndex);
        currentQuadrupleIndex = quadruple.iDirThree - 1;
        this.nextProcess();
        

        
    }
    else if (quadruple.operator == 'PARAMETER') 
    {
        // console.log('Enter Parameter' );
        executionCtr.initParam(quadruple , function(a) { return a; });
        this.nextProcess();
    }
    else if (quadruple.operator == 'GOTOF') 
    {
        // console.log('Enter Go To False' );

        // Check if var is in the local memory first
        if(!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne) ){
            // If the condition is false then do the GOTO.
            if(localMemory.peek().get(quadruple.iDirOne) < 1 ){
                currentQuadrupleIndex = quadruple.iDirThree - 1;
            }
        }
        // Global Var.
        else {
            if(executionCtr.globalMap.get(quadruple.iDirOne) < 1 ){
                currentQuadrupleIndex = quadruple.iDirThree - 1;
            }
        }
        this.nextProcess();
    }
    else if (quadruple.operator == 'GOTO') 
    {
        // console.log('Enter Go To' );
        currentQuadrupleIndex = quadruple.iDirThree - 1;
        this.nextProcess();
    }

    else if (quadruple.operator == 'VERIFY'){
        this.verify(quadruple);
        this.nextProcess();
    }else if (quadruple.operator == 'WRITE'){
        if(quadruple.iDirOne.start){
            let value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne.sum ))? localMemory.peek().get(quadruple.iDirOne.sum ) : executionCtr.globalMap.get(quadruple.iDirOne.sum );
            quadruple.iDirOne = quadruple.iDirOne.start + value;
        }
        let value = (!localMemory.isEmpty() && localMemory.peek().has(quadruple.iDirOne ))? localMemory.peek().get(quadruple.iDirOne ) : executionCtr.globalMap.get(quadruple.iDirOne );
        output = output + value;
        //console.log(executionCtr.globalMap);
        this.nextProcess();
    } else if(quadruple.operator == 'ENDLINE'){
        console.log(output);
        output = '';
        this.nextProcess();
    }else {
        throw new Error('Error: No se encontró el operador del quádruplo.')
    }
}


module.exports = executionCtr;