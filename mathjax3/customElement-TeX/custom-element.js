class CustomElement extends HTMLElement {
  constructor() {
    super();
   }

  connectedCallback() {
    // this.template = document.createElement('template');
    // this.template.innerHTML = this.innerHTML;
    // this.attachShadow({mode: "open"}).appendChild(this.template.content.cloneNode(true));
    // MathJax.typesetShadow(this.shadowRoot);
    connectedCallback() {
      this.attachShadow({mode: "open"});
      this.shadowRoot.innerHTML =
        '<mjx-doc><mjx-head></mjx-head><mjx-body>' + this.innerHTML + '</mjx-body></mjx-doc>';
      MathJax.typesetShadow(this.shadowRoot);
    }
}

customElements.define('custom-element', CustomElement);
