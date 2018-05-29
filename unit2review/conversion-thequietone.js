// RAFAEL LI CHEN
const input = document.getElementById("input")

const bin = document.getElementById("bin")
const dec = document.getElementById("dec")
const hex = document.getElementById("hex")

const on = document.getElementById("on")
const ob = document.getElementById("ob")
const nbin = document.getElementById("nbin")
const ndec = document.getElementById("ndec")
const nhex = document.getElementById("nhex")

function display(myBlob) {
    input.value = ""
    on.innerText = "Original Number: "+myBlob.original.value
    ob.innerText = "Original Base: "+myBlob.original.base
    nbin.innerText = "As Binary: "+myBlob.conversions.binary
    ndec.innerText = "As Decimal: "+myBlob.conversions.decimal
    nhex.innerText = "As Hexadecimal: "+myBlob.conversions.hex
}

bin.addEventListener('click', function() {
    fetch('http://codyhess.com:9000/'+input.value+"/bin", {
        method: 'GET',
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    }).then(function(myBlob) {
        display(myBlob)
    })
});

dec.addEventListener('click', function() {
    fetch('http://codyhess.com:9000/'+input.value+"/dec", {
        method: 'GET',
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    }).then(function(myBlob) {
        display(myBlob)
    })
});

hex.addEventListener('click', function() {
    fetch('http://codyhess.com:9000/'+input.value+"/hex", {
        method: 'GET',
        mode: 'cors'
    }).then(function(response) {
        return response.json();
    }).then(function(myBlob) {
        display(myBlob)
    })
});