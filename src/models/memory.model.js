const Int16 = require('../Int16')

module.exports = function (state, emitter) {
  state.MAR = new Int16(0) // Memory Address
  state.MDR = new Int16(0) // Memory Data
  state.MEMORY = new Array(Math.pow(2, 16))
    .fill(0)
    .map(x => x = new Int16(0))

  emitter.on('DOMContentLoaded', () => {
    emitter.on('memory:load', payload => {
      state.MDR = state.MEMORY[state.MAR]
    })
  })
}

// 1. x0000-x00FF Trap Vector Table                     (0 - 255)
// 2. x0100-x01FF Interrupt Vector Table                (256 - 511)
// 3. x0200-x2FFF Operating System & Supervisor Stack   (512 - 12,287)
// 4. x3000-xFDFF Available for user programs           (12,288 - 65,023)
// 5. xFE00-xFFFF Device Register addresses             (65,024 - 65,535)
