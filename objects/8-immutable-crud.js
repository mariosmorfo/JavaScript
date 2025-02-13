const obj = {id: 1, firstname: "Alice"}

// Add properties 

// Modify the object

obj.lastname = "marios"
console.log(obj)

// Immutable copy - fresh copy

const addToObj = (obj, field, value) => ({...obj, [field]: value})
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)


// Modify / updates the obj
obj.firstname = "Marios"
console.log(obj)

//Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Athana")
console.log(updatedObj)

// Delete property of an object

const deleteIdFromObj = (obj ,field) => {
  const {[field]: _ , ...objToReturn} = obj
  return objToReturn
}

const objFromDelete = deleteIdFromObj(obj, "id")
console.log(objFromDelete)