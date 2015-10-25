<template>
<section class="t-tab">
	<nav>
		<a href="javascript:;" v-repeat="its:list" v-text="its.title" v-class="current:index===$index" v-on="click:index=$index"></a>
	</nav>
	<div class="t-tab__bd" v-repeat="its:list" v-class="current:index===$index">
		<p v-text="its.content"></p>
	</div>
</section>
</template>

<script>
module.exports = {
	data : function(){
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