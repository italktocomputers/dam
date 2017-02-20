var dam = require('./jsdam.js');

//
// Create our context.  Release dam every 5 seconds, or if length
// reaches 3 items or more.
//
var myDam = dam.create(5000, 3, function(items) {
    console.log("Dam1: " + items);
});

//
// Create our context.  Release dam every 10 seconds, of or length
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
