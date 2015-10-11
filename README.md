# vue-mui
一个用于移动端的vue组件系列
## 使用方法 ##
首先引入css
```HTML
<link rel="stylesheet" href="./dist/mui.css">
```
### CommonJS ###
例：
```HTML
<template>
<a class="test-btn test-btn-confirm" v-on="click:show=true">confirm</a>
<div class="t-dimmer" v-show="show"></div>
<confirm show="{{@show}}" title="{{title}}" content="{{content}}" on-confirm="{{onConfirm}}" on-cancel="{{onCancel}}"></confirm>
</template>
```
```JavaScript
var Confirm = require('../../components/confirm.vue');

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

### 浏览器中 ###
```HTML
<script type="text/javascript" src="./dist/vue.js"></script>
<script type="text/javascript" src="./dist/vue-mui.js"></script>
```
```JavaScript
var Alert = vueMui.Alert

var app = new Vue({
    el : '#app',
    components : {
        'alert' : Alert
    }
})
```

## 演示地址 ##
手机浏览
http://mui.yaobieting.com/example/