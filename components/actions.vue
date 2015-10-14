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
<div class="t-actions" v-show="show" v-transition="actions">
	<ul class="t-actions__list">
		<li class="t-actions__list--tt" v-if="title" v-text="title"></li>
		<content></content>
	</ul>
	<a class="t-actions__cancel" v-on="click:show=false">取消</a>
</div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			name : 'fix-position'
		}
	},
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
	},
	watch : {
		'show' : function(val){
			console.log(val)
		}
	}
}
</script>