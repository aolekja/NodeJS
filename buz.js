var Buz = function () {}; 
Buz.prototype.log = function () { 	
    console.log('buz!'); 
}; 
Buz.prototype.log2 = function (msg) { 	
    console.log('newbuz!' + msg); 
}; 
module.exports = new Buz();

