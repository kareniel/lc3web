const Int16 = require('../Int16')

module.exports = function (state, emitter) {
  state.GPR = [
    new Int16(0), // R0
    new Int16(0), // R1
    new Int16(0), // R2
    new Int16(0), // R3
    new Int16(0), // R4
    new Int16(0), // R5
    new Int16(0), // R6 (used as the stack pointer)
    new Int16(0)  // R7 (used as a return address for subroutines)
  ]

  emitter.on('DOMContentLoaded', () => {

    /* 
     * Operate (ADD, AND, NOT)
     */ 

    emitter.on('ADD', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })

    emitter.on('AND', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })

    emitter.on('NOT', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })

    /* 
     * Data Movement (LD, LDI, LDR, LEA, ST, STR, STI)
     */ 

    emitter.on('LD', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })

    emitter.on('LDI', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('LDR', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('LEA', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('ST', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('STR', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('STI', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    /* 
     * Control (BR, JSR, JMP, RTI, TRAP)
     */ 

    emitter.on('BR', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })

    emitter.on('JSR', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('JMP', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('RTI', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })
    
    emitter.on('TRAP', instruction => {
      // evaluate address
      // fetch operands
      // execute
      // store results
      emitter.emit('render')
    })

    // Trap Service Routines

    // x20 (100000)
    emitter.on('GETC', payload => {
      // Read a single character from the keyboard. 
      // The character is not echoed onto the console. 
      // Its ASCII code is copied into R0. 
      // The high eight bits of R0 are cleared.
    })

    // x21 (100001)
    emitter.on('OUT', payload => {
      // Write a character in R0[7:0] to the console display.
    })

    // x22 (100010)
    emitter.on('PUTS', payload => {
      // Write a string of ASCII characters to the console display. 
      // The characters are contained in consecutive memory locations, 
      // one character per memory location, starting with the address 
      // specified in R0. Writing terminates with the occurrence 
      // of x0000 in a memory location.
    })

    // x23 (100011)
    emitter.on('IN', payload => {
      // Print a prompt on the screen and read a single character from 
      // the keyboard. The character is echoed onto the console monitor, 
      // and its ASCII code is copied into R0. The high eight bits 
      // of R0 are cleared.
    })

    // x24 (100100)
    emitter.on('PUTSP', payload => {
      // Write a string of ASCII characters to the console. 
      // The characters are contained in consecutive memory locations, 
      // two characters per memory location, starting with the address 
      // specified in R0. The ASCII code contained in bits [7:0] of a 
      // memory location is written to the console first. 
      // Then the ASCII code contained in bits [15:8] of that memory 
      // location is written to the console. 
      // (A character string consisting of an odd number of characters 
      // to be written will have x00 in bits [15:8] of the memory location 
      // containing the last character to be written.) 
      // Writing terminates with the occurrence of x0000 in a memory location.
    })

    // x25 (100101)
    emitter.on('HALT', payload => {
      // Halt execution and print a message on the console.
    })
  })
}


