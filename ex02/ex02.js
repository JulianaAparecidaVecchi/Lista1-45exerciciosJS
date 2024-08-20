// Calculo do IMC
// IMC = peso / altura **2
const PESO = 30
const ALTURA = 1.75

function calcularIMC(peso, altura){
    return peso / (altura ** 2)
}
console.log(`Para uma pessoa que pesa ${PESO} KG\nE tem ${ALTURA} m\nSeu IMC é ${calcularIMC(PESO,ALTURA).toFixed(2)}`)
// .tofixed serve para dexar apenas duas casas depois da vírgula.