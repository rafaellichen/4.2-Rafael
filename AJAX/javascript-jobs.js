function jobsCb(response) {
    for(var i=0; i<response.length; i++) {
        var newli = document.createElement("li")
        var newa = document.createElement("a")
        newa.setAttribute("href",response[i].url)
        newa.setAttribute("target","#blank")
        newa.innerHTML = response[i].title
        newli.appendChild(newa)
        document.getElementById("list").appendChild(newli)
    }
}
var s = document.createElement('script');
s.src = 'https://jobs.github.com/positions.json?description=javascript&location=new+york&callback=jobsCb';
document.body.appendChild(s)