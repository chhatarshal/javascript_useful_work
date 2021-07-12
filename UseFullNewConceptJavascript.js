const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]\\

const newarr = [1, -1, 1]
const newarr2 = newarr.map(x => x * 2)
console.log(newarr2)

const array2 = [5, 12, 8, 130, 44];

const found = array2.find(element => element > 10);

console.log(found);
// expected output: 12


const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(fruit) {
    return fruit.name === 'cherries';
  }
  
  function printval(fruit) {
   console.log(fruit)
  }
  

  console.log(inventory.find(isCherries));
   inventory.find(printval);
  // { name: 'cherries', quantity: 5 }


  console.log('simple function');

  function myfun(val) {
    console.log('my function called' + val);
  }

  myfun('newvalue');

  var ar = (val) => console.log('hey I am arrow function');

  ar('newvalue again');

  

