// 1. Basic funtion 
function greet(name){
  return `Hello, ${name}`
}

function add(a,b){
  return a + b
}

console.log(greet("Alice"))

// 2. Function expression

const mul = function (a, b){
  return a * b
}

let result = mul(3,4)

// 3. Arrow 
const div = (a,b) => a / b