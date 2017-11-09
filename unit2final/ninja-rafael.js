const submit = document.getElementById("rsubmit")
const list = document.getElementById("rlist")
const input = document.getElementById("rinput")


submit.addEventListener("click", e=> {
    if(input.value) {
        var li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
        input.value = ""
        elements = document.querySelectorAll("li")
        for(var i=0; i<elements.length; i++)
            elements[i].addEventListener("click",up)
    }
})

function up() {
    if(!this.classList.contains("up"))
        this.classList.add("up")
}