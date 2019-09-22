class CustomElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML =
      '<mjx-doc><mjx-head></mjx-head><mjx-body>' + this.innerHTML + '</mjx-body></mjx-doc>';
    MathJax.typesetShadow(this.shadowRoot);
  }
}

window.addEventListener('DOMContentLoaded', () => customElements.define('custom-element', CustomElement), true);
