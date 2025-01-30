const cities = ["Athens", "London", "New York"]
console.log("Position of Athens is:" + cities.indexOf("Athens"))

if(cities.includes("Athens")) {
  console.log("Athens exists")
}else{
  console.log("Not exists")
}