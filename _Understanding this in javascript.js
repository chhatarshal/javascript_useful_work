//Understanding this in javascript
function Bicycles(speed, gear, tyre_pressure) { 
    console.log(this)
    this.speed = speed
    this.gear = gear
    this.tyre_pressure =tyre_pressure
    this.inflate_tyre = function() {
        this.tyre_pressure = this.tyre_pressure + 10
        console.log(this);
    }
    
}

var bycycle = new Bicycles('43', 3, 30)
console.log(
    'before calling inflate tyre'
)
console.log(bycycle)
bycycle.inflate_tyre()
console.log(
    'after calling inflate tyre'
)
console.log(bycycle)
console.log('Lets call inflate tyre again and see what it print as this')
bycycle.inflate_tyre()


function Mechanic(name) {
    this.name = name;
}

var mike = new Mechanic('Mike')
mike.inflate_tyren =  bycycle.inflate_tyre;
mike.inflate_tyren();
mike.inflate_tyren();
mike.inflate_tyren();
console.log(mike)
console.log(bycycle)

mike.inflate_tyren.call(bycycle) // 4th way of calling a object
// in above line we are binding object 
console.log(bycycle)