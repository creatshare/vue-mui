<style lang="less">
@border-color: #eee;
@base-padding: 20px;
@s87 : rgba(0,0,0,.87);
@s54 : rgba(0,0,0,.54);
html,body{
	background-color: #252528;
}
.test-btn{
	display: block;
	width: 100px;
	height: 32px;
	line-height: 32px;
	margin: 10px;
	text-align: center;
	color: #fff;
	cursor: pointer;

	&-blue{
		background-color: #4c9cee;
	}
}
i{
    display: inline-block;
    padding: 3px 5px;
    margin: 0 3px;
    font-size: 12px;
    line-height: 12px;
    font-style: normal;
    border-radius: 3px;
    border: 1px solid #ccc;
    color: #DC5E5E;
	background-color: #ddd;
}
.hint{
	font-size: 14px;
    margin-top: 20px;
    line-height: 30px;
    color: @s54;
}
.info{
	width: 50%;
	margin: 0 auto;
	background-color: #fff;
	&__header{
		h1{
			padding: @base-padding;
			line-height: 38px;
			font-size: 30px;
			font-weight: 700;
			border-bottom: 1px solid @border-color;
		}
		p{
			color: @s54;
			padding: @base-padding;
		}
	}

	&__bd{
		padding: @base-padding;
		h2{
			font-weight: 700;
			font-size: 16px;
			line-height: 2;
		}
	}

	&__demo{
		border: 1px solid @border-color;

		&--show{
			padding: 10px 15px;
		}
	}

	&__opt{
		width: 100%;
		margin: 20px auto;
		border: 1px solid @border-color;
		font-size: 14px;

		tr{
			line-height: 32px;
		}

		tr+tr{
			border-top: 1px solid @border-color;
		}

		th{
			padding: 0 10px;
			color: @s87;
			font-weight: 700;
		}

		th+th,
		td+td{
			border-left: 1px solid @border-color;
		}
		td{
			padding: 0 10px;
			color: @s54;
		}
	}
}
@media screen and (max-width : 600px) {
	.info{
		width: auto;
		border: 0;
	}
	.aside,.menu{
		display: none;
	}
}
</style>

<template>
<aside></aside>
<menu></menu>
<div class="info">
	<div class="info__header" id="m-modal">
		<h1>Modal</h1>
		<p>模态框，用来模拟浏览器的<i>alert</i><i>confirm</i></p>
	</div>
	
	<alert></alert>

	<confirm></confirm>

	<prompt></prompt>



</div>
<div class="info">
	<div class="info__header" id="m-panel">
		<h1>Panel</h1>
		<p>面板，包含<i>普通面板</i><i>折叠面板</i>等。</p>
	</div>
	
	<panel></panel>
	<accordion></accordion>

</div>

<div class="info">
	<div class="info__header" id="m-btn">
		<h1>Button</h1>
		<p>一组按钮</p>
	</div>
	
	<btn></btn>

</div>

</template>

<script>
var dir = './test/';
var aside = require('./aside.vue');
var menu = require('./menu.vue');
var prismcss = require('./lib/prism.css')
var prismjs = require('./lib/prism.js'); //语法高亮

var alertTest = require(dir + 'alertTest.vue');
var confirmTest = require(dir + 'confirmTest.vue');
var promptTest = require(dir + 'promptTest.vue');
//panel
var panelTest = require(dir + 'panelTest.vue');
var accordionTest = require(dir + 'accordionTest.vue');
//button
var btnTest = require(dir + 'btnTest.vue');


module.exports = {
	components : {
		'aside' : aside,
		'menu' : menu,
		'alert' : alertTest,
		'confirm' : confirmTest,
		'prompt' : promptTest,
		'panel' : panelTest,
		'accordion' : accordionTest,
		'btn' : btnTest
	}
}
</script>