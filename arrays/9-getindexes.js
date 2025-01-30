const arr = [1, 2, 4, 6, 7, 8, 8, 9, 2]

const getIndexes = (arr, val) => {
  const indexes = []
  
  arr.forEach((v, index) => {
    if(v === val){
      indexes.push(index)
    }
  })

  return indexes
}

console.log(getIndexes(arr, 2))