function createToDo(input) {
    toDoList.push({
        description: input,
        completed: false
    })
}
function toggle(input) {
    toDoList[input].completed=!toDoList[input].completed
}
function deleteToDo(input) {
    toDoList.splice(input,1)
}
function showAll() {
    if(!toDoList.length)
        console.log("EMPTY")
    toDoList.forEach(function(x,index) {
        console.log(x)
    })
}
function showActive() {
    toDoList.forEach(function(x,index) {
        if(!toDoList[index].completed) {
            console.log(index,toDoList[index])
            num++
        }
    })
    if(!toDoList.length || !num)
        console.log("EMPTY")
}
function showCompleted() {
    toDoList.forEach(function(x,index) {
        if(toDoList[index].completed) {
            console.log(index,toDoList[index])
            num++
        }
    })
    if(!toDoList.length || !num)
        console.log("EMPTY")
}
function printAll() {
    toDoList.forEach(function(x,index) {
        console.log(index,x)
    })
}

function showHow() {
    clear()
    console.log("how | ADD      | toggle   | delete   | show all | show active | show completed")
    console.log("      ADD Cody | toggle 0 | delete 0 | show all | show active | show completed")
    console.log("------------------------------------------------------------------------------")
}
var userInput=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}
var toDoList=[]
var num=0
var initial=true
console.log("To Do App in Terminal")
console.log("Press ENTER to use")
userInput.on("line",function(input) {
    clear()
    console.log("how | ADD | toggle | delete | show all | show active | show completed")
    console.log("---------------------------------------------------------------------")
    if(input && !initial) {
        check=true
        var arr=input.split(" ")
        if(arr[0]==='ADD' && arr[1]) 
            createToDo(arr.slice(1,arr.length).join(" "))
        else if(arr[1] && arr[1]<toDoList.length) {
            if(arr[0]=="toggle")
                toggle(arr[1])
            else if(arr[0]=="delete")
                deleteToDo(arr[1])
        } 
        else if(arr.join(" ")=="show all") 
            showAll()
        else if(arr.join(" ")=="show active") 
            showActive()
        else if(arr.join(" ")=="show completed") 
            showCompleted()
        else if(arr[0]=="how") {
            showHow()
        }
        else check=false
        if(!check)
            console.log("INVALID COMMAND")
        if(arr[0]!="show" && check) printAll()
        check=true
        num=0
    } else {
        if(!initial) 
            console.log("EMPTY INPUT")
        initial=false
    }
})