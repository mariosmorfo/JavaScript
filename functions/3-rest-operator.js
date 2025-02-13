function max(...number){
let maxVal = - Infinity

for (let n of number){
  if (n > maxVal) {
    maxVal = n
  }
  return maxVal
  }
}
  console.log(max(1, 6, 9, 3, 88 ))
