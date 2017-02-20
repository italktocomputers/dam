//
// This module collects items and releases them after so many milliseconds have passed or number of 
// items have been collected, whichever comes first. 
//
module.exports = {
    //
    // This function will create our context. 
    //
    // @param timeLimit: Number - Max number of milliseconds before releasing items.
    // @param sizeLimit: Number - Max number of items dam will hold before releasing items.
    // @param callback: ([AnyObject]) - Callback function you want invoked each time dam
    // releases.  It will pass the items being released to the callback function.
    // @return The create function will return an interface w/ three functions; start, stop, and add.
    // Call the start/stop functions to start/stop the process.  Use the add function to add items 
    // to the dam.
    //
    create: function(timeLimit, sizeLimit, callback) {
        var items = [];
        var timeElasped = Date.now();
        var interval;

        return {
            start: function() {
                interval = setInterval(function() {
                    if (items.length >= sizeLimit || (items.length && (Date.now() - timeElasped) >= timeLimit)) {
                        timeElasped = Date.now();
                        callback(items.slice());
                        items = [];
                    }
                }, 100);
            },
            stop: function() {
                clearInterval(interval);
            },
            add: function(item) {
                items.push(item);
            }
        }
    }
}
