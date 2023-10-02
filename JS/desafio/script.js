let numberOne, numberTwo

const sum = (valorOne, valorTwo) => {
    result = valorOne + valorTwo
    return result
}
const subtraction = (valorOne, valorTwo) => {
    result = valorOne - valorTwo
    return result
}
const multiplication = (valorOne, valorTwo) => {
    result = valorOne * valorTwo
    return result
}
const division = (valorOne, valorTwo) => {
    result = valorOne / valorTwo
    return result
}
const restDivision = (valorOne, valorTwo) => {
    result = valorOne % valorTwo
    return result
}

numberOne = Number(prompt(`Digite o primeiro número:`))


numberTwo = Number(prompt(`Digite o segundo número:`))
if(numberOne == numberTwo) {
    alert(`Os números digitados são iguais`)
} else {
    alert(`Os números digitados são diferentes`)
}


if (sum(numberOne, numberTwo) % 2 == 0) {
    alert(`A soma dos dois números gera um número par`)

} else {
    alert(`A soma dos dois números gera um número ímpar`)

}

alert(`A subtração dos dois números é ${subtraction(numberOne, numberTwo)}`)
alert(`A multiplicação dos dois números é ${multiplication(numberOne, numberTwo)}`)
alert(`A divisão dos dois números é ${division(numberOne, numberTwo)}`)
alert(`O resto da divisão dos dois números é ${restDivision(numberOne, numberTwo)}`)

