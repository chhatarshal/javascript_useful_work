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

//What will the code below output to the console and why ?

console.log(1 +  "2" + "2"); // The first operation to be performed in 1 + "2". Since one of the operands ("2") is a string, JavaScript assumes it needs to perform string concatenation and therefore converts the type of 1 to "1", 1 + "2" yields "12". Then, "12" + "2" yields "122".
console.log(1 +  +"2" + "2"); // Based on order of operations, the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, yielding "32".
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2"); //Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.
console.log( "A" - "B" + 2); //As exlained in the previous example, "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.
console.log('-------some -- experiment --');
console.log(NaN == NaN)
console.log("A" - "B");
console.log("A" - "B" == NaN) // false
console.log(NaN + 2) // NaN
console.log(NaN + "2") // NaN2
console.log(+"2")


//The following recursive code will cause a stack overflow if the array list is too large. 
//How can you fix this and still retain the recursive pattern?

//Question:
var list = ['a','b','c','d','e','f','g','h'];//readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

//answer
var list = ['a','b','c','d','e','f','g','h'];

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout(nextListItem(), 0);
    }
};


console.log(`The stack overflow is eliminated because the event loop handles the recursion, 
not the call stack. When nextListItem runs, if item is not null, 
the timeout function (nextListItem) is pushed to the event queue and the function exits, 
thereby leaving the call stack clear. When the event queue runs its timed-out event, 
the next item is processed and a timer is set to again invoke nextListItem. Accordingly, 
the method is processed from start to finish without a direct recursive call, 
so the call stack remains clear, regardless of the number of iterations.`);

console.log('What will be output of below code???');

var callbacks = [];
console.log('inside..loop');
for (var i = 0; i < 4; i++) {
  callbacks.push(() => console.log(i));
  console.log(i)
}

console.log('loop end...');
console.log(callbacks);
callbacks[0]();
callbacks[1]();
callbacks[2]();
callbacks[3]();


function func() {
    // Start of TDZ for deadVariable
    
    // we can still do something here, just our deadVariable is not available yet
    const exampleVariable = 5;
    console.log(exampleVariable); // 5
    
    // End of TDZ for deadVariable
    let deadVariable = 10;
    
    console.log(deadVariable);  // 10
  }
  
  func();


  function func1() {
    return deadOrAlive;
 }
 
 let deadOrAlive = 'alive!'
 
 console.log(func1());  // alive!
