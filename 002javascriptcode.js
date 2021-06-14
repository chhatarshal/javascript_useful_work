console.log('checking if variable hold object or array in javascript');

var v = [1, 2, 3]
console.log(v);
console.log(v)
console.log(Object.prototype.toString.call(v))
console.log(typeof v)


console.log('what will be output of below code....')

var bar = true;
console.log(bar + 0);
console.log(bar + 1);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false); 


console.log('what will be output of below code....')
var z = 1, y = z = typeof y;
console.log(y);  

console.log('what will be output of below code....')
// NFE (Named Function Expression 
var foo = function bar() { return 12; };
typeof foo();
console.log(foo())  


console.log('what will be output of below code....')
function bar() { return 12; };
var bar = function () { return 10}
typeof bar();  


console.log('What is function hoisting in JavaScript?')

foo(); // Here foo is still undefined 
var foo = function foo(){ 
    console.log('called foo')
 	return 12; 
};
foo()