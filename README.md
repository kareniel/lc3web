# lc3web

I'm teaching myself computer architecture.
This is an exercise in trying to make sure I understand how every
part fits in the bigger picture.


Goals: 
1. Assemble programs
2. Run them and display values in registers and memories

So, where do I start?

I'll just start by enumerating components.

- Basic Logic Gates:
  - NOT
  - OR
  - AND
  - NOR
  - NAND
- Decoders
- Muxes
- Ripple Carry Adder
- Storage
  - R-S Latch
  - D Latch
  - D Flip-Flop
  - Multi-Bit Latch 
  - Register
  - Memory
- Moore Machine

Von Neumann Machine:

- Memory
  - MAR
  - MDR
- Processing Unit
  - ALU
  - TEMP
- Control Unit
  - PC
  - IR
- Input (Keyboard)
- Output (Monitor)

Addressing modes:
  - Immediate
  - Relative
  - PC-Relative
  - Base+Offset
  - Memory-indirect


```js
// bitwise operators
a & b    // AND
a | b    // OR
(~a + 1) // two's complement
```

#### Memory

1. x0000-x00FF Trap Vector Table
2. x0100-x01FF Interrupt Vector Table
3. x0200-x2FFF Operating System & Supervisor Stack
4. x3000-xFDFF Available for user programs (12,288 - 65,023)
5. xFE00-xFFFF Device Register addresses

#### Questions

- 16-bit binary arithmetic in Javascript?
- What state should a register be in if it has not been initialized?
- Should I use integers for states or just enums?
- What if I used streams to represent control signals?