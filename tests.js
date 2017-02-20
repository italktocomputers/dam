var dam = require('./dam.js');

var myDam = dam.create(5000, 3, function(items) {
    console.log("Dam1: " + items);
});

var myDam2 = dam.create(10000, 10, function(items) {
    console.log("Dam2: " + items);
});

myDam.add("Andrew");
myDam.add("Laura");
myDam.add("Julia");
myDam.add("Penny");

myDam.init();
myDam2.init();

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
