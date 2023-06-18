import React from 'react'
import Header from '../components/Header/Header'

function Main({ title, description, ...props }) {
	return (
		<html lang="en">
		<head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="description" content={description} />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			{props.head}
		</head>
		<body>
			<Header title={title} description={description} />
			{props.children}
		</body>
		</html>
	)
}

export default Main
