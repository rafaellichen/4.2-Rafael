// Q1 forEach-log
function q1(arr) {
    arr.forEach(element => {
        console.log(element)
    });
}
q1(["Kevin, Rafael, Mike, Eric"])

// Q2 simple-filter
function greaterThan10(arr) {
    return arr.filter(element => {
        return element>10
    })
}
console.log(greaterThan10([1,2,3,11,12,13]))
console.log(greaterThan10([11,2,3,1,22,4,33]))

// Q3 simple-filter-2
function filterEvens(arr) {
    return arr.filter(element => {
        return !(element%2)
    })
}
console.log(filterEvens([1,2,3,11,12,13]))
console.log(filterEvens([22,2,31,110,6,13]))

// Q4 forEach-sum
function forEachSum(arr) {
    let ans=0
    arr.forEach(element=> {
        ans+=element
    })
    return ans
}
console.log(forEachSum([1,2,3]))

// Q5 implement-forEach
function forEach(arr,func) {
    arr.forEach(element => {
        func(element)
    })
}
function func(val) {
    console.log(val)
}
forEach([1,2,3,4,5],func)

// Q6 map-triple-array
function q6(arr) {
    return arr.map(element => {
        return element*=3
    })
}
console.log(q6([1,2,3]))

// Q7 map-strings-to-nums
function stringsToNums(arr) {
    return arr.map(element => {
        return Number(element)
    })
}
["1","2","3"].forEach(element => {
    console.log(typeof(element))
})
let q7ans = stringsToNums(["1","2","3"])
q7ans.forEach(element => {
    console.log(typeof(element))
})

// Q8 first-letter-uppercase-map
function q7(str) {
    let arr = str.split(" ")
    return arr.map(element => {
        return element.charAt(0).toUpperCase()+element.slice(1)
    }).join(" ")
}
console.log(q7("kevin, rafael, cody, mike, eric play league together"))

// Q9 implement-map
function map(arr, func) {
    return arr.map(element => {
        return func(element)
    })
}
function double(num) {
    return num*2
}
console.log(map([1,2,3],double))

//Q10 reduce-sum
function reduce(arr) {
    return arr.reduce(function(element, val) {
        return element+val
    },0)
}
console.log(reduce([1,2,3]))

// Q11 reduce-min
function reduceMin(arr) {
    let min=arr[0]
    arr.reduce(function(element,val) {
        min=element<min?element:val<min?val:min
    },min)
    return min
}
console.log(reduceMin([2,3,4,5,1]))
console.log(reduceMin([6,7,7,4]))
console.log(reduceMin([10,0,100,1,-100,20,33]))

// Q12 count-odds-add-evens
function countOddsAndEvens(arr) {
    let ans={
        odds: 0,
        evens: 0
    }
    arr.forEach(element => {
        element%2?ans.odds++:ans.evens++
    })
    return ans
}
console.log(countOddsAndEvens([11,2,36,4,15]))
console.log(countOddsAndEvens([1,2,3,4,5,5,99,101]))