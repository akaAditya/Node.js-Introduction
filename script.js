/** @format */

const arrowFunc = (a, b) => {
  let product = a * b;
  return product;
};
// console.log(arrowFunc(4, 5))

// const Student = {
//   name: "John",
//   age: 20,
//   wishes: function () {
//     console.log("Hello, I am ", this.name);
//   },
// };

// function user({ name }) {
//   return name;
// }
// console.log(user(Student));
// Student.greet(); // Output - Hello, I am  undefined, because this keyword in arrow function pointing to outer/global scope of the function.
// Student.wishes(); // Output - Hello, I am  John, to achieve this we need to use normal function, anonymous functiont but not arrow function.

// Array methods
// map()

const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
const newArray = array.map((item) => {
  if (item === " ") return "empty string";
  return item;
});
// console.log(newArray); //output-  ['apple', 'oranges', 'empty string', 'mango', 'empty string', 'lemon']
// console.log(array); // output- ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const spreadOprtr = [...array, "grapes"];
// console.log(spreadOprtr);
// console.log(array);

// const normalFunction = (arg1, arg2, arg3, arg4) => {
//   return [arg1, arg2, arg3, arg4];
// };
// console.log(normalFunction(1, 2, 3, 4));

// // Using Rest Operator
// const restOperator = (...args) => {
//   return args;
// };
// console.log(restOperator(1, 2, 3, 4));

// const obj1 = { key1: 1, key2: 2 };

// const obj2 = { ...obj1, key1: 1000 };

// console.log(obj1);

// console.log(obj2);

// const obj1 = { key1: 1 };

// const obj2 = { ...obj1 };

// if (obj2 == obj1) {
//   console.log("same objects");
// } else {
//   console.log("different objects");
// }

//Destructuring
// const obj1 = { key1: 1, key2: 2, key3: 1000 };

// const { key1, key3 } = { ...obj1 };

// console.log(key1, key3);

// const arr1 = ["value1", "value2"];

// const [val1, val2] = arr1;

// console.log(val1);

// console.log(val2);

const obj1 = { key1: 1, key2: 2, key3: 1000 };

let { key1, key3 } = obj1;

key1 = 20;

key3 = 123;

// console.log(obj1.key1, obj1.key3);
// console.log(key1, key3);

// async await

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 3000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 5000);
});
const handlePromise = async () => {
  console.log("a");

  console.log("b");

  await p1;
  console.log("c");
  await p2;
  console.log("d");

  console.log("e");
};
handlePromise();
