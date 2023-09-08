const inputName = document.getElementById('input-name');
const inputKm = document.getElementById('input-km');
const btnGenera = document.getElementById('btn-genera');
let age= document.getElementById('age');
let customPrice = inputKm.value * 0.21; 

const ticketSection = document.querySelector('#ticket-section');

btnGenera.addEventListener('click', function(){
  
  ticketSection.classList.remove('d-none');

  if (isNaN(inputKm.value)){
    customPrice = '! ERRORE ! Si prega di inserire età e km in formato numerico.'
  }else if(age.value == 2){
    customPrice = (customPrice - (customPrice * 0.2)).toFixed(2) + '€';
  }else if(age.value == 3){
    customPrice = (customPrice - (customPrice * 0.4)).toFixed(2) + '€';
  }else{
    customPrice = customPrice.toFixed(2) + '€';
  };




  console.log(customPrice);
})

/* 
if (isNaN(numKm) || isNaN(age)){
  customPrice = '! ERRORE ! Si prega di inserire età e km in formato numerico.'
}else if(age < 18){
  customPrice = (customPrice - (customPrice * 0.2)).toFixed(2) + '€';
}else if(age > 65){
  customPrice = (customPrice - (customPrice * 0.4)).toFixed(2) + '€';
}else{
  customPrice = customPrice.toFixed(2) + '€';
}; */