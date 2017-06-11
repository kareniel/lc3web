const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <div id="program">
      <textarea placeholder="; Write some assembly code here"></textarea>
      <p>
        <button>assemble</button>
      </p>
    </div>
  `
}