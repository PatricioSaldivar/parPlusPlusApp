// Declare an object for the quadruple.
// Create a Quadruple.
class Quadruple {
    // operator;
    // iDirOne;      // Ptr to First Operand.
    // iDirTwo;      // Ptr to Second Operand.
    // iDirThree;    // Ptr to Response. 
    // bGoTo;
    constructor (operator, iDirOne, iDirTwo, iDirThree) {
        this.operator = operator;
        this.iDirOne = iDirOne;
        this.iDirTwo = iDirTwo;
        this.iDirThree = iDirThree;
    }

    fillDestinationDir (dir){
        this.iDirThree = dir;
    }

    /* GOTO:
    "GOTO" 
    --> "GoTo", null, null, Destination Addr, false, false, true

      GOTO True:
    --> GOTOV, null, null, Destination Addr, false, false, true

      GOTO True:
    --> GoTOF, null, null, Destination Addr, false, false, true
    */
}
module.exports = Quadruple;