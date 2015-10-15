<style>
.ani-sidebar-transition{
	-webkit-transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.ani-sidebar-enter,
.ani-sidebar-leave{
	-webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
</style>

<template>
<div class="t-aside-dimmer" v-show="show" v-on="click:close($event)"></div>
<div class="t-aside" v-show="show" v-transition="ani-sidebar">
	<content></content>
</div>
</template>

<script>
module.exports = {
	props : {
		show : {
			type : Boolean,
			default : false
		}
	},
	methods : {
		close : function(e){
			var that = this;
			if (e.target.className === 't-aside-dimmer') {
				that.show = false;
			}
		}
	}

}
</script>