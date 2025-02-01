const arr = [1, 2, 3, 2, 5, 6]

const deleteBackwards = (arr, val) => {
  if(!arr) return
  let i = arr.length -1 

  while(i--){
    if(arr[i] === val){
      arr.splice(i, 1)
    }
  }
}

deleteBackwards(arr, 2)
console.log(arr)
