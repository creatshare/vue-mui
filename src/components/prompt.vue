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
<div class="t-dimmer" v-show="show"></div>
<div class="t-modal" v-show="show">
	<div class="t-modal__header">
		<h3 class="t-modal__header--tt" 
			v-show="title !== ''" 
			v-text="title"></h3>
		<p class="t-modal__header--ct" v-text="content"></p>
	</div>
	<div class="t-prompt-ipt">
		<input type="text" v-model="key">
	</div>
	<div class="t-modal__footer">
		<a class="t-modal__footer--btn" 
		   @click.prevent="notify('cancel')">取消</a>
		<a class="t-modal__footer--btn" 
		   @click.prevent="notify('confirm')">确定</a>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			key : ''
		}
	},
	props : {
		show : {
			type : Boolean,
			default: false,
			twoWay : true
		},
		title : {
			type : String
		},
		content : {
			type : String
		}
	},
	methods : {
		notify(type) {
			this.show = false
			this.$dispatch(type, this.key)
		}
	}
}
</script>