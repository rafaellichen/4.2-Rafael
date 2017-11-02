var h1text=document.getElementById("text")
var bodyelement=document.getElementById("page")
localStorage.setItem("clicked","0")
bodyelement.addEventListener("click", e=> {
    localStorage.setItem("clicked","1")
})
loop = setTimeout(function() {
    if(localStorage.getItem("clicked")=="0") {
        h1text.innerHTML="<h1>You are too slow at clicking. You lose!</h1>"
    } 
    else {
        h1text.innerHTML="<h1>Great click. You win!</h1>"
        // localStorage.setItem("clicked","0")
    }
    stopFunc()
},3000)

function stopFunc() {
    clearTimeout(loop)
}