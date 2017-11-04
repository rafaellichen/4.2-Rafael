var emptyP=document.getElementById("emp")
var jokeButton=document.getElementById("joke")

jokeButton.addEventListener("click", func=> {
    var req=new XMLHttpRequest
    req.addEventListener("load", func=> {
        var reqstTxt=event.currentTarget.responseText
        var reqsArr=JSON.parse(reqstTxt)
        emptyP.innerText=reqsArr.setup+"\n"+reqsArr.punchline
    })
    req.open("GET","https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
    req.send()
})