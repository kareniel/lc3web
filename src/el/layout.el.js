const html = require('choo/html')

module.exports = el => function (state, emit) {
  return html`
    <body>
      <nav>
        <ul>
        </ul>
      </nav>
      ${el(state, emit)}
    </body>
  `
}