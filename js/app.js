"use strict";

// Verify script is working

let list = ["apple", "orange", "pear", "lemon"];
let ul = document.querySelector('ul')

const showList = (arr) => {
  
}
list.map((item, index )=> {
  let li =document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = item

    // THIS IS HOW U WOULD CREATE A BUTTON WITH AN ID
    
  // let button = document.createElement('button')
  // button.innerHTML = 'X'

  // button.setAttribute('id', index )
  // li.append(button)

})

const createList = (e) => {
  //create li
 let inputBox = document.getElementById('input')
 list.unshift(inputBox.value)
 inputBox.innerHTML = 'what'

  addOne(inputBox)
}

const addOne = (inputBox) => {
  let li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML= inputBox.value

}
