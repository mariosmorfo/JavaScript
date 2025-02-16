const arr = [1, 1, 3, 5, 6, 7, 7, 8, 8, 3, 3, 4, 5]
const copiedArr = []

for (i = 0; i < arr.length; i++){
  let element = arr[i];
  if(!copiedArr.includes(element)){
    copiedArr.push(element)
  }
}

console.log(copiedArr)


const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const copyArr = []

for( let i = 0; i < arr2.length; i++){
  for(let j = 0; j < arr2[i].length; j++){
    copyArr.push(arr2[i][j])
  }
}

console.log(copyArr)



