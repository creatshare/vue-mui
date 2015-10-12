<style lang="less">
.t-accordion{
	.t-panel+.t-panel{
		border-top: 0;
	}
}
</style>

<template>
<div class="t-accordion">
	<content></content>
</div>
</template>

<script>
module.exports = {
	ready : function(){
		this.init();
		this.listen();
	},
	methods : {
		//just first child show
		init : function(){
			this.$children.forEach(function(x, i){
				if (i > 0) {
					x.show = false;
				}
			})
		},
		listen : function(){
			var that = this;
			that.$on('toggle', function(child){
				that.$children.forEach(function(x){
					if (child !== x) {
						x.show = false;
					}
				})
			})
		}
	}
}
</script>