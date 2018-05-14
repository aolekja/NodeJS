// var http = require('http'); 
// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('yes you can\n');
// }).listen(8000);

// console.log("server running port 8000");

require("./foo");
foo();
foo2("hello");

var bar = require("./bar");
bar();

var bar2 = require("./bar");
bar2("bb");

var fz = require("./fiz.js").fiz;
fz();

var fz2 = require("./fiz.js").fiz2;
fz2("testfz2");

var fizz = require('./fiz');
fizz.fiz();
fizz.fiz2('vip');

var buz = require('./buz');
buz.log();
buz.log2('new pattern3');

var baz = require('./baz.js').Baz; 
baz.log();

var Doo = require('./doo.js'); 
var doo = new Doo(); 
doo.log();

var Qux = require('./qux.js').Qux; 
var qux = new Qux(); 
qux.log();

