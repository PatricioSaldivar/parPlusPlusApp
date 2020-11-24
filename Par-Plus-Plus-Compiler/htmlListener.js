const antlr4 = require('antlr4/index');
const ParPlusPlusLexer = require('./ParPlusPlusLexer');
const ParPlusPlusParser = require('./ParPlusPlusParser');
var ParPlusPlusListener = require('./ParPlusPlusListener').ParPlusPlusListener;

htmlListener = function(res) {
    this.Res = res;    
    ParPlusPlusListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
htmlListener.prototype = Object.create(ParPlusPlusListener.prototype);
htmlListener.prototype.constructor = htmlListener;

// override default listener behavior
htmlListener.prototype.enterProgram = function(ctx) {          
    this.Res.write("<strong> hello </strong>");    
};


exports.htmlListener = htmlListener;