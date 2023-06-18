const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		// index: './src/pages/index.jsx',
		contacts: './src/pages/contacts.js'
		// Add more entry points for other pages if needed
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			// {
			// 	test: /\.module\.(scss|css)$/,
			// 	use: [
			// 		{
			// 			loader: MiniCssExtractPlugin.loader
			// 		},
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				sourceMap: true,
			// 				modules: true
			// 			}
			// 		},
			// 		// {
			// 		// 	loader: 'postcss-loader',
			// 		// 	options: {
			// 		// 		postcssOptions: {
			// 		// 			plugins: ['autoprefixer']
			// 		// 		}
			// 		// 	}
			// 		// },
			// 		{ loader: 'sass-loader', options: { sourceMap: true } }
			// 	]
			// },
			// {
			// 	test: /\.css$/i,
			// 	include: path.resolve(__dirname, 'src'),
			// 	exclude: /node_modules/,
			// 	use: [
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				importLoaders: 0
			// 			}
			// 		}
			// 	]
			// },
			// {
			// 	test: /\.jsx$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['@babel/preset-env', '@babel/preset-react']
			// 		}
			// 	}
			// }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: '[name].bundle.css'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html',
		// 	template: './src/pages/index.jsx',
		// 	chunks: ['index'],
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'contacts.html',
		// 	template: './src/pages/contacts.js',
		// 	chunks: ['contacts']
		// })
		// Add more HtmlWebpackPlugin instances for other pages if needed
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		compress: true,
		port: 3000,
		historyApiFallback: true
	},
	stats: {
		children: true
	}
}
