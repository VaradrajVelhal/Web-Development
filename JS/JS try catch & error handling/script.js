let a = prompt("Enter first number ");
let b = prompt("Enter second number ");
let sum = parseInt(a) + parseInt(b);
// the user can enter any data other then int so we need to handle error.
if (isNaN(a) || isNaN(b)) {
  throw new Error("Invalid input");
}
// console.log("The sum is ",sum);
// if we want to hadndle errors that are thrown by JS we use try catch.
try {
  console.log("The sum is ", sum * u); //u is not defined
} catch (error) {
  console.log("oh my god !!!!");
} finally {
  console.log("Finally block will always run");
}
// why we use finally keyword we can use console.log(); to print anything after try and catch
//because when we use try catch in function and then return from try block or catch block the linr written without
//finally block will not execute.
