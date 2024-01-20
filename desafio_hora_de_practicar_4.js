window.log = function(variables) {
    console.log(variables);
}

async function saludo() {
    log("Bienvenidos a este sitio")
}

async function saludoPersonalizado() {
    let nombre = prompt("¿Cuál es tu nombre?")
    log(`¡Hola, ${nombre}!`)
}

async function saludoPersonalizadoAlert() {
    let nombre = "Cristian"
    alert(`¡Hola, ${nombre}!`)
}

async function lenguajeFavorito() {
    let favorito = prompt("¿Cuál es el lenguaje de programacion que mas te gusta?")
    log(favorito)
}

async function sumaDeValores() {
    valor1 = 9
    valor2 = 7
    resultado = valor1 - valor2
    log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`)
}

async function edadUsuario() {
    let edad = prompt("Cuál es tu edad?")
    if (edad < 18) {
        log("Eres menor de edad");
    } else {
        log("Eres mayor de edad");
    }
}

async function polaridadNumero() {
    numero  = +prompt("Ingresa un número entero")
    if (Math.sign(numero) == 0) {
        alert("Numero Neutral")
    } else {
        if (Math.sign(numero) == 1) {
            alert("Numero Positivo")
        } else {
            alert("El número es negativo")
        }
    }

}

async function contador() {
    let contador = 1
    while (contador !== 11) {
        log(contador)
        await new Promise(resolve => (setTimeout(resolve,1000)))
        contador++
    }
}

async function nota() {
    let nota = 8
    log(nota)
    log(`${nota > 7 ? 'Aprobado' : 'Reprobado'}`)
}

async function random() {
    log(Math.random())
}

async function randomEntero() {
    log(Math.floor(Math.random() * 10 + 1))
}

async function randomMiles() {
    log(Math.floor(Math.random() * 1000 + 1))
}

async function ejecutarEnOrden() {
    await saludo();
    await saludoPersonalizado();
    await saludoPersonalizadoAlert();
    await lenguajeFavorito();
    await sumaDeValores();
    await edadUsuario();
    await polaridadNumero();
    await contador();
    await nota();
    await random();
    await randomEntero();
    await randomMiles();
}

ejecutarEnOrden();