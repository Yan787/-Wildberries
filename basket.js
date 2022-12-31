import { createElement } from "./utils/createElement.js"
import "./logics.js"
import { card } from "./storageArr.js"


const root = document.getElementById(`root`)
const basket = document.getElementById(`basket`)


const containBasket = createElement(`div`, {
    className: `basket`,
})
basket.appendChild(containBasket)



    const wraperDiscount = createElement(`div`, {
    className: `wraperDiscount`
    })
    containBasket.appendChild(wraperDiscount)

    const discountPrice = createElement(`p`, {
    textContent: `Скидка`,
    className: `discountPrice`
    })

    const discountPriceGoods = createElement(`p`, {
    textContent: ``,
    className: `discountPriceGoods`
    })

    const nameGgoods = createElement(`p`, {
        textContent: ``,
        className: `nameGgoods`
    })

    const wraperPrice = createElement(`div`, {
        className: `wraperPrice`
        })
        containBasket.appendChild(wraperPrice)
    
        const totalPrice = createElement(`p`, {
        textContent: `Итого`,
        className: `totalPrice`
        })
    
        const totalPriceGoods = createElement(`p`, {
        textContent: ``,
        className: `totalPriceGoods`
        })


        const toOrderBtn = createElement(`button`, {
            textContent: `Заказать`,
            className: `toOrderBtn`
        })

        
        const emptyPlace = createElement(`p`, {
            textContent: `пусто`,
            className: `emptyPlace`
        })
       containBasket.appendChild(emptyPlace)

    
 const bin = [
    {
        name: ``,
        price: ``,
        discount: ``
    }
]


const plus = document.getElementById(`plus`) 
plus.addEventListener(`click`, ()=> {

    const blem = bin[0].name = card[0].text
    nameGgoods.textContent = blem
    containBasket.appendChild(nameGgoods)

    const alem = bin[0].price = card[0].price
    totalPriceGoods.textContent = alem
    wraperPrice.appendChild(totalPrice)
    wraperPrice.appendChild(totalPriceGoods)

    const elem = bin[0].discount = card[0].discount
    discountPriceGoods.textContent = elem
    wraperDiscount.appendChild(discountPrice)
    wraperDiscount.appendChild(discountPriceGoods)

    containBasket.appendChild(toOrderBtn)
    containBasket.removeChild(emptyPlace)

})





const minus = document.querySelector(`.minus`)
minus.addEventListener(`click`, ()=> {
    const blem = bin[0].name = card[0].text
    nameGgoods.textContent = blem
    containBasket.removeChild(nameGgoods)

    const alem = bin[0].price = card[0].price
    totalPriceGoods.textContent = alem
    wraperPrice.removeChild(totalPrice)
    wraperPrice.removeChild(totalPriceGoods)

    const elem = bin[0].discount = card[0].discount
    discountPriceGoods.textContent = elem
    wraperDiscount.removeChild(discountPrice)
    wraperDiscount.removeChild(discountPriceGoods)

    containBasket.removeChild(toOrderBtn)
    containBasket.appendChild(emptyPlace)
 })












const newDelitBtn = createElement(`div`, {
    className: `newDelitBtn`,
})





basket.addEventListener(`click`, ()=> {
    root.appendChild(newDelitBtn)
    root.appendChild(containBasket)
})
newDelitBtn.addEventListener(`click`, ()=> {
    root.removeChild(newDelitBtn)
    root.removeChild(containBasket)
})

