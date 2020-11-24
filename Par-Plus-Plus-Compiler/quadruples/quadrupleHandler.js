// Import our Stack Class.
var Stack = require('stackjs');

// This file will help handle the quadruples.
let QuadrupleCtr = {};

QuadrupleCtr.listQuadruples = new Array();


// Initialize our three stacks
// Operator Stack: A stack that will help to work around the Operators’ precedence.
QuadrupleCtr.POper = new Stack();

// Types Stacks: A stack that will help to keep track of the Type every operand has
QuadrupleCtr.PTypes = new Stack();

// Operands.
QuadrupleCtr.PilaO = new Stack();

// PJumps
QuadrupleCtr.PJumps = new Stack();


QuadrupleCtr.testPila = new Stack();

/* Test Case for Stack
console.log('test Pila');
QuadrupleCtr.testPila.push(1);
QuadrupleCtr.testPila.push(2);
console.log('test pila top: ' + QuadrupleCtr.testPila.peek());
var sum = QuadrupleCtr.testPila.peek() + 2;
QuadrupleCtr.testPila.pop();
QuadrupleCtr.testPila.push(sum);
console.log('test pila top segunda vez: ' + QuadrupleCtr.testPila.peek());
*/

module.exports = QuadrupleCtr;