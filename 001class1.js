var ar = [2, 3, 4]

// removing all elements from array

//1. remove
console.log(ar.length)
ar = [];
console.log(ar.length)

// Problem with this approach if we have referenced same array with two difference 
//references then we have to assign empty array at multiple location

// 2. Good approach

var arr = [2, 3, 4];
console.log(arr.length)
arr.length = 0;
console.log(arr.length)

console.log('What is output of below code.')
var output = (function(x){
    delete x;
    return x;
  })(0);
  
  console.log(output);


  console.log('What is output of below code 2.')
  var x = 1;
var output = (function(){
    delete x;
    return x;
  })();
  
  console.log(output);

  function t(x1) {

    console.log('called....')
    console.log(x1)
    return function(x) {
        console.log('called.....2')
        console.log(x)
    }
  }

  t(10)(20)




  console.log('closure in javascript')

  var globalVar = "abc"; 

// Parent self invoking function 
function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);
 
    }// end of scope innerFunction)(5); // Pass 5 as parameter 
}

outerFunction('2')

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }

  fn_inside = outside(3);
  console.log(fn_inside);
  fn_inside = outside(3)(18);
  console.log(fn_inside);

