module.exports = function (state, emitter) {
  state.CLK = 0
  state.CLK_SPEED = 4

  emitter.on('DOMContentLoaded', () => {
    let interval

    emitter.on('run', () => {
      interval = setInterval(() => {
        state.CLK++
        emitter.emit('runInstructionCycle')
      }, 1000 / state.CLK_SPEED)
    })

    emitter.on('pause', () => {
      clearInterval(interval)
      emitter.emit('render')
    })

    emitter.on('reset', () => {
      state.CLK = 0
      emitter.emit('render')
    })
  })
}
