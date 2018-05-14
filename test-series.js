const series = require("async").series;
series([
    function(callback) {
        // do some stuff ...
        console.log('step 1');
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        console.log('step 2');
        callback(null, 'two');
    },
    function(callback) {
        // do some more stuff ...
        console.log('step 3');
        callback('ERROR 3', 'three');
    },
    function(callback) {
        // do some more stuff ...
        console.log('step 4');
        callback(null, 'four');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
    if(!err){
        console.log(results);
     
    }else{
        console.log(err);
    }
    
});

