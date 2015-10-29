# vue-mui
mobile components for Vue.js

## Documentation ##
[Here](http://mui.yaobieting.com/document/index.html)

## Usage ##
import mui.css
```HTML
<link rel="stylesheet" href="./dist/mui.css">
```

### CommonJS ###
```
➜ npm install vue-mui
```
example：
```HTML
<template>
<a class="test-btn test-btn-confirm" v-on="click:show=true">confirm</a>
<div class="t-dimmer" v-show="show"></div>
<confirm show="{{@show}}" title="{{title}}" content="{{content}}" on-confirm="{{onConfirm}}" on-cancel="{{onCancel}}"></confirm>
</template>
```
```JavaScript
var Confirm = require('vue-mui').Confirm;

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'confirm' : Confirm
	},
	methods : {
		/**
		 * [点击确定之后的回调]
		 * @return {[type]} [description]
		 */
		onConfirm : function(){
			alert('点击了确定')
		},
		/**
		 * [点击取消之后的回调]
		 * @return {[type]} [description]
		 */
		onCancel : function(){
			alert('点击了取消')
		}
	}
	
}
```

### Browser ###
```HTML
<div id="app"></div>
<script type="text/javascript" src="./dist/vue.js"></script>
<script type="text/javascript" src="./dist/vue-mui-min.js"></script>
```
```JavaScript
var Alert = mui.Alert

var app = new Vue({
    el : '#app',
    components : {
        'alert' : Alert
    }
})
```