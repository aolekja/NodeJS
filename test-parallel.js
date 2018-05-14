const async = require("async");
async.parallel([
    function(callback) {
        setTimeout(function() {
            console.log('one');
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            console.log('two');
            callback(null, 'two');
        }, 100);
    },
    function(callback) {
        setTimeout(function() {
            console.log('three');
            callback('Error step3', 'three');
        }, 150);
    }
],
// optional callback
function(err, results) {
    console.log(err);
    console.dir(results);
});
