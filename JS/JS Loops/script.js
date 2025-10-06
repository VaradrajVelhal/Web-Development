//Loops
let a = 1;
//For loop
for (let a = 0; a < 6; a++) {
    console.log(a);
}

//forin loop
let obj = {
    name: "Varadraj",
    role: "SWE",
    age : 21
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

//forof loop
for (const iterator of "Varadraj") {
    console.log(iterator)
}

// While loop
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}
