class RedText extends HTMLElement {

    constructor() {
        super();

      }

    connectedCallback () {
        const shadowDOM = this.attachShadow({ mode: 'open' })

        const text = document.createElement('p')
        text.innerHTML = this.innerHTML
        this.innerHTML = ''

        const style = document.createElement('style')
        style.innerHTML = `p { color: red }`

        shadowDOM.appendChild(style)
        shadowDOM.appendChild(text)
    }
}
customElements.define('red-text', RedText)

