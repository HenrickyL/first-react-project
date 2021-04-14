import React from 'react'
import { renderToString } from 'react-dom/server'
export default (helloMessage) => {

  const application = (
    <section className="section">
      <div className="container">
        <h1 className="title">
          {helloMessage}
        </h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
      </div>
    </section>
  )

  const html = renderToString(application)

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hello Bulma!</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
  </html>
  `
}