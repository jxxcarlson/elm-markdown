
class ColoredText extends HTMLElement {
    constructor () {
        super()
        console.log("COLORED:innerHTML: " + this.innerHTML)
        const color = this.getAttribute('color')
        const shadowDOM = this.attachShadow({ mode: 'open' })
        const text = document.createElement('p')
        text.innerHTML = this.innerHTML
        this.innerHTML = ''
        const style = document.createElement('style')
        style.innerHTML = `p { color: ${color} }`
        shadowDOM.appendChild(style)
        shadowDOM.appendChild(text)
    }
}
customElements.define('colored-text', ColoredText)
