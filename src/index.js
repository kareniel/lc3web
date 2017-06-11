const choo = require('choo')
const html = require('choo/html')

const app = choo()

app.route('/', main)
app.use(require('./lc3.model'))
app.mount('body')

function main (state, emit) {
  return html`
    <body>
      <h1>lc3web</h1>
      ${require('./terminal.el')(state, emit)}
    </body>
  `
}

