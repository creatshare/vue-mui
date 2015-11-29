# vue-mui
[![](https://img.shields.io/npm/v/vue-mui.svg?style=flat-square)](https://www.npmjs.com/package/vue-mui) [![](https://img.shields.io/npm/dt/vue-mui.svg?style=flat-square)](https://www.npmjs.com/package/vue-mui)

mobile components for Vue.js 1.0.*

## Documentation ##
[Here](http://mui.yaobieting.com/docs/index.html)

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
<a class="test-btn test-btn-confirm" @click.prevent="show=true">confirm</a>
<confirm :show.sync="show"
	     :title="title" 
	     :content="content"></confirm>
</template>
```

```JavaScript
var confirm = require('vue-mui').confirm;
// or //
import { confirm } from 'vue-mui'

export default {
	data() {
		return {
			show : false,
			title : 'This is title (optional)',
			content : 'This is content'
		}
	},
	components : {
		confirm
	},
	events : {
		confirm() {
			...code...
		},
		cancel() {
			...code...
		}
	}
}
```

### Browser ###
```HTML
<div id="app">
	<alert></alert>
</div>
<script type="text/javascript" src="./dist/vue.js"></script>
<script type="text/javascript" src="./dist/mui.js"></script>
```
```JavaScript
var alert = mui.alert

var app = new Vue({
    el : '#app',
    components : {
        'alert' : alert
    }
})
```
