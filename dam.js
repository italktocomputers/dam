module.exports = {
    //
    // @name The dam module.  
    // @author: Andrew Schools <andrewschools@me.com>
    // @param timeLimit: Number - Max number of milliseconds before releasing items.
    // @param sizeLimit: Number - Max number of items dam will hold before releasing items.
    // @param callback: ([AnyObject]) - Callback function you want invoked each time dam
    // releases.  It will pass the items being released to the callback function.
    // @return The create function will return an interface w/ two functions; init and add.
    // Call the init function to start the process.  Use the add function to add items to the dam.
    // The dam will release if max number of items are reached or max milliseconds has passed, 
    // whichever comes first.  
    //
    create: function(timeLimit, sizeLimit, callback) {
        var items = [];
        var timeElasped = Date.now();
        var interval;

        return {
            init: function() {
                setInterval(function() {
                    if (items.length >= sizeLimit || (items.length && (Date.now() - timeElasped) >= timeLimit)) {
                        timeElasped = Date.now();
                        callback(items.slice());
                        items = [];
                    }
                }, 100);
            },
            add: function(item) {
                items.push(item);
            }
        }
    }
}
