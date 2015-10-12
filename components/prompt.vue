<style lang="less">
.t-prompt-ipt{
	padding: 0 20px 20px;
	input{
		width: 100%;
		line-height: 26px;
		padding: 3px 10px;
		border: 1px solid #ddd;
		box-sizing: border-box;
	}
}
</style>

<template>
<div class="t-modal" v-show="show" v-el="modal">
	<div class="t-modal__header">
		<h3 class="t-modal__header--tt" v-show="title !== ''" v-text="title"></h3>
		<p class="t-modal__header--ct" v-text="content"></p>
	</div>
	<div class="t-prompt-ipt">
		<input type="text" v-model="key">
	</div>
	<div class="t-modal__footer">
		<a class="t-modal__footer--btn" v-on="click:show=false, click: onCancel">取消</a>
		<a class="t-modal__footer--btn" v-on="click:show=false, click: fnConfirm">确定</a>
	</div>
</div>
</template>

<script>
module.exports = {
	data : function(){
		key : ''
	},
	props : {
		show : {
			type : Boolean,
			twoWay : true
		},
		title : {
			type : String
		},
		content : {
			type : String
		},
		onConfirm : {
			type : Function
		},
		onCancel : {
			type : Function
		}
	},
	methods : {
		//将输入内容传入回调函数
		fnConfirm : function(){
			this.onConfirm(this.key);
		}
	}
}
</script>