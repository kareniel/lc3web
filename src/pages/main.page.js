const html = require('choo/html')
const terminalEl = require('../el/terminal.el')
const registersEl = require('../el/registers.el')
const programEl = require('../el/program.el')

module.exports = function (state, emit) {
  return html`
    <body>
      <h1>lc3web</h1>

      <div class="row">
        <div class="col">
          ${registersEl(state, emit)}
          ${terminalEl(state, emit)}
        </div>

        <div class="col">
          ${programEl(state, emit)}
        </div>
      </div>

    </body>
  `
}