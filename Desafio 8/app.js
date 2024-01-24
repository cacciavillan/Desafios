let listaGenerica = [];
console.log(listaGenerica);

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java', 'Ruby', 'Golang')
console.log(lenguajesDeProgramacion)

function arrayInvertido(lenguajes) {
    // Creamos una copia
    let copiaArray = [...lenguajes];
    // Invertimos la copia
    let arrayInverso = copiaArray.reverse();
    // Mostramos el array inverso
    console.log(arrayInverso);

}

arrayInvertido(lenguajesDeProgramacion)

function promedioLista() {
    let suma = 0;

    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return console.log(suma / arguments.length);
}

let listaNumeros = [1, 3, 5, 6]
promedioLista(...listaNumeros)


// Funcion que busca el numero maximo y el minimo en una lista
function numeroMaximoMinimo() {
    if (arguments.length === 0) {
        return null; // Si no hay numeros se devuelve Null
    }

    let maximo = arguments[0];  // Se asume que el primer numero de ambas listas es el 
    let minimo = arguments[0];  // maximo y el minimo

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > maximo) {
            maximo = arguments[i]; // Si el numero encontrado en el argumento i es mayor que maximo lo suplanta
        }

        if (arguments[i] < minimo) {
            minimo = arguments[i];
        }
    }
    return console.log(`El valor mas alto es ${maximo} y el mas bajo es ${minimo}`)

}

function sumaLista() {
    if (arguments.length === 0) {
        return null;
    }

    let suma = 0

    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return console.log(suma)
}

// Funcion que busca la posicion del numero en una lista.

function localizadorLista(parametro, lista) {
    if (lista.length === 0) {
        return null;
    }
    let posicion = -1 // La posicion inicializa en -1 para indicar que no se encontró el numero si no hay un cambio.
    for (let i = 0; i < lista.length; i++) {
        if (parametro === lista[i]) {
            posicion = i;
            break;
        }
    }
    return console.log(posicion)
}

let miParametro = 9
let miLista = [1, 3, 5, 6, 8]
localizadorLista(miParametro, miLista)

// Funcion que suma los numeros de la misma posicion en diferentes listas de igual tamaño
function sumarListas(lista1, lista2) {
    if (lista1.length === 0) {
        return null;
    }
    let suma = []
    for (let i = 0; i < lista1.length; i++) {
        suma.push(lista1[i] + lista2[i])
    }
    return console.log(suma)
}

let lista1 = [1,2,3,4]
let lista2 = [5,6,7,8]
sumarListas(lista1, lista2)

// Funcion que devuelve en una nueva lista el cuadrado de cada numero
function cuadradoLista() {
    if (arguments.length === 0) {
        return null
    }

    let cuadrados = []
    for (let i = 0; i < arguments.length; i++) {
        cuadrados.push(arguments[i]**2)
    }
    console.log(cuadrados)
}

cuadradoLista(2,4,6)