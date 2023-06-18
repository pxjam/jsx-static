import ReactDOMServer from 'react-dom/server'
import App from '../App'
import fs from 'fs'
//
// export default function render() {
// 	console.log(ReactDOMServer.renderToStaticMarkup(App))
// 	return ReactDOMServer.renderToStaticMarkup(App)
// }

const html = ReactDOMServer.renderToStaticMarkup(App)

fs.writeFile('contacts.html', html, (err) => {
	if (err)
		console.log(err)
	else {
		console.log('File written successfully\n')
	}
})
