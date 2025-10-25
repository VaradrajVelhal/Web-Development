async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
// let a = await.sleep()
// let b = await.sleep()
// this 2 will throw error
// Uncaught ReferenceError: await is not defined
//     at script.js:8:9

(async function main() {
  let a = await sleep();
  console.log(a);

  let b = await sleep();
  console.log(a);
})(); //This is called immediately invocked function

// destructuring
// let [a, b] = [1, 2, 3, 4];
// console.log(a, b); // 1 2

let [x, y, ...args] = [1, 2, 3, 4, 5, 6];
// console.log(x, y, args); // 1 2  [3, 4, 5, 6]

// we can also do this with object
let obj = {
  a: 11,
  b: 22,
  c: 33,
  d: 44,
};
let { a, b } = obj;
// console.log(a, b); //11 22

// Spread syntax

function sum(a, b, c) {
  return a + b + c;
}
let arr = [100, 200, 300];
console.log(sum(arr[0], arr[1], arr[2])); //600
// we can also write it like this
console.log(sum(...arr)); //600
