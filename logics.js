import { createElement } from "./utils/createElement.js"
import "./basket.js"
import { card } from "./storageArr.js"


const wraper = createElement(`div`, {
    className: `wrap`
})

 const addingSection = (alem) => {
    const { id, img, text, price, discount } = alem


    root.appendChild(wraper)
    const card = createElement(`div`, {
        className: `card`,
        id: String(id)
    })
    wraper.appendChild(card)
    
    
    const img1 = createElement(`div`, {
        className: img
    })
    card.appendChild(img1)

    const wraperPrs = createElement(`div`, {
        className: `wraperPrs`
    })
    card.appendChild(wraperPrs)


    const priceList = createElement(`p`, {
        textContent: price,
        className: `price`
    })
    wraperPrs.appendChild(priceList)


    const priceDiscount = createElement(`p`, {
        className: `discount`,
        textContent: discount
    })
    wraperPrs.appendChild(priceDiscount)

    
    const namePrduct = createElement(`p`, {
        textContent: text,
        className: `namePrduct`
    })
    card.appendChild(namePrduct)
    

    const wraperPlusAndMinus = createElement(`div`, {
        className: `plusAndMinus`
    })
    card.appendChild(wraperPlusAndMinus)


    const plus = createElement(`button`, {
        textContent: `+`,
        className: `plus`,
        id: `plus`
    })
    card.appendChild(plus)


    const minus = createElement(`button`, {
        textContent: `-`,
        className: `minus`,
    })
    card.appendChild(minus)
    
}

card.forEach(alem => {
    addingSection(alem)
})


