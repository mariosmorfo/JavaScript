const user = {
  firstname: "Marios",
  lastname: "Morfo",
  getFirstname: function(){
    return this.firstname
  },

  getFullName() {
    return `${this.firstname}, ${this.lastname}`
  }
}

console.log(user.getFirstname())
console.log(user.getFullName ())