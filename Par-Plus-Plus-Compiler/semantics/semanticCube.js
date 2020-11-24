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
    CHAR: 3,
    STRING: 4 
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
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.PLUS][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';


    // CHAR
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.PLUS][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.CHAR] = 'STRING';  // Concatenate Char
arrSemanticCube[opEnum.PLUS][typesEnum.STRING][typesEnum.STRING] = 'STRING' // Concatenate String
// =============== END PLUS ====================



// =============== MINUS OPERATOR ===============
        // INT
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.MINUS][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';

    // CHAR
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.MINUS][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.MINUS][typesEnum.STRING][typesEnum.STRING] = 'ERROR' 
// =============== END MINUS ====================

// =============== MULT OPERATOR (multiplication) ===============
    // INT  
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.MULT][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';


    // CHAR
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.MULT][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  // Concatenate Char
arrSemanticCube[opEnum.MULT][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END MULT ====================
        

// =============== DIV OPERATOR (Division) ===============
    // INT  
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.DIV][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';

    // CHAR
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.DIV][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  // Concatenate Char
arrSemanticCube[opEnum.DIV][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END DIV ====================
            

// =============== MOD OPERATOR (Módulo) ===============
    // INT  
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; // Check
arrSemanticCube[opEnum.MOD][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.MOD][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.MOD][typesEnum.STRING][typesEnum.STRING] = 'ERROR' 
// =============== END MOD (Módulo) ====================



// =============== EQ OPERATOR (Equal  '==' ) ===============
    // INT  
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.EQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.CHAR] = 'INT';  // Check
arrSemanticCube[opEnum.EQ][typesEnum.CHAR][typesEnum.STRING] = 'INT'
    // STRING
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.CHAR] = 'INT';  
arrSemanticCube[opEnum.EQ][typesEnum.STRING][typesEnum.STRING] = 'INT' // Concatenate String
// =============== END EQ (Equal) ====================

    

// =============== GTEQ OPERATOR (Greater Than or Equal) ===============
    // INT  
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.GTEQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.CHAR] = 'INT';  // Check
arrSemanticCube[opEnum.GTEQ][typesEnum.CHAR][typesEnum.STRING] = 'INT'
    // STRING
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.CHAR] = 'INT';  
arrSemanticCube[opEnum.GTEQ][typesEnum.STRING][typesEnum.STRING] = 'INT' // Concatenate String
// =============== END GTEQ (Greater Than or Equal) ====================


// =============== LTEQ OPERATOR (Less Than or Equal) ===============
    // INT  
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.LTEQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'INT';

arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';

    // CHAR
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.CHAR] = 'INT';  // Check
arrSemanticCube[opEnum.LTEQ][typesEnum.CHAR][typesEnum.STRING] = 'INT'
    // STRING
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.CHAR] = 'INT';  
arrSemanticCube[opEnum.LTEQ][typesEnum.STRING][typesEnum.STRING] = 'INT' // Concatenate String
// =============== END LTEQ (Less Than or Equal) ====================


// =============== NEQ OPERATOR (Not Equal  '!=' ) ===============
    // INT  
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.NEQ][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.CHAR] = 'INT';  // Check
arrSemanticCube[opEnum.NEQ][typesEnum.CHAR][typesEnum.STRING] = 'INT'
    // STRING
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.CHAR] = 'INT';  
arrSemanticCube[opEnum.NEQ][typesEnum.STRING][typesEnum.STRING] = 'INT' // Concatenate String
// =============== END NEQ (Not Equal) ====================




// =============== NOT OPERATOR (Not '!' ) ===============
    // INT  
arrSemanticCube[opEnum.NOT][typesEnum.INT][typesEnum.INT] = 'INT';
    // FLOAT
arrSemanticCube[opEnum.NOT][typesEnum.FLOAT][typesEnum.FLOAT] = 'INT';
    // CHAR
arrSemanticCube[opEnum.NOT][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
    // STRING
arrSemanticCube[opEnum.NOT][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END NOT (Not !) ====================



// =============== OR OPERATOR (OR || ) ===============
    // INT  
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.OR][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';

    // CHAR
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.OR][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.OR][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END OR (|| ) ====================


// =============== AND OPERATAND (AND && ) ===============
    // INT  
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.AND][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.INT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.CHAR] = 'ERROR';  // Check
arrSemanticCube[opEnum.AND][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.CHAR] = 'ERROR';  
arrSemanticCube[opEnum.AND][typesEnum.STRING][typesEnum.STRING] = 'ERROR' // Concatenate String
// =============== END AND ( && ) ====================



// =============== GT OPERATOR (Greater Than ) ===============
    // INT  
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.GT][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.CHAR] = 'INT';  // Check
arrSemanticCube[opEnum.GT][typesEnum.CHAR][typesEnum.STRING] = 'INT'
    // STRING
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.CHAR] = 'INT';  
arrSemanticCube[opEnum.GT][typesEnum.STRING][typesEnum.STRING] = 'INT' // Concatenate String
// =============== END GT (Greater Than) ====================


// =============== LT OPERATOR (Less Than ) ===============
    // INT  
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.LT][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.CHAR] = 'INT';  // Check
arrSemanticCube[opEnum.LT][typesEnum.CHAR][typesEnum.STRING] = 'INT'
    // STRING
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.CHAR] = 'INT';  
arrSemanticCube[opEnum.LT][typesEnum.STRING][typesEnum.STRING] = 'INT' // Concatenate String
// =============== END LT (Less Than) ====================



// =============== ASSIGN OPERATOR (=) ===============
    // INT  
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.INT] = 'INT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.FLOAT] = 'INT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.CHAR] = 'ERROR'; 
arrSemanticCube[opEnum.ASSIGN][typesEnum.INT][typesEnum.STRING] = 'ERROR';
    // FLOAT
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.INT] = 'FLOAT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.FLOAT] = 'FLOAT';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.CHAR] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.FLOAT][typesEnum.STRING] = 'ERROR';
    // CHAR
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.CHAR] = 'CHAR';  // Check
arrSemanticCube[opEnum.ASSIGN][typesEnum.CHAR][typesEnum.STRING] = 'ERROR'
    // STRING
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.INT] = 'ERROR'; 
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.FLOAT] = 'ERROR';
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.CHAR] = 'STRING';  
arrSemanticCube[opEnum.ASSIGN][typesEnum.STRING][typesEnum.STRING] = 'STRING' // Concatenate String
// =============== END ASSIGN OPERATOR (=) ====================

module.exports = arrSemanticCube;