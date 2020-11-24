const semanticCube = require('./semanticCube')

// This file will help handle the quadruples.
let semanticCubeCtr = {};


semanticCubeCtr.getOperandIndex = function(operand) 
{
    var iIndexOperand;
    if (operand == 'INT')
    {
        iIndexOperand = 0;
    }
    else if (operand == 'FLOAT') {
        iIndexOperand = 1;
    }
    else if (operand == 'DOUBLE') {
        iIndexOperand = 2;
    }
    else if (operand == 'BOOLEAN') {
        iIndexOperand = 3;
    }
    else if (operand == 'CHAR') {
        iIndexOperand = 4;
    }
    else if (operand == 'STRING') {
        iIndexOperand = 5;
    }
    else {
        console.log('ERROR: Incompatible Type');
    }
    return iIndexOperand;
}


semanticCubeCtr.getType = function(operator, typeOne, typeTwo)
{
    var indexOperator;
    var indexTypeOne = this.getOperandIndex(typeOne);
    var indexTypeTwo = this.getOperandIndex(typeTwo);
    
    if (operator == '+') {
        indexOperator = 0;
    }
    else if (operator == '-') {
        indexOperator = 1;
    }
    else if (operator == '*') {
        indexOperator = 2;
    }
    else if (operator == '/') {
        indexOperator = 3;
    }
    else if (operator == '%') {
        indexOperator = 4;
    }
    else if (operator == '==') {
        indexOperator = 5;
    }
    else if (operator == '>=') {
        indexOperator = 6;
    }
    else if (operator == '<=') {
        indexOperator = 7;
    }
    else if (operator == '!=') {
        indexOperator = 8;
    }
    else if (operator == '!') {
        indexOperator = 9;
    }
    else if (operator == '||') {
        indexOperator = 10;
    }
    else if (operator == '&&') {
        indexOperator = 11;
    }
    else if (operator == '>') {
        indexOperator = 12;
    }
    else if (operator == '<') {
        indexOperator = 13;
    }
    else if (operator == '=') {
        indexOperator = 14;
    }
    else
    {
        console.log('ERROR: Incompatible types');
    }
    let typeResult = semanticCube[indexOperator][indexTypeOne][indexTypeTwo];
    return typeResult;
}

module.exports = semanticCubeCtr;