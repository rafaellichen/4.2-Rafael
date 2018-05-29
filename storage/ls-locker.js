document.getElementById("input").value = localStorage.getItem("saved")
input.addEventListener("keyup", e=> {
    localStorage.setItem("saved",document.getElementById("input").value)
})
clear.addEventListener("click", e=> {
    localStorage.clear()
    document.getElementById("input").value = ""
})