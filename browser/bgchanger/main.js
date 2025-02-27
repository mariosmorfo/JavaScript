let color = undefined

window.addEventListener('DOMContentLoaded', function(){
  this.document.querySelector('#btn').addEventListener('click', function(){
    onClikMeClicked()
  })
})

 function onClikMeClicked(){
  updateBg()
}

/**
 * Model
 */

function updateBg(){
    getBgColor()  // update state
  renderBg()                // render based on update state
}


function getBgColor(){
  const colors = ['black', 'red', 'green',  'white', 'blue']
  return colors[ Math.floor(Math.random() * colors.length)]
}

/**
 * View
 */

function renderBg(){
  document.querySelector('#hex').innerHTML = color
  document.body.style.backgroundColor = color
} 