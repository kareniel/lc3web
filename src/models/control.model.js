const Int16 = require('../Int16')
const opcodes = require('../opcodes')

module.exports = function (state, emitter) {
  state.PC = new Int16(0)  // Program Counter
  state.IR = new Int16(0)  // Instruction Register
  state.PSR = new Int16(0) // Processor Status Register
  state.CC = {
    N: false,
    Z: false,
    P: false
  }
  state.controlSignals = {
    R: false,              // Memory finished loading
    IR11: false,           // Addressing Mode (JSR vs JSSR)
    BEN: false,            // Branch
    PSR15: false,          // User privilege mode
    INT: false             // Interrupt present,
    SR1: false,
    DR: false
  }
  state.controlStore = {
    LD: {
      MAR: false,
      MDR: false,
      IR: false,
      BEN: false,
      REG: false,
      CC: false,
      PC: false,
      Priv: false,
      SavedSSP: false,
      SavedUSP: false,
      Vector: false
    },
    gate: {
      PC: false,
      MDR: false,
      ALU: false,
      MARMUX: false,
      Vector: false,
      PC1: false,
      PSR: false,
      SP: false
    },
    PCMUX: 'PC+1', // 'BUS', 'ADDER'
    DRMUX: '11.9', // 'R7', 'SP'
    SR1MUX: '11.9',
    ADDR1MUX: 'PC', // 'BaseR'
    ADDR2MUX: 'ZERO', // 'offset6', 'PCoffset9', 'PCoffset11'
    SPMUX: 'SP+1', // 'SP-1', 'Saved SSP', 'Saved USP'
    MARMUX: '7.0', // 'ADDER'
    VectorMUX: 'INTV', //'Priv.exception', 'Opc.exception'
    PSRMUX: 'individual settings', // 'BUS'
    ALUK: 'ADD', // 'AND', 'NOT', 'PASSA'
    MIO: {
      EN: false,
      RW: 'RD', // 'WR'
    },
    setPriv: false,
    CS: {
      J: '',
      COND: '',
      IRD: false 
      // CONDO ;Unconditional
      // CONDI ;Memory Ready
      // C0ND2 ;Branch
      // C0ND3 ;Addressing Mode
      // C0ND4 ;Privilege Mode
      // C0ND5 ;Interrupt test
    }
  }

  emitter.on('DOMContentLoaded', () => {
    emitter.on('clock:rise', () => {

        // FETCH I
          if () {
            state.MAR = state.PC
            state.PC = state.PC.add(1)
            state.cycle++
            return emitter.emit('render')
          }

        // FETCH II
          if () {
            emitter.emit('memory:load')
            state.cycle++
            return emitter.emit('render')
          }

        // FETCH III
          if () {
            state.IR = state.MDR
            state.cycle++
            return emitter.emit('render')
          }

        // DECODE 
          if () {
            const instruction = state.IR.toString(2)
            const opcode = opcodes[instruction.slice(0, 3)]
            emitter.emit(opcode, instruction)
            state.cycle = 0
            return emitter.emit('render')
          }
      }
    })
  })
}

