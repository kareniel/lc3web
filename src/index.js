const choo = require('choo')
const html = require('choo/html')
const layout = require('./el/layout.el')
const mainPage = require('./pages/main.page')

const app = choo()

app.route('/', layout(mainPage))

app.use(require('./models/io.model'))
app.use(require('./models/control.model'))
app.use(require('./models/memory.model'))
app.use(require('./models/processing.model'))

app.mount('body')
