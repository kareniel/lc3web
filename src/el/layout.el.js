const html = require('choo/html')

module.exports = el => function (state, emit) {
  return html`
    <body>
      <nav>
        <ul>
          <li><a href="/">state</a></li>
          <li><a href="/program">program</a></li>
        </ul>
      </nav>
      ${el(state, emit)}
    </body>
  `
}