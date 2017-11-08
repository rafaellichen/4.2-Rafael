var list = document.getElementById("list")
var clb = document.getElementById("cl")
var clear=false

document.addEventListener("click", function() {
    if(clear) {
        clear=false;
        return
    }
    var newli = document.createElement("li")
    var textli = document.createTextNode("("+event.clientX+","+event.clientY+")")
    newli.appendChild(textli)
    list.appendChild(newli)
});

clb.addEventListener("click", function() {
    list.innerHTML = "<ol></ol>"
    clear=true
})