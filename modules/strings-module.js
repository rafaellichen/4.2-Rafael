const firstletter = (str) => str.charAt(0)
const reversestr = (str) => str.split("").reverse().join("")
const scramble = (str) => {
    var temp = str.split("")
    for(var i=0; i<temp.length; i++) {
        var rand = Math.floor(Math.random()*temp.length)
        var a = temp[i]
        temp[i] = temp[rand]
        temp[rand] = a
    }
    return temp.join("")
}

module.exports = {
    firstletter, reversestr, scramble
}