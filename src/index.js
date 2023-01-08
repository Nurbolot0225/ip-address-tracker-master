import {validateIp} from './helpers'

const ipInput = document.querySelector('.search-bar__input')
const btn = document.querySelector('.search-bar__btn')

btn.addEventListener('click', getData)
ipInput.addEventListener('keydown', handleKey)

function getData() {
    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_BTEx96VQechKALwxYuh6dlc3dPyQW&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(console.log)    
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData()
    }
}