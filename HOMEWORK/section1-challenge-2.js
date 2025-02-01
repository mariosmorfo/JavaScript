const cities = ["Athens", "London", "Paris"]
cities.push("Berlin")

for(const city of cities){
  console.log(city)
}

const user = {
  name: "marios",
  age: 26,
  city: "athens",
  hello(){
    console.log(`Hello my name is ${this.name}`)
  }
}

user.hello()

function calculateArea(radius) {
  return Math.PI * Math.pow(radius,2)
}

const area = calculateArea(5)

console.log(`Το εμβαδόν του κύκλου είναι ${area}`)