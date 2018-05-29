var userInput = require('readline')
var rl = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
})
function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}
var num1=Math.floor(Math.random()*10)
var num2=Math.floor(Math.random()*10)
console.log("What's the answer for",num1,"+",num2,"?")
rl.on('line', (input) => {
    if(input==='quit') rl.close()
    if(!isNaN(Number(input))) {
        if(Number(input)==num1+num2) {
            console.log("You win")
            num1=Math.floor(Math.random()*10)
            num2=Math.floor(Math.random()*10)
            console.log("What's the answer for",num1,"+",num2,"?")
        } else {
            console.log("Try again")
        }
    }
});