console.log("Hello")
// let Boxes = document.getElementsByClassName("box")
// console.log(Boxes)
// Boxes[2].style.backgroundColor = "orange"

// document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "red"

console.log(document.querySelectorAll(".box"))//we cannot apply .style.backgroundcolor = "red" because its collection
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "red"
})