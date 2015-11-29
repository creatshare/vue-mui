var Vue = require('vue')
var App = require('./index.vue')
var prismcss = require('./lib/prism.css')
var prismjs = require('./lib/prism.js') //语法高亮

new Vue({
	el : 'body',
	components : {
		app : App
	}
})