let bmi1;
let bmi2;

document.querySelector('.verify1').addEventListener('click', function() {

  const inaltime1 = document.querySelector('.inputInaltime1').value;
  const greutate1 = document.querySelector('.inputGreutate1').value;

  bmi1 = greutate1 / (inaltime1**2);

  document.querySelector('.clasaBMI1').textContent = (`BMI-ul tău este ${bmi1}.`);
});


document.querySelector('.verifyAge1').addEventListener('click', function() {

  const anulNasterii1 = document.querySelector('.inputAn1').value;

  let varsta1 = new Date().getFullYear() - anulNasterii1;

  document.querySelector('.clasaVarsta1').textContent = (`Vârsta ta este ${varsta1}.`);
});

document.querySelector('.verify2').addEventListener('click', function() {

  const inaltime2 = document.querySelector('.inputInaltime2').value;
  const greutate2 = document.querySelector('.inputGreutate2').value;

  bmi2 = greutate2 / (inaltime2**2);

  document.querySelector('.clasaBMI2').textContent = (`BMI-ul tău este ${bmi2}.`);
});



document.querySelector('.compara').addEventListener('click', function() {
  if (bmi1 > bmi2) {
    document.querySelector('.clasaCompara').textContent = (`BMI persoană I > BMI persoană II.`)
  }
  else if (bmi2 > bmi1) {
    document.querySelector('.clasaCompara').textContent = (`BMI persoană II > BMI persoană I.`) 
  }
  else {
    document.querySelector('.clasaCompara').textContent = (`Introduceți toate datele.`)
  }
});


document.querySelector('.verifyAge2').addEventListener('click', function() {

  const anulNasterii2 = document.querySelector('.inputAn2').value;

  let varsta2 = new Date().getFullYear() - anulNasterii2;

  document.querySelector('.clasaVarsta2').textContent = (`Vârsta este ${varsta2}.`);
});
