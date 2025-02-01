const products = []

function insert(arr, product) {
  if (!arr || !product) return

  try{
    if (arr.includes(product)) {
      throw new Error("Products already Exists")
    }
    products.push(product)
  } catch(error){
    console.error(error.message, error.trace)
    throw error
  }
}

insert(products,"Apple")
  console.log(products)

  insert(products,"Orange")
  console.log(products)

  insert(products,"Orange")
  console.log(products)
