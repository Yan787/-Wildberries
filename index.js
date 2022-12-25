import { createElement } from "./utils/createElement.js"


const root = document.getElementById(`root`)

const heder = createElement(`div`, {
    className: `heder`,
})
root.appendChild(heder)


const logo = createElement(`div`, {
    textContent: `wildberries`,
    className: `logo`
})
heder.appendChild(logo)


const input = createElement(`input`, {
    className: `input`,
    type: `text`
})
heder.appendChild(input)


const basket = createElement(`div`, {
    className: `basket`
})
heder.appendChild(basket)
