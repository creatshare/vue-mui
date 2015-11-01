<template>
<ul class="t-hamburger" v-class="open:status" v-on="click:status=!status">
  <li></li>
</ul>
</template>

<script>
module.exports = {
	props : {
		status: {
			type : Boolean,
			default : false,
			twoWay : true
		}
	}
}
</script>