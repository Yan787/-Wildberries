import { createElement } from "./utils/createElement.js"
import "./basket.js"
import "./logics.js"

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


const input = document.getElementById(`icons`)
heder.appendChild(input)

 


  




  

