
customElements.define('blue-text', class extends HTMLElement {
  constructor() {
    super()
  }

  get content() {
    console.log("get content: " + this._content)
    return this._content
  }

  set content(value) {
    console.log("set content: " + value)
    if (this._content === value) return
    this._content = value
  }

  connectedCallback() {
    console.log("connectedCallback")

    const shadowDOM = this.attachShadow({ mode: 'open' })

    const text = document.createElement('p')
    text.innerHTML = this._content
    this.innerHTML = ''

    const style = document.createElement('style')
    style.innerHTML = `p { color: blue }`

    shadowDOM.appendChild(style)
    shadowDOM.appendChild(text)
  }
})
