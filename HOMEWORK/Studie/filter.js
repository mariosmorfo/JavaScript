// const students = ["Alice", "Marios", "Nick"]

// let filtered = students.filter(students => students === "Nick")
// console.log(filtered)
// console.log(students)

// const product = ["Apple", "Oranges", "Pinaple"]

// let mapped = product.map(product => "Product: " + product)
// console.log(mapped)

const nums = [1, 2, 3, 4] 
let sum = nums.reduce((total, val) => total + val)
let avg = nums.reduce((total, val) => (total + val)) / nums.length
console.log( `Sum: ${sum}, Avg: ${avg.toFixed(2)}`)