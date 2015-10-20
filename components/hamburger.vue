<template>
<ul class="t-hamburger" v-class="open:status" v-on="click:status=!status">
  <li></li>
</ul>
</template>

<script>
module.exports = {
	data : function(){
		return {
			status : false
		}
	}
}
</script>