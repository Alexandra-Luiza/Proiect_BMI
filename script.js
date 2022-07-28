document.querySelector('.verify').addEventListener('click', function() {

  const inaltime = document.querySelector('.inputInaltime').value;
  const greutate = document.querySelector('.inputGreutate').value;

  let bmi = greutate / inaltime;

  document.querySelector('.clasaBMI').textContent = (`BMI-ul tau este ${bmi}.`);
});

document.querySelector('.verifyAge').addEventListener('click', function() {

  const anulNasterii = document.querySelector('.inputAn').value;

  let varsta = new Date().getFullYear() - anulNasterii;

  document.querySelector('.clasaVarsta').textContent = (`Varsta este ${varsta}.`);
});