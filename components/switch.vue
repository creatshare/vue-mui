<template>
<div class="t-switch" v-class="open:status" v-on="click:status=!status">
	<div class="t-switch__btn"></div>
</div>	
</template>

<script>
module.exports = {
	props : {
		status : {
			type : Boolean,
			default : false,
			toWay : true
		},
		callback : {
			type : Function
		}
	},
	watch : {
		'status' : function(){
			this.callback(this.status);
		}
	}
}
</script>