
// Simple demonstration of function scope.

var n = 1;

function printSomething() {
    console.log(n);
    var n = 2;
    console.log(n);
}

 printSomething();
