const Int16 = require('../Int16')
const opcodes = require('../opcodes')

module.exports = function (state, emitter) {
  state.PC = new Int16(0)  // Program Counter
  state.IR = new Int16(0)  // Instruction Register
  state.PSR = new Int16(0) // Processor Status Register
  state.cycle = 0

  emitter.on('DOMContentLoaded', () => {
    let opcode, instruction

    emitter.on('runInstructionCycle', () => {
      switch (state.cycle) {
        
        // FETCH I
        case 0:
          state.MAR = state.PC
          state.PC = state.PC.add(1)
          state.cycle++
          emitter.emit('render')
          break

        // FETCH II
        case 1:
          emitter.emit('memory:load')
          state.cycle++
          emitter.emit('render')
          break

        // FETCH III
        case 2:
          state.IR = state.MDR
          state.cycle++
          emitter.emit('render')
          break

        // DECODE 
        case 3:
          instruction = state.IR.toString(2)
          opcode = opcodes[instruction.slice(0, 3)]
          emitter.emit(opcode, instruction)
          state.cycle = 0
          emitter.emit('render')
          break
      }
    })
  })
}

