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

    alert(`El número factorial es ${factorial}`)
}

calculadora()
factorial()