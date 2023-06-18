// import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Header from '../components/Header/Header'

ReactDOMServer.renderToStaticMarkup(
	<>
		<Header title="Contacts 1234" description="Welcome to my website 1234" />
		<h1>Contacts 123</h1>
		<p>Welcome to my website</p>
	</>
)
