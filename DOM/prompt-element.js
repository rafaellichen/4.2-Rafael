var input1= window.prompt("Write an entire HTML element (opening tag, text, and closing tag)")
var element = document.getElementById("container")
element.innerHTML = input1
// generate h1 header of input1
element.innerText = input1
// generate plain text of input 1

// nested HTML elements don't make any difference?
// <div><h1>hi</h1><br><h2>bye</h2></div>