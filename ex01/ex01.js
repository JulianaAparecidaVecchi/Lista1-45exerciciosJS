//Conversor de temperatura
const CELSIUS = 30
const FAH = 86

function converteCelsius(valorfah){
    return  ((valorfah - 32) * 5)/9
}

function converteFah(valorCel){
    return ((valorCel * 9)/5) + 32
}

console.log(`${CELSIUS} °C é a mesma coisa que ${converteFah(CELSIUS)}`)
console.log(`${FAH} F é a mesma coisa que ${converteCelsius(FAH)}`)