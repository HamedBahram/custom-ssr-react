import express from 'express'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../client/components/App/App'

const app = express()

app.get('/', (req, res) => {
    const jsx = ReactDOMServer.renderToString(<App />)

    const clientBundleScript = `<script src="scripts/bundle.js"></script>`
    const clientBundleStyle = `<link rel="stylesheet" href="styles/bundle.css">`

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Server-rendered React</title>
                ${clientBundleStyle}
            </head>
            <body>
                <div id='root'>${jsx}</div>
                ${clientBundleScript}
            </body>
        </html>
    `)
})

app.use(express.static(path.resolve('build', 'client')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`app running on http://localhost:${PORT}`))
