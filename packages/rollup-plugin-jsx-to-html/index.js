import { createFilter } from 'rollup-pluginutils'
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'fs'

// rollup plugin that takes jsx from input
// and renders it to static html files inside output folder with ReactDOMServer.renderToStaticMarkup function
export default function jsxToHtml(options = {}) {
	const filter = createFilter(options.include, options.exclude)


	return {
		name: 'jsx-to-html',

		buildStart() {
			this.importedFilePaths = new Set()
		},

		async resolveImportedFilePath(importedFilePath, importer) {
			const resolved = await this.resolve(importedFilePath, importer, { skipSelf: true })
			if (resolved && resolved.id) {
				return resolved.id
			}
			return null
		},

		transform(code, id) {
			if (!filter(id)) return null

			const html = renderToStaticMarkup(code)
			fs.writeFileSync('dist/contacts.html', html)

			return {
				code: `export default ${JSON.stringify(html)};`,
				map: { mappings: '' }
			}
		}
	}
}
