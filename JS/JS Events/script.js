let btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> YOU CLICKED </b>"
})
btn.addEventListener("contextmenu", ()=>{
    alert("Right click....")
})