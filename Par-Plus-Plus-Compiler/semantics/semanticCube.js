// Done!
// Create the Semantic Cube

// A semantic cube indicates the resulting data type of applying an operator to two operands

// Enum of our operators in order to make our cube easier to read.
const opEnum = {
    PLUS: 0,
    MINUS: 1,
    MULT: 2,
    DIV: 3,
    MOD: 4,
    EQ: 5,
    GTEQ: 6,
    LTEQ: 7,
    NEQ: 8,
    NOT: 9,
    OR: 10,
    AND: 11,
    GT: 12,
    LT: 13,
    ASSIGN: 14,
}
Object.freeze(opEnum);

// Enum of our data types in order to make our cube easier to read.
const typesEnum = {
    INT: 0,
    FLOAT: 1,
    DOUBLE: 2,
    BOOLEAN: 3,
    CHAR: 4,
    STRING: 5 
}
Object.freeze(typesEnum);


var arrSemanticCube = new Array(15).fill('ERROR');
// Create 2D matrix
for (iRow = 0; iRow < arrSemanticCube.length; iRow++) {
    // 6 Types of operators.
    arrSemanticCube[iRow] = new Array(6).fill('ERROR');
}
   // create 3D matrix
for (iRow = 0; iRow < arrSemanticCube.length; iRow++) {
    for (iCol = 0; iCol < arrSemanticCube[0].length; iCol++) {
        // 6 Types of operators.
        arrSemanticCube[iRow][iCol] = new Array(6).fill('ERROR');
    }
}

// =============== PLUS OPERATOR ===============
    // INT
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.PLUS][typesEnum.DOUBLE][typesEnum.INT] = 'DOUBLE';
arrSemanticCube[opEnum.PLUS][typesEnum.DOUBLE][typesEnum.FLOAT] = 'DOUBLE';
arrSemanticCube[opEnum.PLUS][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.PLUS][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.PLUS][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'ERROR'; // Check
arrSemanticCube[opEnum.PLUS][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.CHAR] = 'STRING';  // Concatenate Char
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.STRING] = 'STRING' // Concatenate String
// =============== END PLUS ====================



// =============== MINUS OPERATOR ===============
        // INT
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.MINUS][typesEnum.DOUBLE][typesEnum.INT] = 'DOUBLE';
arrSemanticCube[opEnum.MINUS][typesEnum.DOUBLE][typesEnum.FLOAT] = 'DOUBLE';
arrSemanticCube[opEnum.MINUS][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.MINUS][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.MINUS][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'ERROR'; // Check
arrSemanticCube[opEnum.MINUS][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.STRING] = 'ERROR' 
// =============== END MINUS ====================

// =============== MULT OPERATOR (multiplication) ===============
    // INT  
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.MULT][typesEnum.DOUBLE][typesEnum.INT] = 'DOUBLE';
arrSemanticCube[opEnum.MULT][typesEnum.DOUBLE][typesEnum.FLOAT] = 'DOUBLE';
arrSemanticCube[opEnum.MULT][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.MULT][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.MULT][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'ERROR'; // Check
arrSemanticCube[opEnum.MULT][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  // Concatenate Char
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END MULT ====================
        

// =============== DIV OPERATOR (Division) ===============
    // INT  
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.DIV][typesEnum.DOUBLE][typesEnum.INT] = 'DOUBLE';
arrSemanticCube[opEnum.DIV][typesEnum.DOUBLE][typesEnum.FLOAT] = 'DOUBLE';
arrSemanticCube[opEnum.DIV][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.DIV][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.DIV][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'ERROR'; // Check
arrSemanticCube[opEnum.DIV][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  // Concatenate Char
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END DIV ====================
            

// =============== MOD OPERATOR (Módulo) ===============
    // INT  
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.DOUBLE] = 'INT';
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.DOUBLE] = 'FLOAT';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.MOD][typesEnum.DOUBLE][typesEnum.INT] = 'DOUBLE';
arrSemanticCube[opEnum.MOD][typesEnum.DOUBLE][typesEnum.FLOAT] = 'DOUBLE';
arrSemanticCube[opEnum.MOD][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.MOD][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.MOD][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'ERROR'; 
arrSemanticCube[opEnum.MOD][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.STRING] = 'ERROR' 
// =============== END MOD (Módulo) ====================



// =============== EQ OPERATOR (Equal  '==' ) ===============
    // INT  
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.EQ][typesEnum.DOUBLE][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.DOUBLE][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.EQ][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.EQ][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.EQ][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.CHAR] = 'BOOLEAN';  // Check
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.STRING] = 'BOOLEAN'
    // STRING
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.CHAR] = 'BOOLEAN';  
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.STRING] = 'BOOLEAN' // Concatenate String
// =============== END EQ (Equal) ====================

    

// =============== GTEQ OPERATOR (Greater Than or Equal) ===============
    // INT  
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.GTEQ][typesEnum.DOUBLE][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.DOUBLE][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.GTEQ][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.GTEQ][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.GTEQ][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.CHAR] = 'BOOLEAN';  // Check
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.STRING] = 'BOOLEAN'
    // STRING
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.CHAR] = 'BOOLEAN';  
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.STRING] = 'BOOLEAN' // Concatenate String
// =============== END GTEQ (Greater Than or Equal) ====================


// =============== LTEQ OPERATOR (Less Than or Equal) ===============
    // INT  
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.LTEQ][typesEnum.DOUBLE][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.DOUBLE][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.LTEQ][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.LTEQ][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.LTEQ][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.CHAR] = 'BOOLEAN';  // Check
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.STRING] = 'BOOLEAN'
    // STRING
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.CHAR] = 'BOOLEAN';  
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.STRING] = 'BOOLEAN' // Concatenate String
// =============== END LTEQ (Less Than or Equal) ====================


// =============== NEQ OPERATOR (Not Equal  '!=' ) ===============
    // INT  
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.NEQ][typesEnum.DOUBLE][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.DOUBLE][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.NEQ][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.NEQ][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.NEQ][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.CHAR] = 'BOOLEAN';  // Check
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.STRING] = 'BOOLEAN'
    // STRING
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.CHAR] = 'BOOLEAN';  
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.STRING] = 'BOOLEAN' // Concatenate String
// =============== END NEQ (Not Equal) ====================




// =============== NOT OPERATOR (Not '!' ) ===============
    // INT  
arrSemanticCube[opEnum.NOT][typesEnum.INT][typesEnum.INT] = 'BOOLEAN';
    // FLOAT
arrSemanticCube[opEnum.NOT][typesEnum.FLOAT][typesEnum.FLOAT] = 'BOOLEAN';
    // DOUBLE
arrSemanticCube[opEnum.NOT][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'BOOLEAN';
    // BOOLEAN
arrSemanticCube[opEnum.NOT][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
    // CHAR
arrSemanticCube[opEnum.NOT][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
    // STRING
arrSemanticCube[opEnum.NOT][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END NOT (Not !) ====================



// =============== OR OPERATOR (OR || ) ===============
    // INT  
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.OR][typesEnum.DOUBLE][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.DOUBLE][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.OR][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.OR][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END OR (|| ) ====================


// =============== AND OPERATAND (AND && ) ===============
    // INT  
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.AND][typesEnum.DOUBLE][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.DOUBLE][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.AND][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.AND][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END AND ( && ) ====================



// =============== GT OPERATOR (Greater Than ) ===============
    // INT  
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.GT][typesEnum.DOUBLE][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.DOUBLE][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.GT][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.GT][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.GT][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.CHAR] = 'BOOLEAN';  // Check
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.STRING] = 'BOOLEAN'
    // STRING
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.CHAR] = 'BOOLEAN';  
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.STRING] = 'BOOLEAN' // Concatenate String
// =============== END GT (Greater Than) ====================


// =============== LT OPERATOR (Less Than ) ===============
    // INT  
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.LT][typesEnum.DOUBLE][typesEnum.INT] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.DOUBLE][typesEnum.FLOAT] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'BOOLEAN';
arrSemanticCube[opEnum.LT][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.LT][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.LT][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.CHAR] = 'BOOLEAN';  // Check
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.STRING] = 'BOOLEAN'
    // STRING
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.CHAR] = 'BOOLEAN';  
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.STRING] = 'BOOLEAN' // Concatenate String
// =============== END LT (Less Than) ====================



// =============== ASSIGN OPERATOR (=) ===============
    // INT  
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.DOUBLE] = 'INT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.DOUBLE] = 'FLOAT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // DOUBLE
arrSemanticCube[opEnum.ASSIGN][typesEnum.DOUBLE][typesEnum.INT] = 'DOUBLE';
arrSemanticCube[opEnum.ASSIGN][typesEnum.DOUBLE][typesEnum.FLOAT] = 'DOUBLE';
arrSemanticCube[opEnum.ASSIGN][typesEnum.DOUBLE][typesEnum.DOUBLE] = 'DOUBLE';
arrSemanticCube[opEnum.ASSIGN][typesEnum.DOUBLE][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.DOUBLE][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.DOUBLE][typesEnum.STRING] = 'ERROR';
    // BOOLEAN
arrSemanticCube[opEnum.ASSIGN][typesEnum.BOOLEAN][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.BOOLEAN][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.BOOLEAN][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.BOOLEAN][typesEnum.BOOLEAN] = 'BOOLEAN'; // Here
arrSemanticCube[opEnum.ASSIGN][typesEnum.BOOLEAN][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.BOOLEAN][typesEnum.STRING] = 'ERROR'
    // CHAR
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.CHAR] = 'CHAR';  // Check
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.DOUBLE] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.BOOLEAN] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.CHAR] = 'STRING';  
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.STRING] = 'STRING' // Concatenate String
// =============== END ASSIGN OPERATOR (=) ====================

module.exports = arrSemanticCube;