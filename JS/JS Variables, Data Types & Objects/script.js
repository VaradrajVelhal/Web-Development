console.log("HEY....")
// var a = 6; we use let insted of var because var has gloabal scope and let has block scope 
//so it is better to use "let" to avoid confusion
let a = 6
let b = 8;
let c = "Hello";
console.log(a + b + c);
console.log(typeof a, typeof b, typeof c)
let n = null;
let o = {
    "name": "Varadraj",
    "emp id": 5200
}
console.log(typeof n, typeof o)//object object
o.job_role = "SDE";
console.log(o);
o["emp id"] = 2000;
console.log(o);