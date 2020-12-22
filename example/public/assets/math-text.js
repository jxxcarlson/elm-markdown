class MathText extends HTMLElement {


  connectedCallback() {
      const content_ =
        this.display
          ? '$$' + this.content + '$$'
          : '$' + this.content + '$' ;
      this.attachShadow({mode: "open"});
      this.shadowRoot.innerHTML =
          '<mjx-doc><mjx-head></mjx-head><mjx-body>' + content_ + '</mjx-body></mjx-doc>';
           MathJax.typesetShadow(this.shadowRoot)
      if (this.delay) {
        setTimeout(() => MathJax.typesetShadow(this.shadowRoot), 1);
      }
  }
}

customElements.define('math-text', MathText)

