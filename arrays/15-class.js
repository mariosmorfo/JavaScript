class productAlradyExists extends Error {
  constructor (message){
    super(message)
    this.code = "Productexists"
  }
}

class productNotFoundError extends Error{
  constructor(message){
    super(message)
    this.code = "Product not found"
  }
}

try{
  throw new productNotFoundError("Product not found")
}catch(error){
  if (error instanceof productNotFoundError) {
    console.error("Product not exists" + error.message, error.code)
  } else if(error instanceof productAlradyExists){
    console.error("Product already exists" + error.message, error.code)
  }

}