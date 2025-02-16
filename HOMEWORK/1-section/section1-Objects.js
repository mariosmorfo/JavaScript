//1
const person =  {name: "Marios", age: 26, job: "Software engineer"}
const selectedKeys = ["name", "job"]

const filteredPerson = filteredObj(person, selectedKeys)
console.log(filteredPerson)

function filteredObj(obj, keys){

  let newObj = {}

  for( let key of keys){
    if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key]
    }
  }
  return newObj
}

//2
const city = {city: "ATHENS", street: "DIOS", number: "31"}

function transformObject(obj, callback){
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => callback (key, value))
  )
}

function toUpperCase(key ,value){
  return [key.toUpperCase(), value]
}
 

const toUpperCaseKey = transformObject(city, toUpperCase)
console.log(toUpperCaseKey)

//3

const num = {age: 25, level: 10, balance: 300}

function transformObject(obj, callback){
  return Object.fromEntries( 
     Object.entries(obj).map(([key ,value]) => [key, callback(value)])
)} 

function doubleValue(value){
  return value * 2
}

const double = transformObject(num, doubleValue)
console.log(double)