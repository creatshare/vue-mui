<style lang="less">
@base-color: rgba(255,255,255,.54);
.aside{
	position: fixed;
	top: 50px;
	right: 10%;
	border: 1px solid @base-color;
	border-radius: 3px;

	&:before,
	&:after{
		position: absolute;
		top: -50px;
		left: 25%;
		display: block;
		content: '';
		height: 50px;
		border-left: 1px solid @base-color;
	}

	&:after{
		right: 25%;
		left: auto;
	}

	a{
		color: @base-color;
		display: block;
		line-height: 36px;
		margin: 10px;

		&:hover{
			color: rgba(255,255,255,1);
		}
	}

}
</style>

<template>
<div class="aside">
	<a href="/">Home</a>
	<a href="https://github.com/mennghao/vue-mui" target="_blank">Github</a>
	<a href="./dist/vue-mui-min.js">Download</a>
</div>
</template>

<script>
	
</script>