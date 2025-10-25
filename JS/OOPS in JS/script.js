// let obj = {
//   roll: 11,
//   name: "Varad",
// };
// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;//it is like inheritance we can use propertis of animal in rabbit using __proto__.

// rabbit.eats;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created....");
  }
  eats() {
    console.log("Eating....");
  }
  jumps() {
    console.log("Jumping....");
  }
}
let a = new Animal("rabbit");
console.log(a);

class Lion extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    console.log("Lion is created....");
  }
  eats() {
    console.log("Lion is eating....");
  }
}

let l = new Lion("Lion");
