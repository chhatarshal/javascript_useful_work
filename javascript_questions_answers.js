// Original Source of content is https://www.toptal.com/javascript/interview-questions
//"use strict";

// Question 1.  What will be output ?
(function(){
     var a = b = 3;
  })();

console.log("a defined? " + (typeof a !== 'undefined'));  // a is undefined because of a is local variable
console.log("b defined? " + (typeof b !== 'undefined'));    // b is defined because of b is global variable

// Question 2. What will be output?

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};

myObject.foo = 'updaed foo'
myObject.func();

//Question 3.
console.log("What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?")

console.log("This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries"

+ "Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the $ reference to the jQuery namespace, using jQuery.noConflict(). If this has been done, your code can still use $ employing this closure technique, as follows:"

+ "(function($) { /* jQuery plugin code referencing $ */ } )(jQuery)")



//What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?


//Answer:  The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

//Some of the key benefits of strict mode include:

///Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
//Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
//Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
//Disallows duplicate parameter values. Strict mode throws an error when it detects a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
//Note: It used to be (in ECMAScript 5) that strict mode would disallow duplicate property names (e.g. var object = {foo: "bar", foo: "baz"};) but as of ECMAScript 2015 this is no longer the case.
//Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
//Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.


console.log("Consider the two functions below. Will they both return the same thing? Why or why not?")


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}



console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

// new Question what will be output:

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);


function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
console.log(Number.EPSILON)


 
//Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

  console.log(
      "Write a sum method which will work properly when invoked using either syntax below."
  )

  console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

function sum(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function (y) {
            return x + y;
        }
    }
}


var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();


//How do you add an element at the begining of an array? How do you add one at the end?

var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]