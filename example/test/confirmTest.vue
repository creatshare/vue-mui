<style lang="less">
.test-btn-confirm{
	background-color: #4c9;
}
</style>

<template>
<a class="test-btn test-btn-confirm" v-on="click:show=true">confirm</a>
<div class="t-dimmer" v-show="show"></div>
<confirm show="{{@show}}" title="{{title}}" content="{{content}}" on-confirm="{{onConfirm}}" on-cancel="{{onCancel}}"></confirm>
</template>

<script>
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
</script>