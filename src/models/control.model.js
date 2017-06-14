const IntN = require('IntN')
const opcodes = require('../opcodes')
const Int16 = IntN(16)
const Int3 = IntN(3)
const Int2 = IntN(2)
const Int1 = IntN(1)

module.exports = function (state, emitter) {
  state.PC = new Int16(0)  // Program Counter
  state.IR = new Int16(0)  // Instruction Register
  state.PSR = new Int16(0) // Processor Status Register

  state.CC = {
    N: new Int1(0),
    Z: new Int1(0),
    P: new Int1(0)
  }

  state.controlSignals = {
    DR: new Int1(0),
    SR1: new Int1(0),
    BEN: new Int1(0),             // Branch
    INT: new Int1(0),             // Interrupt present
    R: new Int1(0)                // Memory finished loading
  }

  state.microsequencerControlSignals = {
    J: new Int6(0),
    COND: new Int3(0),
      // CONDO ;Unconditional
      // CONDI ;Memory Ready
      // C0ND2 ;Branch
      // C0ND3 ;Addressing Mode
      // C0ND4 ;Privilege Mode
      // C0ND5 ;Interrupt test
    IRD: new Int1(0) 
  }

  state.dataPathControlSignals = {
    LD: {
      MAR: new Int1(0),
      MDR: new Int1(0),
      IR: new Int1(0),
      BEN: new Int1(0),
      REG: new Int1(0),
      CC: new Int1(0),
      PC: new Int1(0),
      Priv: new Int1(0),
      SavedSSP: new Int1(0),
      SavedUSP: new Int1(0),
      Vector: new Int1(0)
    },
    gate: {
      PC: new Int1(0),
      MDR: new Int1(0),
      ALU: new Int1(0),
      MARMUX: new Int1(0),
      Vector: new Int1(0),
      PC1: new Int1(0),
      PSR: new Int1(0),
      SP: new Int1(0)
    },
    MUX: {
      PC: new Int2(0), // 'PC+1', 'BUS', 'ADDER'
      DR: new Int2(0), // '11.9', 'R7', 'SP'
      SR1: '11.9',
      ADDR1: new Int1(0), //'PC', 'BaseR'
      ADDR2: new Int2(0), // 'ZERO', 'offset6', 'PCoffset9', 'PCoffset11'
      SP: new Int2(0), // 'SP+1', 'SP-1', 'Saved SSP', 'Saved USP'
      MAR: new Int1(0), // '7.0', 'ADDER'
      Vector: new Int2(0), // 'INTV', 'Priv.exception', 'Opc.exception'
      PSR: new Int1(0) //'individual settings', 'BUS'
    }
    ALUK: new Int2(0) //'ADD', 'AND', 'NOT', 'PASSA'
    MIO: {
      EN: new Int1(0),
      RW: new Int1(0) // 'RD', 'WR'
    },
    setPriv: new Int1(0)
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

          // state 32
          if () {
            const opcode = opcodes[instruction.slice(0, 3)]
            emitter.emit(opcode)
          }
      }
    })
  })
}

function microsequencer (opcode, IRD) {

}

function getBEN (P, Z, N, IR119) {
  // IR[11:9], PSR(N, Z, P)
  const BEN
  return BEN
}

function getDR (R7, R6, IR119) {
  // IR[11:9], 110, 111
  const DR
  return DR
}

function getSR1 (R6, IR86, IR119) {
  // IR[11:9], IR[8:6], 110
  const SR1
  return SR1
}