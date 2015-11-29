<style lang="less">
@base-color: #ddd;
.aside{
	position: fixed;
	top: 50px;
	right: 50px;
	width: 100px;
	border: 1px solid @base-color;
	border-radius: 3px;
	box-sizing: border-box;

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
		color: #888;
		display: block;
		line-height: 36px;
		margin: 10px;

		&:hover{
			color: #333;
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