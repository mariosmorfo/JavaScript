const objArray = [
  {id: 1, first: "Morfo", age: "23"},
  {id: 2, first: "Bob", age: "40"},
  {id: 3, first: "Nick", age: "20"},
  {id: 4, first: "Rallou", age: "18"}
]


// Sort by age
// objArray.sort(function(a, b){
//   return a.age - b.age
// })

// console.log(objArray)

// Sort by first and age

objArray.sort(function(a, b){
  if(a.first === b.first){
    return a.age - b.age
  }
  return a.first.localeCompare(b.first)
})
console.log(objArray)