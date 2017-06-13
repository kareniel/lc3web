module.exports = function (state, emitter) {
  state.CLK = {
    speed: 4,
    count: 0,
    edge: true,
    _interval: null
  }

  emitter.on('DOMContentLoaded', () => {
    emitter.on('run', () => {
      state.CLK._interval = setInterval(() => {
        emitter.emit('clock:pulse')
      }, 1000 / state.CLK.speed)
    })

    emitter.on('pause', () => {
      clearInterval(state.CLK._interval)
      emitter.emit('render')
    })

    emitter.on('reset', () => {
      state.CLK.count = 0
      state.CLK.edge = true
      emitter.emit('render')
    })

    emitter.on('pulse', () => {
      state.CLK.edge = !state.CLK.edge
      state.CLK.count++
      return state.CLK.edge
        ? emitter.emit('clock:rise')
        : emitter.emit('clock:fall')
    })
  })
}
