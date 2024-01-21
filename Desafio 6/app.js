function holaMundo() {
    console.log("Hola, Mundo!");
    return;
}

function saludoPersonalizado(nombre) {
    return(alert(`Hola, ${nombre}!`)) 
}

function duplicarInput(numero) {
    return(console.log(numero * 2))
}

function promedioInput() {
    let suma = 0

    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return console.log(suma / arguments.length);
}

function numeroMaximo(...numero) { // Se declara el nombre del array que va a contener los valores
    if (numero.length === 0) {
        return null; // Si no hay número retorna null
    }

    let maximo = numero[0]; //Se asume que el primer número de la lista es el maximo.

    for (let i = 1; i < numero.length; i++) { // Se inicializa el bucle for contando los valores en el array
        if (numero[i] > maximo) { 
            maximo = numero[i]; // Si el numero en el indice es mayor que "Maximo" entonces lo suplanta.
        }
    }

    return console.log(`El valor mas alto es ${maximo}`)
}

function inputCuadrado(valor) {
    return console.log(valor * valor)
}