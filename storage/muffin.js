if(!localStorage.getItem("muffin")) {
    localStorage.setItem("muffin","10")
    localStorage.setItem("first","1")
    localStorage.setItem("time",Date.now().toString())
    document.getElementById("refresh").style.visibility="hidden"
    document.getElementById("ate").style.visibility="hidden"
} else {
    document.getElementById("count").innerHTML= "Muffin Count: "+localStorage.getItem("muffin")
}
if(localStorage.getItem("first")!="1" && localStorage.getItem("time")!=Date.now().toString()) {
    localStorage.setItem("time",Date.now().toString())
    document.getElementById("refresh").style.visibility="visible"
    document.getElementById("ate").style.visibility="hidden"
    localStorage.setItem("muffin",(Number(localStorage.getItem("muffin"))-1).toString())
    document.getElementById("count").innerHTML= "Muffin Count: "+localStorage.getItem("muffin")
} else {
    localStorage.setItem("first","0")
}
eat.addEventListener("click", e=> {
    localStorage.setItem("muffin",(Number(localStorage.getItem("muffin"))-1).toString())
    document.getElementById("count").innerHTML= "Muffin Count: "+localStorage.getItem("muffin")
    document.getElementById("refresh").style.visibility="hidden"
    document.getElementById("ate").style.visibility="visible"
})
bake.addEventListener("click", e=> {
    localStorage.setItem("muffin",(Number(localStorage.getItem("muffin"))+5).toString())
    document.getElementById("count").innerHTML= "Muffin Count: "+localStorage.getItem("muffin")
    document.getElementById("refresh").style.visibility="hidden"
    document.getElementById("ate").style.visibility="hidden"
})
give.addEventListener("click", e=> {
    localStorage.setItem("muffin","0")
    document.getElementById("count").innerHTML= "Muffin Count: 0"
    document.getElementById("refresh").style.visibility="hidden"
    document.getElementById("ate").style.visibility="hidden"
    alert("Generosity!")
})