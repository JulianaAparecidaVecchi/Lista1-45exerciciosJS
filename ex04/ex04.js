// Área e Perímetro do Retângulo
const BASE = 2
const ALTURA = 4

function calculaAreaRetan(base, altura){
    return base * altura
}

function calculaPerimetroRetan(base, altura){
    return (2 * base) + (2 * altura)
}

console.log(`Se você tem um retângulo de base ${BASE}m e altura ${ALTURA}m, então sua área é de ${calculaAreaRetan(BASE, ALTURA).toFixed(2)} e seu perímetro é de ${calculaPerimetroRetan(BASE,ALTURA).toFixed(2)}`)