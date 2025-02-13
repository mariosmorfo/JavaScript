const products = []

try{
  insert(products)
  console.log("Succesful insert!")
}catch(e){
  console.log("Product not inserted since already exists")
}

function insert(arr, product){
  if(!arr || !product) return;

  try{
    if(arr.includes(product)) throw new Error("Product already exists!")
      arr.push(product)
    return true;

  }catch(error){
    console.log(error.message, error.trace)
    throw error;
  }
}

  class ProductAlreadyExistsError extends Error{
    constructor(message){
      super(message)
      this.name = "ProductAlreadyExists"
    }
  }

insert(products, "Apple")
insert(products, "Banana")


console.log("Inserted: " + products)