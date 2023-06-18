// import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../components/App/App.jsx'
import fs from 'fs'

// ReactDOMServer.renderToStaticMarkup(App)
const html = ReactDOMServer.renderToStaticMarkup(App)

console.log(html)

fs.writeFile('index.html', html, (err) => {
	if (err)
		console.log(err)
	else {
		console.log('File written successfully\n')
	}
})
