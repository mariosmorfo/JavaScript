const person = {
  firstname: "Alice",
  age: 25,
  city: "Athens",
  isStudent: false
}

const keys = Object.keys(person)
keys.forEach(key => console.log(`key: ${key}, value: ${person[key]}`))

 console.log(Object.values(person))

 const grades = {maths: 8, sience: 10, history: 5}
 const total = Object.values(grades).reduce((sum, val) => sum + val,0)
 let avg = total / grades.length
 console.log("total: " + total)