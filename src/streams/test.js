const pull = require('pull-stream')
const log = require('pull-stream/sinks/log')

const {NOT, AND, OR} = require('./gates')

pull(
  OR(0, 1),
  pull.log()
)