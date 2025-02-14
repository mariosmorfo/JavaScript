const container = document.getElementById("container")
const btn = document.getElementById("btn")

 container.innerHTML = "<p>Hello JS</p>"

btn.addEventListener("click", function(){
  container.classList.toggle("container")
  container.classList.toggle("text-center")
 
})