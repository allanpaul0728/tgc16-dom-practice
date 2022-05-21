

document.querySelector('#increment').addEventListener('click', function(){
  var box = document.querySelector('#box');
  box.value = parseInt(box.value) + 1;
}, false);