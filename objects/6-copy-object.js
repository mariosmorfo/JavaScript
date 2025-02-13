const initial = {name: "Alice", age: 25, adress: {street: "Patission", number: 76}}

// 1. Shallow Copy with spread operator ...
const copyInitial = {...initial}
console.log(copyInitial)

// 2. Object type

const copyInitial2 = Object.assign({}, initial)

// 3. JSON function -- deep copy

const copyInitial3 = JSON.parse(JSON.stringify(initial))

const initial3 = {name: "Alice", age: undefined, adress: {street: "Patission", number: 76}}
console.log(JSON.stringify(initial3))

// 4. Deep copy

const copyInitial4 = structuredClone(initial)
