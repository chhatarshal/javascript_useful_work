console.log('style 1');

function callMe(name) {
    console.log(name);
}

callMe('hey you');

console.log('style 2');

const callMe2 = function(name) {
    console.log(name);
}

callMe2('hey you 2');

console.log('arrow function style..');

var callme = name => console.log(name)

callme('hi hellow')