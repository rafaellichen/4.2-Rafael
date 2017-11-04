const conUSD = document.getElementById("convertUSD")
const conBit = document.getElementById("convertBit")
const fetch = document.getElementById("fetchp")
const input = document.getElementById("input")
const list = document.getElementById("op")

fetch.addEventListener("click", func => {
    var req=new XMLHttpRequest
    req.addEventListener("load", func=> {
        var reqstTxt=req.responseText
        var reqsArr=JSON.parse(reqstTxt)
        var newli = document.createElement("li")
        var textli = document.createTextNode(reqsArr.time.updated+": Current Price: "+reqsArr.bpi.USD.rate_float)
        newli.appendChild(textli)
        list.insertBefore(newli,list.childNodes[0])
    })
    req.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json")
    req.send()
})

conUSD.addEventListener("click", func => {
    if(input.value) {
        if(!isNaN(Number(input.value)) && Number(input.value)>0) {
            var req=new XMLHttpRequest
            req.addEventListener("load", func=> {
                var reqstTxt=req.responseText
                var reqsArr=JSON.parse(reqstTxt)
                var newli = document.createElement("li")
                var textli = document.createTextNode(input.value+" Bitcoin = "+Number(input.value)*Number(reqsArr.bpi.USD.rate_float)+" USD")
                newli.appendChild(textli)
                list.insertBefore(newli,list.childNodes[0])
                input.value = ""
            })
            req.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json")
            req.send()
        } else {
            input.value = ""
        }
    }
})

conBit.addEventListener("click", func => {
    if(input.value) {
        if(!isNaN(Number(input.value)) && Number(input.value)>0) {
            var req=new XMLHttpRequest
            req.addEventListener("load", func=> {
                var reqstTxt=req.responseText
                var reqsArr=JSON.parse(reqstTxt)
                var newli = document.createElement("li")
                var textli = document.createTextNode(input.value+" USD = "+Number(input.value)/Number(reqsArr.bpi.USD.rate_float)+" Bitcoin")
                newli.appendChild(textli)
                list.insertBefore(newli,list.childNodes[0])
                input.value = ""
            })
            req.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json")
            req.send()
        } else {
            input.value = ""
        }
    }
})