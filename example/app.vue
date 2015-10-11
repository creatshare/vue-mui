<style lang="less">
.test-btn{
	display: block;
	height: 44px;
	line-height: 44px;
	margin: 10px;
	text-align: center;
	color: #fff;
}
</style>

<template>
<alert></alert>
<confirm></confirm>
</template>

<script>
var dir = './test/';
var alertTest = require(dir + 'alertTest.vue');
var confirmTest = require(dir + 'confirmTest.vue');

module.exports = {
	components : {
		'alert' : alertTest,
		'confirm' : confirmTest
	}
}
</script>