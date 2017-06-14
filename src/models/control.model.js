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
    DR: false,
    SR1: false,
    BEN: false,             // Branch
    INT: false,             // Interrupt present
    R: false                // Memory finished loading
  }

  state.microsequencerControlSignals = {
    J: '6-bit',
    COND: '4-bit',
      // CONDO ;Unconditional
      // CONDI ;Memory Ready
      // C0ND2 ;Branch
      // C0ND3 ;Addressing Mode
      // C0ND4 ;Privilege Mode
      // C0ND5 ;Interrupt test
    IRD: false 
  }

  state.dataPathControlSignals = {
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
    MUX: {
      PC: '2-bit', // 'PC+1', 'BUS', 'ADDER'
      DR: '2-bit', // '11.9', 'R7', 'SP'
      SR1: '11.9',
      ADDR1: false, //'PC', 'BaseR'
      ADDR2: '2-bit', // 'ZERO', 'offset6', 'PCoffset9', 'PCoffset11'
      SP: '2-bit', // 'SP+1', 'SP-1', 'Saved SSP', 'Saved USP'
      MAR: false, // '7.0', 'ADDER'
      Vector: '2-bit', // 'INTV', 'Priv.exception', 'Opc.exception'
      PSR: false //'individual settings', 'BUS'
    },
    ALUK: '2-bit', //'ADD', 'AND', 'NOT', 'PASSA'
    MIO: {
      EN: false,
      RW: false // 'RD', 'WR'
    },
    setPriv: false
  }

  emitter.on('DOMContentLoaded', () => {
    emitter.on('clock:rise', () => {
        // // FETCH I
        //   if () {
        //     state.MAR = state.PC
        //     state.PC = state.PC.add(1)
        //     state.cycle++
        //     return emitter.emit('render')
        //   }

        // // FETCH II
        //   if () {
        //     emitter.emit('memory:load')
        //     state.cycle++
        //     return emitter.emit('render')
        //   }

        // // FETCH III
        //   if () {
        //     state.IR = state.MDR
        //     state.cycle++
        //     return emitter.emit('render')
        //   }

        //   // state 32
        //   if () {
        //     const opcode = opcodes[instruction.slice(0, 3)]
        //     emitter.emit(opcode)
        //   }
      
    })
  })
}

function microsequencer (opcode, IRD) {

}

function getBEN (P, Z, N, IR119) {
  // IR[11:9], PSR(N, Z, P)
  let BEN
  return BEN
}

function getDR (R7, R6, IR119) {
  // IR[11:9], 110, 111
  let DR
  return DR
}

function getSR1 (R6, IR86, IR119) {
  // IR[11:9], IR[8:6], 110
  let SR1
  return SR1
}