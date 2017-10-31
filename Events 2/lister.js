submit.addEventListener("click", e=> {
    if(document.getElementById("description").value) {
        var li = document.createElement("li");
        li.innerText = document.getElementById("description").value;
        var ul = document.getElementById("list");
        ul.appendChild(li);
        document.getElementById("description").value=""
        elements=document.querySelectorAll("li")
        for(var i=0; i<elements.length; i++)
            elements[i].addEventListener("click",cross_out)
    }
})

remove.addEventListener("click", e=> {
    var elements = document.getElementsByClassName("crossout");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
})

function cross_out() {
    if(this.classList.contains("crossout"))
        this.classList.remove("crossout")
    else
        this.classList.add("crossout")
}