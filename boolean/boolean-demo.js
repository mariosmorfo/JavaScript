console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean("Hello"))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean({}))
console.log(Boolean([]))

while (1) {
  console.log("Hello")
  break;
}

do {
  console.log("One iteration")
} while (0)

  for (let i = 1; i; i++){
    console.log("In for")
    break
  }

  let num = 10
  while (num) {
    console.log(num)
    num--
  }

  // && || !

  console.log("Coding" && 7)

const username = "" || "Default"
let isBtnExist = true
let button = "Button"
const buttonToShow = isBtnExist && button
