function showAlert() {alert("¡Hola, esta es una alerta desde JavaScript!");}
let nombre;
nombre = prompt("Introduce tu nombre");
var edad = prompt("cual es tu edad");

if (edad > 18) {
  alert("usted es mayor de edad");}



const d = new Date();
document.getElementById("demo").innerHTML = d;

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
  document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
         document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})