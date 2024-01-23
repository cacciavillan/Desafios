// Calculadora de IMC

function calculadoraImc(altura, peso) {
    //Convertir la altura de cm a metros

    altura = altura / 100;

    //calcular el IMC

    var imc = peso / (altura * altura);

    // Redondear el resultado a dos decimales
    imc = parseFloat(imc.toFixed(2));

    return imc
}

function categoriaImc(imc) {
    if (imc < 18.5) {
        return "bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "sobrepeso";
    } else {
        return "obesidad"
    }
}

function calculadora() {

    let altura = +prompt("Inserte su altura")
    let peso = +prompt("Inserte su peso")

    let imc = calculadoraImc(altura, peso);
    let categoria = categoriaImc(imc);

    alert(`Su IMC es de ${imc} y tiene ${categoria}`)
}    

// Calculadora factorial 

// Sintaxis general de un bucle for:
// for (Inicialización; condición; expresion de actualización) {
    // Codigo a ejecutar en cada iteracion
// } 

function calculadoraFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

function factorial() {
    let numeroUsuario = +prompt("Ingrese un numero")
    let factorial = calculadoraFactorial(numeroUsuario)

    alert(`El número factorial es ${factorial.toFixed(2)}`)
}

function conversorReales() {
    let reales = 4.80;
    let numero = +prompt("¿Cuantos dólares desea cambiar?");
    cambio = (numero * reales);
    return(alert(`Usted recibirá R$${cambio.toFixed(2)}`))
}

function calculadoraAreaRectangular() { // Area y perímetro
    let longitud = +prompt("Ingrese el largo de la habitacion en cm")
    let anchura = +prompt("Ingrese el ancho de la habitación en cm")

    let area = ((longitud / 100) * (anchura / 100));
    let perimetro = (2 * ((longitud / 100) + (anchura / 100)));

    alert(`El área es ${area.toFixed(2)}m2`);
    alert(`El perímetro es de ${perimetro.toFixed(2)}m`);
    
}

function calculadoraAreaCircular() {
    let radio = +prompt("Cual es el radio de la habitacion (En centrimetros)")

    let area = (Math.PI * (radio / 100)**2)
    let perimetro = (2 * Math.PI * (radio / 100))

    alert(`El area es de ${area.toFixed(2)}m2`)
    alert(`El perimetro es de ${perimetro.toFixed(2)}m`)
}

function generarTablaMultiplicar(numero) {
    // Inicializa un array vacio para almacenar los objetos de la tabla.
    let tabla = [];

    // Utiliza un bucle para generar los elementos de la tabla
    for (let i = 1; i <= 10; i++) {
        // Calcular el resultado de la multiplicacion
        let resultado = numero * i;
        // Crear un objeto con las pripiedades "Multiplicar" y "Resultado"
        // Y agregarlo al array
        tabla.push({multiplicador: i, resultado: resultado});
    }
    // Devolver el array que representa la tabla de multiplicar
    return console.log(tabla);
}


//calculadora();
//factorial();
//conversorReales();
//calculadoraAreaRectangular();
//calculadoraAreaCircular();
let valor = +prompt("Ingrese un número del 1 al 10");
generarTablaMultiplicar(valor)
