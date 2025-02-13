function createCounter() {
  let counter = 0

  return function () {
    counter++
    return counter
  }
}

const counter = createCounter()
console.log(counter())
console.log(counter())

function createCounter2(){
  let count = 0

  return {
    increment: function(){ 
      count++
    return count
    },
    getCount: function () {
      return count
    }
  }
}

const counter2 = createCounter2()
console.log(counter2.increment())
console.log(counter2.getCount())