## Synopsis

Simple module that collects items and releases them after so many milliseconds have passed or number of items have been collected.

## Code Example

```javascript
var dam = require('./jsdam.js');

//
// Create our context.  Release dam every 5 seconds, or if length
// reaches 3 items or more.
//
var myDam = dam.create(5000, 3, function(items) {
    console.log("Dam1: " + items);
});

//
// Create our context.  Release dam every 10 seconds, or if length
// reaches 10 items or more.
//
var myDam2 = dam.create(10000, 10, function(items) {
    console.log("Dam2: " + items);
});

myDam.add("Andrew");
myDam.add("Laura");
myDam.add("Julia");
myDam.add("Penny");

//
// Start the processes.
//
myDam.start();
myDam2.start();

setTimeout(function() {
    myDam.add("Molly");
}, 2000);

setTimeout(function() {
    myDam.add("MacOs");
    myDam.add("Windows 10");
    myDam.add("REHL");
    myDam.add("OEL");
    myDam.add("Fedora");
}, 3000);

setTimeout(function() {
    myDam.add("TF2");
}, 15000);

myDam2.add("Hello");
myDam2.add("World!");
```

## License

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
