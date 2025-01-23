const shoppingCart = {
  items: [
    {productName: "Apples", price: 8.59, quantity: 40},
    {productName: "Oranges", price: 12, quantity: 100}
  ],

  addItemToCart(item){
    this.items.push(item)
  },
}

shoppingCart.addItemToCart({productName: "Honey", price: 112, quantity: 100})
console.log(shoppingCart.items)