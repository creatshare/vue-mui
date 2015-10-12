<style lang="less">
	
</style>

<template>
<a class="t-btn" v-class="'t-btn--'+type" v-on="click:onClick">button</a>
</template>

<script>
module.exports = {
	props : {
		type : {
			type : String,
			default : 'normal'
		},
		onClick : {
			type : Function
		}
	}
}
</script>