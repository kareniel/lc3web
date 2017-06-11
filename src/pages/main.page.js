const html = require('choo/html')
const terminalEl = require('../el/terminal.el')

module.exports = function (state, emit) {
  return html`
    <body>
      <h1>lc3web</h1>

      <div class="col">
        <div>${state.CLK}</div>
        <button onclick=${e => emit('run')}>run</button>
        <button onclick=${e => emit('pause')}>pause</button>
        <button onclick=${e => emit('reset')}>reset</button>

        <div>
          <h2>Control</h2>
          <div>PC: ${state.PC.toDebug(true)}</div>
          <div>IR: ${state.IR.toDebug(true)}</div>
          <div>PSR:
            <span>Priv: ${state.PSR.toDebug(true)[0]}</span>
            <span>Priority: ${state.PSR.toDebug(true).slice(5, 7)}</span>
            <span>CC: ${state.PSR.toDebug(true).slice(14)}</span>
          </div>
        </div>
        <div>
          <h2>General Purpose Registers</h2>
          ${state.GPR.map((reg, i) => html`<div>R${i}: ${reg.toDebug(true)}</div>`)}
        </div>
        <div>
          <h2>Memory</h2>
          <div>MAR: ${state.MAR.toDebug(true)}</div>
          <div>MDR: ${state.MDR.toDebug(true)}</div>
        </div>
      </div>

      <div class="col">
        ${terminalEl(state, emit)}
      </div>

    </body>
  `
}