// In this case the printing will be line by line

// console.log("Print this first...")
// console.log("print this second")
// console.log("Print this third")

// In this case the printing will not be line by line

/*
console.log("Print this first...")

setTimeout(() => {
    console.log("print this second")
}, 2000)

console.log("Print this third")*/

// Issue with async program

let a = 10
let b = 0

setTimeout(() => {
    b = 20
}, 2000)

console.log(a+b) // o/p - 10

// To mitigate this, i.e. make it synchronous use Promise or Async - Await