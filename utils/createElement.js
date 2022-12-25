export const createElement = (tag, option) => {
    const alem = document.createElement(tag)

    Object.keys(option).forEach(item=> {
        alem[item] = option[item]
    })
    return alem
}