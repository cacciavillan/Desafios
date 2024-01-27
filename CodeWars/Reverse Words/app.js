console.log("Hola Mundo!")

function defaultInput() {
    let defaultInput = "El lobo feroz acecha a Caperusita Roja";
    document.getElementById('inputPalabras').value = defaultInput;
}

function invertirPalabras() {
    const inputPalabras = document.getElementById('inputPalabras').value;
    const palabrasInvertidas = reverseWords(inputPalabras);
    document.getElementById('outputPalabras').value = palabrasInvertidas;
}

function reverseWords(str) {
    // Declaro la cont wordsArray y le asigno el resultado de split sobre str
    const wordsArray=str.split(" ");
    console.log(wordsArray)
    
    const reversedWordsArray = wordsArray.map(element => {
      return element.split("").reverse().join("");
      });
      console.log(reversedWordsArray)
    
    const resultString = reversedWordsArray.join(" ");
    
    return resultString;                                           
    // Go for it
  }
  
  const input = 'El lobo Feroz acecha a Caperusita Roja';
  const result = reverseWords(input);
  console.log(result);