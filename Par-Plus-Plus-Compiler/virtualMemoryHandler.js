let memoryCtr = {};

const globalIntStartDir = 0;
const globalFloatStartDir = 1000;
const globalCharStartDir = 2000;

const localIntStartDir = 3000;
const localFloatStartDir = 4000;
const localCharStartDir = 5000;

const endMemory = 6000;

// Temporal Memory. (no separar por tipos)
const temporalMemoryStartDir = 7001;

// Constant Memory. (no separar por tipos)
const constMemoryStartDir = 9000;

// Initialize start and end of temporal space
memoryCtr.temporalMemoryStartDir = temporalMemoryStartDir;
memoryCtr.temporalMemoryEndDir = constMemoryStartDir-1;


//Initialize TemporalMemoty
let iTemporalMemoryList = [];
for (var i = memoryCtr.temporalMemoryStartDir; i <= memoryCtr.temporalMemoryEndDir ; i++) {
    iTemporalMemoryList.push(i);
}


// Initialize the global virtual memory. Separate by data types.
memoryCtr.iGlobalIntCount = globalIntStartDir;      
memoryCtr.iGlobalFloatCount = globalFloatStartDir;    
memoryCtr.iGlobalCharCount = globalCharStartDir;

// Create a local memory and reset it after function execution. Separate by data types.
memoryCtr.iLocalIntCount = localIntStartDir;      
memoryCtr.iLocalFloatCount = localFloatStartDir;    
memoryCtr.iLocalCharCount = localCharStartDir;

// Create constant memory
memoryCtr.iConstantCount = constMemoryStartDir;


// Faltan metodos de push y pop

// t1 t2 t3 t4
// + 2 3 T1
// + 1 T1 T2

// Reset the Local Memory.
memoryCtr.deleteLocalMemory = function() {
    memoryCtr.iLocalIntCount = localIntStartDir;      
    memoryCtr.iLocalFloatCount = localFloatStartDir;    
    memoryCtr.iLocalCharCount = localCharStartDir;
}

// =============== GLOBAL Handler ===========================
// Add a new Global Int memory slot.
memoryCtr.addGlobalIntMemorySlot = function() {
    if(memoryCtr.iGlobalIntCount >= globalIntStartDir){
        memoryCtr.iGlobalIntCount += 1;
        if(memoryCtr.iGlobalIntCount > globalFloatStartDir){   
            memoryCtr.iGlobalIntCount = -1;
        }
    }   
}

// Add a new Global Float memory slot.
memoryCtr.addGlobalFloatMemorySlot = function() {
    if(memoryCtr.iGlobalFloatCount >= globalFloatStartDir){
        memoryCtr.iGlobalFloatCount += 1;
        if(memoryCtr.iGlobalFloatCount > globalCharStartDir){   
            memoryCtr.iGlobalFloatCount = -1;
        }
    }     
}

// Add a new Global Char memory slot.
memoryCtr.addGlobalCharMemorySlot = function() {
    if(memoryCtr.iGlobalCharCount >= globalCharStartDir){
        memoryCtr.iGlobalCharCount += 1;
        if(memoryCtr.iGlobalCharCount > localIntStartDir){   
            memoryCtr.iGlobalCharCount = -1;
        }
    }      
}

// =============== End Handler ===========================


// =============== LOCAL Handler ===========================
// Add a new Local Int memory slot.
memoryCtr.addLocalIntMemorySlot = function() {
    if(memoryCtr.iLocalIntCount >= localIntStartDir ){
        memoryCtr.iLocalIntCount += 1;
        if(memoryCtr.iLocalIntCount > localFloatStartDir){   
            memoryCtr.iLocalIntCount = -1;
        }
    } 
}

// Add a new Local Float memory slot.
memoryCtr.addLocalFloatMemorySlot = function() {
    if(memoryCtr.iLocalFloatCount >= localFloatStartDir){
        memoryCtr.iLocalFloatCount += 1;
        if(memoryCtr.iLocalFloatCount > localCharStartDir){   
            memoryCtr.iLocalFloatCount = -1;
        }
    }      
}

// Add a new Local Char memory slot.
memoryCtr.addLocalCharMemorySlot = function() {
    if(memoryCtr.iLocalCharCount >= localCharStartDir){
        memoryCtr.iLocalCharCount += 1;
        if(memoryCtr.iLocalCharCount > endMemory){   
            memoryCtr.iLocalCharCount = -1;
        }
    }    
}



// =============== END Handler ===========================

// =============== Assign Handler ===========================
memoryCtr.setDirection = function(type, currentScope){
    let dir = -1;
    // console.log('type is: ' + type + ' | CurrScope is: ' + currentScope);
    if(type === "INT"){
        if(currentScope === "Global"){
            dir = memoryCtr.iGlobalIntCount;
            memoryCtr.addGlobalIntMemorySlot();
            return dir;
        }else{
            dir = memoryCtr.iLocalIntCount;
            memoryCtr.addLocalIntMemorySlot();
            return dir;
        }
    }else if(type === "CHAR"){
        if(currentScope === "Global"){
            dir = memoryCtr.iGlobalCharCount;
            memoryCtr.addGlobalCharMemorySlot();
            return dir;
        }else{
            dir = memoryCtr.iLocalCharCount;
            memoryCtr.addLocalCharMemorySlot();
            return dir;
        }
    }else{
        if(currentScope === "Global"){
            dir = memoryCtr.iGlobalFloatCount;
            memoryCtr.addGlobalFloatMemorySlot();
            return dir;
        }else{
            dir = memoryCtr.iLocalFloatCount;
            memoryCtr.addLocalFloatMemorySlot();
            return dir;
        }
    }
}


memoryCtr.getType = function(dir){

    if(dir.start){
        dir = dir.start;
    }


    if(dir >= globalIntStartDir && dir < globalFloatStartDir){
        return "INT";
    }else if(dir >= globalFloatStartDir && dir < globalCharStartDir){
        return "FLOAT"
    }else if(dir >= globalCharStartDir && dir < localIntStartDir){
        return "CHAR"
    }else if(dir >= localIntStartDir && dir < localFloatStartDir){
        return "INT";
    }else if(dir >= localFloatStartDir && dir < localCharStartDir){
        return "FLOAT";
    }else if(dir >= localCharStartDir && dir < endMemory){
        return "CHAR";
    }
}


// CHAR memory handler
memoryCtr.addConstantMemorySlot = function() {
    this.iConstantCount += 1;
}

memoryCtr.freeTemporalMemorySlot = function(i) {
    iTemporalMemoryList.push(i);
}


memoryCtr.restartTemporalMemorySlot = function() {
    iTemporalMemoryList = [];
    for (var i = memoryCtr.temporalMemoryStartDir; i <= memoryCtr.temporalMemoryEndDir ; i++) {
        iTemporalMemoryList.push(i);
        // console.log("Memory restarted");
    }
}

memoryCtr.restartLocalMemory = function(){
    memoryCtr.iLocalIntCount = localIntStartDir;      
    memoryCtr.iLocalFloatCount = localFloatStartDir;    
    memoryCtr.iLocalCharCount = localCharStartDir;
}

// Regresar un número en nuestro rango de la temp memory.
memoryCtr.getTemporalMemorySlot = function() {
    // Quitar primer elemento de la lista de temporales
    if(iTemporalMemoryList.length < 1){
        return -1;
    }
    let i = iTemporalMemoryList[0];
    // Delete first element.
    iTemporalMemoryList.splice(0, 1);

    // console.log(iTemporalMemoryList);
    return i;
}


module.exports = {
    memoryCtr: memoryCtr
};