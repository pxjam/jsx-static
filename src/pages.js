import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { buildPage } from './build'

import Home from './pages/contacts.jsx'

// build the page
buildPage('index', ReactDOMServer.renderToStaticMarkup(
	<Home
		title="Hello, title!"
		description="Hello, description!"
	/>
))
// buildPage('contact', ReactDOMServer.renderToStaticMarkup(<Contact title="Contact Me"
//     description="Get in touch, I'd love to hear from you!" />))
