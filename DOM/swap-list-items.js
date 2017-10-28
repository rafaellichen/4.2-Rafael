var input1 = window.prompt("Enter a number between 1-4 (inclusive)")
var input2 = window.prompt("Enter a different number between 1-4 (inclusive)")
var element1 = document.getElementById("i"+input1)
var element2 = document.getElementById("i"+input2)
temp = element1.innerText
element1.innerText = element2.innerText
element2.innerText = temp