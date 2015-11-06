<style lang="less">
@border-color: #eee;
@color-green : #4c9;
@color-blue : #4c9cee;
@color-black : #333;
@base-padding: 20px;
@s87 : rgba(0,0,0,.87);
@s54 : rgba(0,0,0,.54);
html,body{
	background-color: #fff;
	-webkit-font-smoothing: antialiased;
}
.test-btn{
	display: block;
	width: 100px;
	height: 32px;
	line-height: 32px;
	margin-right: 10px;
	text-align: center;
	color: #fff;
	cursor: pointer;
	border-radius: 3px;
	font-size: 12px;

	&-blue{
		background-color: @color-blue;
	}

	&-green{
		background-color: @color-green;
	}

	&-black{
		background-color: @color-black;
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
    border: 1px solid #ddd;
    color: #DC5E5E;
	background-color: #eee;
}
.hint{
	font-size: 12px;
    margin-top: 20px;
    line-height: 30px;
    color: @s54;
}
.main{
	margin: 0 200px;
	border-right: 1px solid #ddd;
}
.info{
	background-color: #fff;

	a[data-scroll]{
		display: block;
		color: @s87;
	}
	&__header{
		h1{
			padding: @base-padding;
			line-height: 20px;
			font-size: 26px;
			font-weight: 700;
			border-bottom: 1px dashed @border-color;
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
			font-size: 14px;
			line-height: 2;
			margin-bottom: 10px;

			&:before{
				content: '#';
				color: @color-green;
				margin-right: 5px;
			}

			&:hover{
				color: @color-green;
			}
		}

		&--hint{
			margin-bottom: 10px;
			line-height: 1.5;
			font-size: 12px;
			color: @s54;
		}
	}

	&__demo{
		margin: 15px 0;

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
	.main{
		width: 100%;
		margin: 0;
	}
	.aside,.menu{
		display: none;
	}
}
</style>

<template>
<aside></aside>
<menu act="{{@id}}"></menu>
<div class="main">
	<div class="info">
		<div class="info__header" id="m-modal">
			<a href="#m-modal" data-scroll><h1>Modals</h1></a>
			<p>Modals for the browser. <i>alert</i><i>confirm</i><i>prompt</i></p>
		</div>
		
		<alert></alert>

		<confirm></confirm>

		<prompt></prompt>

		<actions></actions>
	</div>
	<div class="info">
		<div class="info__header" id="m-panel">
			<a href="#m-panel" data-scroll><h1>Panels</h1></a>
			<p>include<i>default panel</i><i>folding panel</i></p>
		</div>
		
		<panel></panel>

		<accordion></accordion>
		
		<tab-panel></tab-panel>

	</div>

	<div class="info">
		<div class="info__header" id="m-btn">
			<a href="#m-btn" data-scroll><h1>Buttons</h1></a>
		</div>
		
		<btn></btn>

		<switch></switch>

		<hamburger></hamburger>

	</div>

	<div class="info">
		<div class="info__header" id="m-progress">
			<a href="#m-progress" data-scroll><h1>Progress</h1></a>
		</div>
		
		<progress></progress>

	</div>

	<div class="info">
		<div class="info__header" id="m-aside">
			<a href="#m-aside" data-scroll><h1>Aside</h1></a>
		</div>
		
		<sidebar></sidebar>

	</div>

	<div class="info">
		<div class="info__header" id="m-slide">
			<a href="#m-slide" data-scroll><h1>Slide</h1></a>
		</div>
		
		<slide></slide>

	</div>

	<div class="info">
		<div class="info__header" id="m-menu">
			<a href="#m-menu" data-scroll><h1>Menu</h1></a>
		</div>
		
		<menulist></menulist>

	</div>
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
	accordionTest = require(dir + 'accordionTest.vue'),
	tabPanelTest = require(dir + 'tab-panelTest.vue');
//button
var btnTest = require(dir + 'btnTest.vue'),
	switchTest = require(dir + 'switchTest.vue'),
	hamburgerTest = require(dir + 'hamburgerTest.vue');
//progress
var progressTest = require(dir + 'progressTest.vue');
//aside
var sidebarTest = require(dir + 'sidebarTest.vue');
//slide
var slideTest = require(dir + 'slideTest.vue');
//menu
var menuTest = require(dir + 'menuTest.vue');


module.exports = {
	data : function(){
		return {
			id : 'm-modal'
		}
	},
	components : {
		'aside' : aside,
		'menu' : menu,
		'alert' : alertTest,
		'confirm' : confirmTest,
		'prompt' : promptTest,
		'actions' : actionsTest,
		'panel' : panelTest,
		'accordion' : accordionTest,
		'tab-panel' : tabPanelTest,
		'btn' : btnTest,
		'switch' : switchTest,
		'hamburger' : hamburgerTest,
		'progress' : progressTest,
		'sidebar' : sidebarTest,
		'slide' : slideTest,
		'menulist' : menuTest
	},
	ready : function(){
		var that = this,
			d = document.documentElement,
			b = document.body,
			linkList,
			len;

		linkList = document.querySelectorAll('.main a[data-scroll]');
		len = linkList.length;

		window.addEventListener('scroll', function(){
			that.updateSidebar.apply(that, [d, b, linkList, len]);
		}, !1);
	},
	methods : {
		updateSidebar : function(d, b, linkList, len){
			var top = d && d.scrollTop || b.scrollTop,
				last;
			top += 100;

			for (var i = 0; i < len; i++) {
				var link = linkList[i];
				if (link.offsetTop > top) {
					if (!last) last = link;
					break;
				} else {
					last = link;
				}
			}

			if (last) this.setActive(last.hash.substring(1));
		},
		setActive : function(id){
			this.id = id;
		}
	}
}
</script>