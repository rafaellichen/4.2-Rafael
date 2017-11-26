const chalk = require("chalk")

function helloBlue() {
    console.log(chalk.blue("Hello world"))
}
helloBlue()

function helloRed() {
    console.log(chalk.red("Hello world"))
}
helloRed()

function stringToColor(str, color) {
    console.log(chalk.keyword(color)(str));
}
stringToColor("Rafael", "purple")

function evensBlueOddsYellow(str) {
    var temp = str.split(" ")
    for(var i=0; i<temp.length; i++) {
        if((i+1)%2) console.log(chalk.yellow(temp[i]))
        else console.log(chalk.blue(temp[i]))
    }
}
evensBlueOddsYellow("this is a test")

function angryText(str) {
    var newstr = str.split("").map( e=> {
        return e.toUpperCase()
    }).join("")
    console.log(chalk.bold.underline.red(newstr))
}
angryText("Rafael")

function backgroundCyan(str) {
    console.log(chalk.white.bgCyan(str))
}
backgroundCyan("Rafael")

function boldFirstUnderlineLast(str) {
    var temp = str.split(" ")
    var ans = ""
    for(var i=0; i<temp.length; i++) {
        if(!i) ans+=chalk.bold(temp[i])+" "
        else if(i+1==temp.length) ans+=chalk.underline(temp[i])
        else ans+=temp[i]+" "
    }
    console.log(ans)
}
boldFirstUnderlineLast("Rafael Kevin Mike Cody")

var arg = process.argv[2]
function commandLineChalk(arg) {
    console.log(chalk.white(arg))
}
commandLineChalk(arg)