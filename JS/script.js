const inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const btnGenera = document.getElementById('btn-genera');
let age= document.getElementById('age');
const cpCode = Math.floor(Math.random() * (100000 - 1) + 1);
const carriageNum = Math.floor(Math.random() * (99 - 1) + 1);
const btnReset = document.getElementById('btn-reset');
const ticketSection = document.querySelector('#ticket-section');

btnGenera.addEventListener('click', function(){
  
  show(ticketSection);
  let customPrice = inputKm.value * 0.21; 

  if (isNaN(inputKm.value)){ 

    hide(document.querySelector('table'));
    show(document.querySelector('.error-message'));

  }else if(inputKm.value == ''){

    customPrice = 'Inserire km da percorrere!'

  }else if(age.value == 2){
    
    customPrice = discounter(customPrice, 20);
    
    printer(document.querySelector('.offerta'), 'Offerta YOUNG');

  }else if(age.value == 3){
    
    customPrice = discounter(customPrice, 40);
    printer(document.querySelector('.offerta'), 'Offerta SENIOR')
    
  }else{
    customPrice = customPrice.toFixed(2) + '€';
    printer(document.querySelector('.offerta'), 'Offerta STANDARD')
  };

  printer(document.querySelector('.card-body>h2>span'), inputName.value)
  printer(document.querySelector('.costo'), customPrice)
  printer(document.querySelector('.codice'), cpCode)
  printer(document.querySelector('.carrozza'), carriageNum)
})

btnReset.addEventListener('click', function(){
  ticketSection.classList.add('d-none');
});

//FUNCTIONS

function printer(where, string){
  return where.innerHTML = string;
}

function show(what){
  return what.classList.remove('d-none');
}

function hide(what){
  return what.classList.add('d-none');
}

function discounter(toDiscount, discountPercentage){
  return (toDiscount - (toDiscount * (discountPercentage / 100))).toFixed(2) + '€';
}
