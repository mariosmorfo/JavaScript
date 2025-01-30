const arr = [] // Empty
const arr1 = [1, 2, 3, 4, 5] // Populate
const arr2 = [1, "Alice", 3.4, true] // Different objects, error prown
const arr3 = [1, , 3] // sparse array, [2] undefined
const arr4 = [,,,] // length is 3
const arr5 = new Array(2)  // not often use
const grid =[[1,2], [2,3], [2,4]]
const objArr = [{id:1},{id:2},{id:3}]

console.log(arr1[0]) // 1

for(let i  = 0; i < arr1.length; i++){
  console.log(arr1[1])
}

for (const el of arr1){
  console.log(el)
}

for(let i = 0; i < grid.length; i++){
  for(j = 0; j < grid[i].length; j++){
    console.log(grid[i][j])
  }
}

for (const row of grid){
  for( const item of row){
    console.log(item)
  }
}