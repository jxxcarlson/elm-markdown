class MathText extends HTMLElement {

//  constructor() {
//          super();
//
//        }


  connectedCallback() {
    this.attachShadow({mode: "open"});
    console.log('INNER HTML: ' + this.innerHTML)
    this.shadowRoot.innerHTML =
      '<mjx-doc><mjx-head></mjx-head><mjx-body>' + this.innerHTML + '</mjx-body></mjx-doc>';
    MathJax.typesetShadow(this.shadowRoot);
  }
}


customElements.define('math-text', MathText)
