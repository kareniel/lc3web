const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <div id="terminal">
      <div id="terminal-output">
        <div></div>
      </div>
      <div id="terminal-input">
        <div id="terminal-input-prefix">
          <span>anon</span><span>@</span><span>lc3web</span><span>:/</span><span>$</span>
        </div>
        <div id="terminal-input-field">
          <input type="text">
        </div>
      </div>
    </div>
  `
}