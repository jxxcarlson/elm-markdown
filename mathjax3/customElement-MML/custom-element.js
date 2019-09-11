class CustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("innerHTML: " + this.innerHTML)
    this.template = document.createElement('template');
    this.template.innerHTML = this.innerHTML;
    this.attachShadow({mode: "open"}).appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("Calling back ...")
    MathJax.typesetShadow(this.shadowRoot);
  }
}

customElements.define('custom-element', CustomElement);
