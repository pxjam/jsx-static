import React from 'react'
import Main from '../templates/Main'

function Index(props) {
	return (
		<Main {...props}>
			<h1>My Site</h1>
			<p>Welcome to my website.</p>
		</Main>
	)
}

export default Index
