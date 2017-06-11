const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <div id="registers">
      <div>Cycle: ${state.CLK}</div>
      <button onclick=${e => emit('run')}>run</button>
      <button onclick=${e => emit('pause')}>pause</button>
      <button onclick=${e => emit('reset')}>reset</button>

      <div>
        <p>
          <div>PC: ${state.PC.toDebug(true)}</div>
          <div>IR: ${state.IR.toDebug(true)}</div>
        </p>

        <p>
          <div>PSR:
            <span>Priv: ${state.PSR.toDebug(true)[0]}</span>
            <span>Priority: ${state.PSR.toDebug(true).slice(5, 7)}</span>
            <span>CC: ${state.PSR.toDebug(true).slice(14)}</span>
          </div>
        </p>

      </div>

      <div>
        ${state.GPR.map((reg, i) => html`<div>R${i}: ${reg.toDebug(true)}</div>`)}
      </div>

      <div>
        <p>
          <div>MAR: ${state.MAR.toDebug(true)}</div>
          <div>MDR: ${state.MDR.toDebug(true)}</div>
        </p>
      </div>

    </div>
  `
}