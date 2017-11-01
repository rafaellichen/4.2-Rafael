if(!localStorage.getItem("muffin")) {
    localStorage.setItem("muffin","0")
} else {
    localStorage.setItem("muffin","10")
}
eat.addEventListener("click", e=> {
    localStorage.setItem("muffin",(Number(localStorage.getItem("muffin"))-1).toString())
    document.getElementById("count").innerHTML= "Muffin Count: "+localStorage.getItem("muffin")
})
bake.addEventListener("click", e=> {
    localStorage.setItem("muffin",(Number(localStorage.getItem("muffin"))+5).toString())
    document.getElementById("count").innerHTML= "Muffin Count: "+localStorage.getItem("muffin")
})
give.addEventListener("click", e=> {
    localStorage.setItem("muffin","0")
    document.getElementById("count").innerHTML= "Muffin Count: 0"
    alert("Generosity!")
})