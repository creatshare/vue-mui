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
	border-radius: 3px;
	font-size: 12px;

	&-blue{
		background-color: #4c9cee;
	}

	&-ilb{
		display: inline-block;
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
	font-size: 12px;
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
			font-size:14px;
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

		&--hint{
			margin-bottom: 10px;
			line-height: 1.5;
			font-size: 12px;
			color: @s54;
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
		font-size: 12px;

		tr{
			line-height: 40px;
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

			p{
				line-height: 2;
			}
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
		<h1>Modals</h1>
		<p>Modals for the browser. <i>alert</i><i>confirm</i><i>prompt</i></p>
	</div>
	
	<alert></alert>

	<confirm></confirm>

	<prompt></prompt>

	<actions></actions>
</div>
<div class="info">
	<div class="info__header" id="m-panel">
		<h1>Panels</h1>
		<p>include<i>default panel</i><i>folding panel</i></p>
	</div>
	
	<panel></panel>
	<accordion></accordion>

</div>

<div class="info">
	<div class="info__header" id="m-btn">
		<h1>Buttons</h1>
	</div>
	
	<btn></btn>

	<switch></switch>

	<hamburger></hamburger>

</div>

<div class="info">
	<div class="info__header" id="m-progress">
		<h1>Progress</h1>
	</div>
	
	<progress></progress>


</div>

<div class="info">
	<div class="info__header" id="m-aside">
		<h1>Aside</h1>
	</div>
	
	<sidebar></sidebar>


</div>

</template>

<script>
var dir = './test/';
var aside = require('./aside.vue'),
	menu = require('./menu.vue'),
	prismcss = require('./lib/prism.css'),
	prismjs = require('./lib/prism.js'); //语法高亮

var alertTest = require(dir + 'alertTest.vue'),
	confirmTest = require(dir + 'confirmTest.vue'),
	promptTest = require(dir + 'promptTest.vue'),
	actionsTest = require(dir + 'actionsTest.vue');
//panel
var panelTest = require(dir + 'panelTest.vue'),
	accordionTest = require(dir + 'accordionTest.vue');
//button
var btnTest = require(dir + 'btnTest.vue'),
	switchTest = require(dir + 'switchTest.vue'),
	hamburgerTest = require(dir + 'hamburgerTest.vue');
//progress
var progressTest = require(dir + 'progressTest.vue');
//aside
var sidebarTest = require(dir + 'sidebarTest.vue');


module.exports = {
	components : {
		'aside' : aside,
		'menu' : menu,
		'alert' : alertTest,
		'confirm' : confirmTest,
		'prompt' : promptTest,
		'actions' : actionsTest,
		'panel' : panelTest,
		'accordion' : accordionTest,
		'btn' : btnTest,
		'switch' : switchTest,
		'hamburger' : hamburgerTest,
		'progress' : progressTest,
		'sidebar' : sidebarTest
	}
}
</script>