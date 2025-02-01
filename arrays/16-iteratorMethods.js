const students = ["Alice", "Andreas", "Bob", "Costas"]

students.forEach (function(stud, _, arr) {
  console.log(stud, arr)
})

let filtered = students.filter(student => student == "Andreas")
console.log(filtered)

let mapped = students.map(student => "Student" + student)
console.log(mapped)


const number = [1, 6, 7, 8]
let sum = number.reduce((total, val) => total + val, 0)
console.log(sum)