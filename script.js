let bmi1;

document.querySelector('.verify1').addEventListener('click', function() {

  const inaltime1 = document.querySelector('.inputInaltime1').value;
  const greutate1 = document.querySelector('.inputGreutate1').value;

  let bmi1 = greutate1 / inaltime1;

  document.querySelector('.clasaBMI1').textContent = (`BMI-ul tau este ${bmi1}.`);
});

document.querySelector('.verifyAge1').addEventListener('click', function() {

  const anulNasterii1 = document.querySelector('.inputAn1').value;

  let varsta1 = new Date().getFullYear() - anulNasterii1;

  document.querySelector('.clasaVarsta1').textContent = (`Varsta este ${varsta1}.`);
});

let bmi2;

document.querySelector('.verify2').addEventListener('click', function() {

  const inaltime2 = document.querySelector('.inputInaltime2').value;
  const greutate2 = document.querySelector('.inputGreutate2').value;

  let bmi2 = greutate2 / inaltime2;

  document.querySelector('.clasaBMI2').textContent = (`BMI-ul tau este ${bmi2}.`);
});

document.querySelector('.verifyAge2').addEventListener('click', function() {

  const anulNasterii2 = document.querySelector('.inputAn2').value;

  let varsta2 = new Date().getFullYear() - anulNasterii2;

  document.querySelector('.clasaVarsta2').textContent = (`Varsta este ${varsta2}.`);
});


document.querySelector('.compara').addEventListener('click', function() {
  if (bmi1 > bmi2) {
    document.querySelector('.clasaCompara').textContent = (`BMI persoană I > BMI persoană II.`)
  }
  else {
    document.querySelector('.clasaCompara').textContent = (`BMI persoană II > BMI persoană I.`)
  }
});