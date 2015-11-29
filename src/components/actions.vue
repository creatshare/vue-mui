<style lang="less">
.actions-transition{
	-webkit-transition : all ease .3s;
	transition : all ease .3s;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
.actions-enter,.actions-leave{
	-webkit-transform: translate3d(0, 100%,0);
	transform: translate3d(0, 100%,0);
}
</style>
<template>
<div class="t-dimmer" v-show="show"></div>
<div class="t-actions" v-show="show" transition="actions">
	<ul class="t-actions__list">
		<li class="t-actions__list--tt" v-if="title" v-text="title"></li>
		<slot></slot>
	</ul>
	<a class="t-actions__cancel" @click.prevent="show=false">取消</a>
</div>
</template>
<script>
export default {
	props : {
		show : {
			type : Boolean,
			default : false,
			twoWay : true
		},
		title : {
			type : String,
			default : ''
		}
	}
}
</script>