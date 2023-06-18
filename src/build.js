const fs = require('fs')
require('@babel/register') // to compile React

// build function writes the static html to a file in the dist directory
exports.buildPage = function(path, content) {
	fs.writeFile(__dirname + '/../dist/' + path + '.html', '<!DOCTYPE html>\n' + content, function(error) {
		if (error) {
			console.error(error)
			return false
		}
		console.log('Build of ' + path + '.html successful')
	})
}

// build the pages
require('./pages.js')
