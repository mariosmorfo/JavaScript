// 1
const person = [{name: "Marios", age: 25},
                {name: "Nick", age: 30},
                {name: "Maria", age: 29}
]

let filter = person.filter(user => user.age < 30)

console.log(filter)

// 2
const person2 = [{name: "Marios", age: 25},
  {name: "Nick", age: 30},
  {name: "Maria", age: 29}
]

const names = person2.map((user) => user.name)
console.log(names)