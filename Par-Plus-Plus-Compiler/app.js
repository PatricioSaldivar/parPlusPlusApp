// https://tomassetti.me/antlr-mega-tutorial/#htmlchatlistener.js

const {CommonTokenStream, CharStreams, tree} = require('antlr4');
const ParPlusPlusLexer = require('./antlr4AutoGen/ParPlusPlusLexer');
const ParPlusPlusParser = require('./antlr4AutoGen/ParPlusPlusParser');


// Usar llaves porque se usa exports y no module.exports
const DefaultListener = require('./defaultListener');

const {executionCtr, ResultObject} = require('./execution');


export function compiler(data){
    console.log('—————————————————————————————————————————');

    let ParPlusListener = new DefaultListener.DefaultListener();
    // let ParPlusListener = require('./defaultListener');
    var inputFile = new String(data);

    var chars = new CharStreams.fromString(inputFile);
    var lexer = new ParPlusPlusLexer.ParPlusPlusLexer(chars);
    var tokens  = new CommonTokenStream(lexer);
    var parser = new ParPlusPlusParser.ParPlusPlusParser(tokens);
    parser.buildParseTrees = true;   

    let ExecutionResult = new ResultObject();


    // Poner llamar la primer regla
    var arbol = parser.program();
    try {
        tree.ParseTreeWalker.DEFAULT.walk(ParPlusListener, arbol);

        // Prep and execute
        // let ExecutionResult = new ResultObject();

        // console.log(ParPlusListener.listQuadruples);

        executionCtr.startExecution(ParPlusListener.functionTable, ParPlusListener.constantTable, ParPlusListener.listQuadruples, ExecutionResult);
        return ExecutionResult.resultObtained;

    } catch (error) {
        // console.log(ParPlusListener.listQuadruples);
        return error.toString();
    }

    /*
    try {
        console.log(DefaultListener.listQuadruples);
        executionCtr.startExecution(DefaultListener.functionTable, DefaultListener.constantTable, DefaultListener.listQuadruples);
        console.log('result is');
        console.log(resultObtained);
        return resultObtained;
    } 
    catch (error) {
        // console.log(error.toString());
        return error.toString();
    }
    */

    // START Program Execution
    //console.log(DefaultListener.listQuadruples);
    //console.log(DefaultListener.functionTable);
    //console.log(DefaultListener.constantTable);
    // Execution.startExecution(DefaultListener.functionTable, DefaultListener.constantTable, DefaultListener.listQuadruples);
    // return `hola + ${data}`
}