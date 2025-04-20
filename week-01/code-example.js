// class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  sayHello() {
    console.log("Hello!");
  }
}

// pointer syntax with objects
let user = {
  name: "Loko Ismael",
  age: 25,
  country: "Cameroon",
  isDeveloper: true,
};

let userPointer = user;
console.log(userPointer); // { name: 'Loko Ismael', age: 25, country: 'Cameroon', isDeveloper: true }
userPointer.name = "John Doe";
console.log(user); // { name: 'John Doe', age: 25, country: 'Cameroon', isDeveloper: true }

// pointer syntax with arrays
let arr = [1, 2, 3, 4, 5];
let arrPointer = arr;
console.log(arrPointer); // [ 1, 2, 3, 4, 5 ]
arrPointer.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
