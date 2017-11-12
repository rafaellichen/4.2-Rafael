const mathModule = require("./modules/math-module.js")
const stringModule = require("./modules/strings-module.js")
const fileModule = require("./modules/filterFiles.js")

var sumof1and2 = mathModule.sum(1,2)
console.log(sumof1and2)

var multiply2by3 = mathModule.multiply(2,3)
console.log(multiply2by3)

var divide4by2 = mathModule.divide(4,2)
console.log(divide4by2)

var squareof2 = mathModule.square(2)
console.log(squareof2)

var scrambled = stringModule.scramble("Cody-Rafael-Kevin-Mike")
console.log(scrambled)

var firstchar = stringModule.firstletter("Rafael")
console.log(firstchar)

var reversed = stringModule.reversestr("Rafael")
console.log(reversed)

function cb(err, files) {
    if(!err) console.error(err)
    files.forEach((file) => {
        console.log(file)
    })
}
fileModule.search("Events 2", ".css", cb)