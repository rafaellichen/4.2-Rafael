const name = document.getElementById("uname")
const rock = document.getElementById("urock")
const paper = document.getElementById("upaper")
const scissors = document.getElementById("uscissors")
const user = document.getElementById("uchoose")
const computer = document.getElementById("cchoose")
const result = document.getElementById("result")
const win = document.getElementById("tWin")
const lose = document.getElementById("tLose")
const tie = document.getElementById("tTie")

function display(rafael) {
    fetch(rafael, {
        method: 'GET',
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    }).then(function(cody) {
        computer.innerText = "computer chooses: " + cody.ai
        result.innerText = "result " + cody.result
        user.innerText = "user chooses: " + cody.user
        if(name.value) {
            win.innerText = "Total Wins: " + cody.stats.win
            lose.innerText = "Total Losses: " + cody.stats.lose
            tie.innerText = "Total Ties: " + cody.stats.tie
        } else {
            win.innerText = ""
            lose.innerText = ""
            tie.innerText = ""
        }
    })
}

rock.addEventListener("click", function() {
    var rafael = "http://codyhess.com:9001/rock/"
    if(name.value) rafael+=name.value
    display(rafael)
})

paper.addEventListener("click", function() {
    var rafael = "http://codyhess.com:9001/paper/"
    if(name.value) rafael+=name.value
    display(rafael)
})

scissors.addEventListener("click", function() {
    var rafael = "http://codyhess.com:9001/scissors/"
    if(name.value) rafael+=name.value
    display(rafael)
})