// accessing the value and all the buttons
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');


let count = 0;

function updateValue(){
  value.textContent = count;
}

btns.forEach( function (btn) {
  btn.addEventListener('click', () => {
    if(btn.id === 'decrease'){
      count--;
      updateValue();
    } else if(btn.id === 'increase'){
      count++;
      updateValue();
    } else{
      count = 0;
      updateValue();
    }
    value.style.color = count > 0 ? "green" : count < 0 ? 'red' : '';
  })
})