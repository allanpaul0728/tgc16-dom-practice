let box = document.querySelector('#box');
let value = 0
let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let reset = document.querySelector('#reset');
box.style.backgroundColor = 'green';


increment.addEventListener('click', function() {
  if (box.innerHTML < 10) {
  box.innerHTML = Number(box.innerHTML) + 1;
  }
  if (box.innerHTML % 2 == 0) {
    box.style.backgroundColor = 'green';
  } else {
    box.style.backgroundColor = 'red';
  }
})

decrement.addEventListener('click', function(){
  if (box.innerHTML > 0) {
  box.innerHTML = Number(box.innerHTML) - 1;
  }
  if (box.innerHTML % 2 == 0) {
    box.style.backgroundColor = 'green';
  } else {
    box.style.backgroundColor = 'red';
  }
})

reset.addEventListener('click', function(){
  box.innerHTML = 0;
  if (box.innerHTML == 0)
  box.style.backgroundColor ='green';
})

