// Usar este archivo si se requiere utilizar un servidor o bien para hacer uso de HTML.

// https://tomassetti.me/antlr-mega-tutorial/#htmlchatlistener.js
const http = require('http');
const antlr4 = require('antlr4/index');
const ParPlusPlusLexer = require('./ParPlusPlusLexer');
const ParPlusPlusParser = require('./ParPlusPlusParser');
const HtmlParPlusPlusListener = require('./htmlListener').htmlListener;

const ParPlusPlusListener = require('./ParPlusPlusListener');
// Usar llaves porque se usa exports y no module.exports
const DefaultListener = require('./defaultListener');

//  Podemos usar ésto si queremos crear nuestro propio servidor pero no es necesario manejar respuestas.
http.createServer((req, res) => {
   res.writeHead(200, {
       'Content-Type': 'text/html',        
   });
   res.write('<html><head><meta charset="UTF-8"/></head><body>');
    // var input = "program Ejemplo; var int i, j, p; int arreglo[10]; float valor; int matriz[3][8];";
    var input = "program Ejemplo;";
    var chars = new antlr4.InputStream(input);
    var lexer = new ParPlusPlusLexer.ParPlusPlusLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new ParPlusPlusParser.ParPlusPlusParser(tokens);
    parser.buildParseTrees = true;   
    // Poner la primer regla
    var tree = parser.program();
    var htmlParPlusPlus = new HtmlParPlusPlusListener(res);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlParPlusPlus, tree);
    res.write('<h1> hello world </h1>')
    res.write('</body></html>');
    res.end();
}).listen(1337);

