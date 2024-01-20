function log(variables) {
    console.log(variables);
}

let dia = prompt("¿Qué día de la semana es?");

let diaNormalizado = dia
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .normalize('NFC')
    .toLowerCase();

if (diaNormalizado === 'sabado' || diaNormalizado === 'domingo') {
    alert('Buen fin de semana');
} else {
    alert('¡Buena semana!');
}

let numero = Number(prompt('Ingresa un número'));


if (Math.sign(numero) == 1) {
    alert('Número positivo');
}
if (Math.sign(numero) == 0) {
    alert('Número neutral');
}
if (Math.sign(numero) == -1) 
    alert('Número negativo');


let puntaje = (prompt('Cúal fue tu puntaje?'));

if (puntaje >= 100) {
    alert('Has ganado');
} else {
    alert("Sigue intentando");
}

let saldo = 1000;

alert(`El saldo disponible en su cuenta es U$D${saldo}`);

let nombre = prompt("Cuál es tu nombre?")

alert(`Bienvenido ${nombre}. Gracias por visitarnos`)