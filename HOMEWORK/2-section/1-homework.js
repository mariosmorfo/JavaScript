//1

const num = [1, 2, 4, 6, 7, 8]

function double(arr){
 return arr.map(num => num * 2)
}

const double2 = double(num)

console.log(double2)

// 2

const num2 = [1, 2, 4, 6, 7, 8]

const evenNumbers = num2.filter(num => num % 2 === 0)
console.log(evenNumbers)

// 3

const num3 = [1, 3, 6, 8, 4, 5, 9]

const isOdd = num3.some(num => num % 2 != 0)
console.log(isOdd)

// 4

const num4 = [1, 4, 56, 7, 8]

const positive = num4.every(num => num >= 0)
console.log(positive)