// desafio_hora_de_practicar_3.js 

window.log = function(variables) {
    console.log(variables);
  }

async function contadorConEspera() {

    let contador = 1

    while (contador !== 11) {

        log(contador);
        await new Promise(resolve => setTimeout(resolve,1000));
        contador++;
    }
}

async function decrecer() {

    let contador = 10

    while (contador !== -1) {

        log(contador);
        await new Promise(resolve => setTimeout(resolve,1000));
        contador--;
    }
}

async function cuentaProgresiva() {

    let contador = +prompt("Ingrese un número mayor a 10")
    let base = 0
    log(`Su numero es ${contador}`)
    log('Inicio de cuenta progresiva')

    while (base !== contador + 1) {

        log(base);
        await new Promise(resolve => setTimeout(resolve,1000));
        base++;
    }
}

async function cuentaRegresiva() {

    let contador = +prompt("Ingrese un número menor a 10")
    let base = 20
    log(`Su numero es ${contador}`)
    log('Inicio de cuenta progresiva')

    while (base !== contador - 1) {

        log(base);
        await new Promise(resolve => setTimeout(resolve,1000));
        base--;
    }
}

//Ordena las funciones por orden secuencial para que no se ejecuten simultaneamente
async function ejecutarEnOrden() {
    await contadorConEspera();
    await decrecer();
    await cuentaProgresiva();
    await cuentaRegresiva
();
}

//LLama a la funcion ejecutarEnOrden 
ejecutarEnOrden()