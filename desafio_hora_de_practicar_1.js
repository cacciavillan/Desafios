function log(variables) {
    console.log(variables);
}

alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombre = "Luna";
log(nombre);
let edad = 25;
log(edad);
let numeroDeVentas = 50;
log(numeroDeVentas);
let saldoDisponible = 1000;
log(saldoDisponible);
alert("¡Error! Completa todos los campos");
let mensajeDeError = "¡Error! Completa todos los campos";
log(mensajeDeError);
alert(mensajeDeError);
nombre = prompt("¿Cuál es tu nombre de usuario?");
log(nombre);
edad = prompt("¿Cuál es tu edad");
log(edad);
if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!")
}