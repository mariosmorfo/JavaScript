console.log(Number.MAX_VALUE, Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY) //12/0
console.log(Number.NEGATIVE_INFINITY)

if (Number.isInteger(12)) {
  console.log("Is Integer")
} else {
  console.log("Not Integer")
}

if (Number.isNaN(NaN)) {
  console.log("True")
} else {
  console.log("False")
}

if(isNaN(NaN)) {
  console.log("Is Nan")
} else {
  console.log("Not is NaN")
}

console.log(Number.parseInt("44"))

console.log(parseInt("42"))

console.log(Number.parseFloat("44.9"))
console.log(parseFloat("40.5"))

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareToFloatingPoints(a, b){
  return Maths.abs(a -b ) < Number.EPSILON
}
console.log(compareToFloatingPoints(num1 ,num2))