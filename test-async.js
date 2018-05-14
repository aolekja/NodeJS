const async = require("async");
async.waterfall([
    function(callback) {
        console.log('step 1');
     //   callback(null, 'one', 'two');
        callback(
          'Error step1' ,'one','twc' 
        );
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
        console.log('step 2');
      //  callback('ERROR PROG', 'THREE')
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        console.log('step 3');
        callback(null, 'done');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        console.log('step 4');
        callback(null, 'final');
    }
], function (err, result) {
    // result now equals 'done'
    if(err){
        console.log(err);
    }
    console.log(result);
   
});
