let result = prompt("Adivinhe o numero ")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


while (Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente!!")
    xAttempts++
}
if (xAttempts == 1) {
    alert(`Você acertou o número em ${xAttempts} tentativa, e o número era ${randomNumber}.`)
} else {
    alert(`Você acertou o número em ${xAttempts} tentativas, e o número era ${randomNumber}.`)
}
