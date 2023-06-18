import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import terser from '@rollup/plugin-terser'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import html2 from 'rollup-plugin-html2'
// import htmlTpl from 'src/templates/index.html'

export default {
	input: {
		index: 'src/pages/index.jsx',
		// contacts: 'src/pages/contacts.jsx'
		// Add more entry points here if needed
	},
	output: {
		dir: 'dist',
		format: 'esm',
		entryFileNames: '[name].js',
		chunkFileNames: '[name]-[hash].js',
		assetFileNames: '[name]-[hash][extname]'
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
			babelHelpers: 'bundled',
			exclude: /node_modules/
		}),
		postcss({
			extract: true,
			modules: true,
			plugins: [
				autoprefixer(),
				cssnano()
			],
			autoModules: true
		}),
		html2({
			template: 'src/templates/template.html',
			fileName: 'contacts.html'
		}),
		serve({
			open: true,
			contentBase: 'dist',
			port: 5555
		}),
		livereload({
			watch: 'dist'
		}),
		terser()
	],
	external: ['react', 'react-dom'] // Add any other external dependencies here
}
