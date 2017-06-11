const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <div id="terminal">
      <div>
        <div></div>
      </div>
      <table id="terminal-input">
        <span id="terminal-input-prefix">
          <span>anon</span><span>@</span><span>lc3web</span><span>:/</span><span>$</span>
        </span>
        <span>
          <input type="text">
        </span>
      </table>
    </div>
  `
}