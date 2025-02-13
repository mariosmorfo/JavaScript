// function greet(name){
//   if(name === undefined){
//     name = " Quest"
//   }
//   console.log(`Hello, ${name}`)
// }

// greet()

// // Default params

// function getUser(name = "Guest, age = 18"){
//   return{ name, age}
// }

// const obj = getUser()
// console.log(obj)

function getFormattedDateTime(
  locale = "en-US",
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true

  }
) {
  const now = new Date()
  return now.toLocaleString(locale, options)
}

console.log(getFormattedDateTime("el-GR"))