const choo = require('choo')
const html = require('choo/html')
const mainPage = require('./pages/main.page')
const programPage = require('./pages/program.page')
const layout = require('./el/layout.el')

const app = choo()

app.route('/', layout(mainPage))
app.route('/program', layout(programPage))

app.use(require('./models/io.model'))
app.use(require('./models/control.model'))
app.use(require('./models/memory.model'))
app.use(require('./models/processing.model'))

app.mount('body')
