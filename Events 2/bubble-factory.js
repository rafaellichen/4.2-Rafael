bubble.addEventListener("click", e=> {
    var img = document.createElement("img");
    img.src = "bubble.png";
    var src = document.getElementById("main");
    src.appendChild(img);
})