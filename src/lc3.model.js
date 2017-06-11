module.exports = function (state, emitter) {
  state.GPR = {
    '000': 0000000000000000, // R0
    '001': 0000000000000000, // R1
    '010': 0000000000000000, // R2
    '011': 0000000000000000, // R3
    '100': 0000000000000000, // R4
    '101': 0000000000000000, // R5
    '110': 0000000000000000, // R6 (used as the stack pointer)
    '111': 0000000000000000  // R7 (used as a return address for subroutines)
  }

  state.PC = 0000000000000000 // Program Counter
  state.IR = 0000000000000000 // 

  state.MAR = 0000000000000000 // Memory Address
  state.MDR = 0000000000000000 // Memory Data

  state.CC = 010              // Condition Codes (100, 010, 001)

  emitter.on('DOMContentLoaded', () => {

  })
}


