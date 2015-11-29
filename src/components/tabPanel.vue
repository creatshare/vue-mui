<style>
.t-tab__bd{
	display: block;
}
</style>
<template>
<section class="t-tab">
	<nav>
		<a v-for="its in list" v-text="its.title" :class="{'current':index===$index}" @click.prevent="index=$index"></a>
	</nav>
	<div class="t-tab__bd" v-for="its in list" v-show="index===$index">
		<p v-text="its.content"></p>
	</div>
</section>
</template>
<script>
export default {
	data() {
		return {
			index : 0
		}
	},
	props : {
		list : {
			type : Array
		}
	}
}
</script>