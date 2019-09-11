class CustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("innerHTML: " + this.innerHTML)
    this.template = document.createElement('template');
    this.template.innerHTML = `
      <style>
        :host {
          color: tomato;
	}
      </style>
      <p>MathML inside of a custom element: ${this.innerHTML}</p>
    `;

    console.log("template.content: " + JSON.stringify(this.template.content))

    this.attachShadow({mode: "open"}).appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("Calling back ...")
    console.log("shadowRoot: " + JSON.stringify(this.shadowRoot))
    MathJax.typesetShadow(this.shadowRoot);
  }
}

customElements.define('custom-element', CustomElement);
