<style lang="less">
.test-btn-alert{
	background-color: #4c9cee;
}
</style>

<template>
<a class="test-btn test-btn-alert" v-on="click:show=true">alert</a>
<div class="t-dimmer" v-show="show"></div>
<alert show="{{@show}}" title="{{title}}" content="{{content}}"></alert>
</template>

<script>
var Alert = require('../../components/alert.vue');

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'alert' : Alert
	}
}
</script>