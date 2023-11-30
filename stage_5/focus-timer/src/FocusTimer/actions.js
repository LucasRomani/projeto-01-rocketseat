import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'
import * as events from './events.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    console.log('ToggleRunning function')
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sounds.buttonPressAudio.play()
}
events.setMinutes()
export function set() {
    console.log('Set function')
    el.minutes.setAttribute('contenteditable', true)
    events.setMinutes()
    el.minutes.focus()
}

export function reset() {
    console.log('Reset function')
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function toggleMusic() {
    console.log('ToggleMusic function')
    state.isMute = document.documentElement.classList.toggle('music-on')
    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }
    sounds.bgAudio.pause()
}

export function pressEnter() {
    el.minutes.addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
        el.minutes.removeAttribute('contenteditable')
        }
    })
}