/*
Copyright (c) 2017 Andrew Schools

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

module.exports = {
    //
    // @name The jsdam module.  
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
