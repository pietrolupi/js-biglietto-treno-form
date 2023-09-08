const inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const btnGenera = document.getElementById('btn-genera');
let age= document.getElementById('age');
const cpCode = Math.floor(Math.random() * (100000 - 1) + 1);
const carriageNum = Math.floor(Math.random() * (99 - 1) + 1);
const btnReset = document.getElementById('btn-reset');
const ticketSection = document.querySelector('#ticket-section');

btnGenera.addEventListener('click', function(){
  
  ticketSection.classList.remove('d-none');
  let customPrice = inputKm.value * 0.21; 

  if (isNaN(inputKm.value)){ 
    document.querySelector('table').classList.add('d-none');
    document.querySelector('.error-message').classList.remove('d-none');
  }else if(inputKm.value == ''){
    customPrice = 'Inserire km da percorrere!'
  }else if(age.value == 2){
    customPrice = (customPrice - (customPrice * 0.2)).toFixed(2) + '€';
    document.querySelector('.offerta').innerHTML = 'Offerta YOUNG';
  }else if(age.value == 3){
    customPrice = (customPrice - (customPrice * 0.4)).toFixed(2) + '€';
    document.querySelector('.offerta').innerHTML = 'Offerta SENIOR';
  }else{
    customPrice = customPrice.toFixed(2) + '€';
    document.querySelector('.offerta').innerHTML = 'Offerta STANDARD';
  };


  document.querySelector('.card-body>h2>span').innerHTML = inputName.value;
  document.querySelector('.costo').innerHTML = customPrice;
  document.querySelector('.codice').innerHTML = cpCode;
  document.querySelector('.carrozza').innerHTML = carriageNum;
})

btnReset.addEventListener('click', function(){
  ticketSection.classList.add('d-none');
});

