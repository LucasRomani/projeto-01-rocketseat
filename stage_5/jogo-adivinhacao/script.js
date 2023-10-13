const buttonTry = document.querySelector('#buttonTry')
const playAgain = document.querySelector('#playAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)

let inputNumber = document.querySelector('#inputNumber')
let xAttempts = 1

/* adionando eventos no html*/
buttonTry.addEventListener('click', handleClick)
playAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressKeydown)
window.onload = focusInput()

/* funções */
function focusInput() {
    var meuInput = document.getElementById("inputNumber");
    meuInput.focus(); // Coloca o campo de entrada em foco
};
function validateValue() {
    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert("Por favor, insira um valor entre 0 e 10.")
        inputNumber.value = ""
    }
}
function pressKeydown(e) {
    if (e.key === "Enter" && screen1.classList.contains("hide")) {
        handleResetClick()
    }
}
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function handleResetClick() {
    toggleScreen()
    focusInput()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}
function handleClick(event) {
    event.preventDefault()
    validateValue()
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`

    } else{
        if (inputNumber.value.trim() !== "") {
            xAttempts++;
        }
    }
    inputNumber.value = ""
    focusInput()

}
