<style lang="less">
.toggle-transition{
	-webkit-transition: height .3s ease;
	transition: height .3s ease;
	overflow: hidden;
}
.toggle-enter,
.toggle-leave{
	height : 0!important;
}
</style>

<template>
<div class="t-panel">
	<header class="t-panel__hd" v-on="click:toggle" v-text="title"></header>
	<div class="t-panel__bd" v-el="panel" v-show="show" v-transition="toggle">
		<div class="t-panel__bd--ct">
			<content></content>	
		</div>
	</div>
</div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			height : ''
		}
	},
	props : {
		type : {
			type : String,
			default : 'normal' // normal || fold
		},
		show : {
			type : Boolean,
			default : true
		},
		title : {
			type : String
		}
	},
	//get target height
	ready : function(){
		this.init();
	},
	methods : {
		toggle : function(){
			if (this.type !== 'normal') {
				this.show = !this.show;
				this.$dispatch('toggle', this); //send event for accordion
			}
		},
		//if type is normal, body is open
		init : function(){
			if (this.type === 'normal') {
				this.show = true;
			} else {
				var target = this.$$.panel;

				target.style.display = 'block';
				target.style.height = target.getBoundingClientRect().height + 'px';
				if (!this.show) target.style.display = 'none';
			}
		}
	}
}
</script>
