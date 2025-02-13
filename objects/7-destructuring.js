const [a, b] = [1, 2] 

const person = {
  firstname: "Alice",
  age: 25,
  city: "Athens"
}

// object destructure
const {firstname, age, city} = person
console.log(firstname, age, city)

const {firstname: first, age: newAge, city: myCity = "Toronto"} = person
console.log(first, newAge, myCity)