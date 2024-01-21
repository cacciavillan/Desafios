let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function clickConsola() {
    console.log("El botón fue clicado")
}

function clickPrompt() {
    let ciudadBrazil = prompt("Dime una ciudad de Brasil");
    alert(`Estuve en ${ciudadBrazil} y me acordé de ti`)
}

function clickAlerta() {
    alert("Yo amo JS");
}

function clickSuma () {
    let numero1 = +prompt("Dime un número");
    let numero2 = +prompt("Dime otro número");
    let suma = (numero1 + numero2);
    alert(`La suma de ellos es ${suma}`);
}