var input1 = window.prompt("Enter a number between 1-4 (inclusive)")
var input2 = window.prompt("Type something")
if ([1,2,3,4].indexOf(Number(input1)) == -1) input1=1
var element = document.getElementById("i"+input1)
element.innerText = input2