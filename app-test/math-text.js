
// From Luke

var typesetTimeout = null
var typesetQueue = []
function enqueueTypeset(el) {
	// console.log("enqueueTypeset: " + el)
	typesetQueue.push(el)
	clearTimeout(typesetTimeout)
	typesetTimeout = setTimeout(function () {
		var toTypeset = typesetQueue
		MathJax.Hub.Queue(["resetEquationNumbers", MathJax.InputJax.TeX]);
		MathJax.Hub.Queue(['Typeset', MathJax.Hub, typesetQueue], function (arg) {
			toTypeset.forEach(function (el) { el.style.opacity = 1 })
		})
		typesetQueue = []
	}, 1)
}

var updateQueue = []
var updateTimeout = null
function enqueueUpdate(el) {
	// console.log("enqueueUpdate: " + el)
	updateQueue.push(el)
	clearTimeout(updateTimeout)
	updateTimeout = setTimeout(function () {
		MathJax.Hub.Queue(['Update', MathJax.Hub, updateQueue])
		updateQueue = []
	}, 0)
}

customElements.define('math-text', class extends HTMLElement {
  constructor() {
	super()
	this._content = this.content
  }

	get content() {
		// console.log("get content: " + this._content)
		return this._content
	}

	set content(value) {
		// console.log("set content: " + value)
		if (this._content === value) return
		this._content = value
		var jaxScript = this.querySelector('script')
		if (!jaxScript) return
		jaxScript.textContent = this._content
		enqueueUpdate(this)
	}

	connectedCallback() {
		// console.log("connectedCallback: " + this._content )
		this.textContent = this._content
		this._connected = true
		this.style.opacity = 1
		this.style.display = 'inline'
			enqueueTypeset(this)
	}
})
