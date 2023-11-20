
import { Modal } from './modal.js'
import { IMC, notANumber } from './utils.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError){
        AlertError.open()
        
        return 
    }

    AlertError.close()

    const result = IMC(weight, height)
    displayMessage(result)

}


function displayMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}