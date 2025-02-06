const users = [
  {id: 1, firstname: "Alice", email: "aliceAUEB@.gr", isActive: true},
  {id: 2, firstname: "Bob", email: "bobAUEB@.gr", isActive: false},
  {id: 3, firstname: "Costas", email: "costasAUEB@.gr", isActive: true}
]

users.forEach(u => console.log(u))

const emails = users.map(user => user.email)
console.log(emails)

const activeUsers = users.filter(user => user.isActive)
console.log(activeUsers)

const cart = [
  {title: "Laptop", price: 1000, stock: 10},
  {title: "mouse", price: 10, stock: 0},
  {title: "keyboard", price: 75, stock: 20}]

  const totalSum = cart.reduce((acc, item) => acc + item.price, 0)
  console.log(totalSum)

  const user = users.find(user => user.email === "aliceAUEB@.gr")
  const userIndex = users.findIndex(user => user.email === "aliceAUEB@.gr")
  console.log(user, userIndex)

  const isOutOfStock = cart.some(item => item.stock === 0)
  const isOutOfStockEverything = cart.every(item => item.stock === 0)
  console.log(isOutOfStock)   
  console.log(isOutOfStockEverything)

  const posts = [
    {title: "post1", tags: ["js", "web"]},
    {title: "post2", tags: ["nodejs", "backend"]},
    {title: "post3", tags: ["React", "frontend"]}
  ]

  const allTags = posts.flatMap(posts => posts.tags)
  console.log(allTags)

  const fruits = ["Apples", "Oranges"]

  for(const [index, fruits] of fruits.entries()){
    console.log(`Index: ${index}, Fruit: ${fruits}`)
  }