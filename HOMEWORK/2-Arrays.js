const arr = [1, 2, 3, 4, 5, 6, 7]

const chunkSize = 3
const arr2 = []

for(let i = 0; i < arr.length; i+= chunkSize){
  arr2.push(arr.slice(i, i + chunkSize))
}

console.log(arr2)