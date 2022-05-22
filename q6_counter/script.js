let box = document.querySelector('#box');
let value = 0
let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let reset = document.querySelector('#reset');
box.style.backgroundColor = 'green';

increment.addEventListener('click', function() {
  if(value<10){
    value += 1
    box.innerHTML = value;
    }
    
    
    if(value % 2 == 0) {
        box.style.backgroundColor="green";
    }
    else box.style.backgroundColor="red"
    
})
decrement.addEventListener('click', function() {
  if(value>0 ){
    value -= 1
    box.innerHTML = value;
     }
       if(value % 2 == 0) {
        box.style.backgroundColor="green";
        }
       else box.style.backgroundColor="red";
})
reset.addEventListener('click', function() {
  value = 0
  box.innerHTML = value;
})
