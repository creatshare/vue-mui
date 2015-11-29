<template>
<div class="t-switch" :class="{'open':status}"
					  @click="status=!status">
	<div class="t-switch__btn"></div>
</div>
</template>
<script>
export default {
	props : {
		status : {
			type : Boolean,
			default : false,
			toWay : true
		}
	}
}
</script>