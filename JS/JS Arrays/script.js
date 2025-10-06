let arr = [1, 2, 3, 4];
console.log(arr)
console.log(arr.length)
console.log(arr[0])
//Arrays are mutable you can change index of array
arr[0] = 60;
console.log(arr);

//Map, Filter & Reduce
let a = [1, 9, 7, 10, 5];
// let newA = [];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newA.push(element ** 2);
// } Insted of this we can use map

let newA = a.map((e)=>{
    return e ** 2;
})

console.log(newA);

//filter

const greaterThen7 = (e)=>{
    if (e > 7) {
        return true;
    }
    return false;
}
//now our new array will only contain element greater then 7
console.log(a.filter(greaterThen7));

//Reduce

let arr2 = [1, 2, 3, 4]
const add = (a, b)=>{
    return a+b;
}

console.log(arr2.reduce(add))//10