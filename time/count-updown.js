const h1number=document.getElementById("num")
const reverseb=document.getElementById("reverse")
const upb=document.getElementById("up")
const downb=document.getElementById("down")
const multipleb=document.getElementById("multiple")

localStorage.setItem("multiple","1")
localStorage.setItem("value","1")

setInterval(function() {
    h1number.innerText=(Number(h1number.innerText)+Number(localStorage.getItem("value"))*Number(localStorage.getItem("multiple"))).toString()
},20)
reverseb.addEventListener("click", e=> {
    if(localStorage.getItem("value")=="1") localStorage.setItem("value","-1")
    else localStorage.setItem("value","1")
})
upb.addEventListener("click", e=> {
    localStorage.setItem("value","1")
})
downb.addEventListener("click", e=> {
    localStorage.setItem("value","-1")
})
multipleb.addEventListener("click", e=> {
    localStorage.setItem("multiple","2")
})