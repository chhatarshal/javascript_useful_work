console.log('Creating simple javascript object');
obj = {};
console.log(obj)

console.log('adding some properties to empty object');
obj = {
    name:'firstname',
    id:'random0111'
};
console.log(obj);

console.log('Exploring different way of accessing object properties');
console.log(obj.name);
console.log(obj.id);

console.log(obj['name']);
console.log(obj['id']);

console.log('Object in javascript is similar to Map in javascript');


console.log('Creating object with functions');

var obj = function() {
    prop1 = 'first object',
    prop2 = 'second object'
}

console.log(obj)

console.log('Creating object with calling function')
function objectCreate() {
    var obj = {}; 
    obj.prop1 = 'first object'
    obj.prop2 = 'second object'
    return obj;
}

console.log(objectCreate())


console.log('Creating object with new keyword and function');

function Objectcreate() { 
    
    this.prop1 = 'first object'
    this.prop2 = 'second object'

}

console.log(new Objectcreate())