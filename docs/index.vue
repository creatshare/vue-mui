<style lang="less">
@border-color: #eee;
@color-green : #4c9;
@color-blue : #4c9cee;
@color-black : #333;
@color-gray: #ddd;
@base-padding: 20px;
@s87 : rgba(0,0,0,.87);
@s54 : rgba(0,0,0,.54);
html,body{
	background-color: #eee;
	-webkit-font-smoothing: antialiased;
}
.test-btn{
	display: block;
	width: 100px;
	height: 32px;
	line-height: 32px;
	margin-right: 10px;
	margin-bottom: 10px;
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
    color: #f92672;
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
	border-left: 1px solid @color-gray;
	border-right: 1px solid @color-gray;
	box-shadow: 0px 0px 1px @color-gray;
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
#back-top{
	display: block;
	width: 40px;
	height: 40px;
	position: fixed;
	right: 80px;
	bottom: 40px;
	background: url(http://mui.yaobieting.com/src/images/back.png) no-repeat center center;
	background-size: 100%;
}
.backtop-transition{
	-webkit-transition: transform .3s ease;
	transition: transform .3s ease;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
}
.backtop-enter,
.backtop-leave{
	-webkit-transform: translate3d(0, 80px, 0);
	transform: translate3d(0, 80px, 0);
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
<asidebox></asidebox>
<menubox :act.sync="id"></menubox>

<div class="main">
	<div class="info">
		<div class="info__header" id="m-modal">
			<a href="#m-modal" data-scroll><h1>Modal</h1></a>
			<p>A set of modal window appearance effects with IOS style. <i>alert</i><i>confirm</i><i>prompt</i></p>
		</div>

		<!-- alert start -->
		<alert></alert>
		<!-- alert end -->

		<!-- confirm start -->
		<confirm></confirm>
		<!-- confirm end -->

		<!-- prompt start -->
		<prompt></prompt>
		<!-- prompt end -->

		<!-- actions start -->
		<actions></actions>
		<!-- actions end -->

	</div>

	<div class="info">
		<div class="info__header" id="m-panel">
			<a href="#m-panel" data-scroll><h1>Panels</h1></a>
			<p>include<i>default panel</i><i>folding panel</i></p>
		</div>
		
		<!-- panel start -->
		<panel></panel>
		<!-- panel end -->

		<!-- accordion start -->
		<accordion></accordion>
		<!-- accordion end -->
	
		<!-- tabpanel start -->
		<tabpanel></tabpanel>
		<!-- tabpanel end -->

	</div>

	<div class="info">
		<div class="info__header" id="m-btn">
			<a href="#m-btn" data-scroll><h1>Buttons</h1></a>
		</div>
		
		<btn></btn>

		<sbtn></sbtn>

	</div>

	<div class="info">
		<div class="info__header" id="m-progress">
			<a href="#m-progress" data-scroll><h1>Progress</h1></a>
		</div>
		
		<progress></progress>

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
		
		<menubar></menubar>

	</div>

</div>
<a href="#m-modal" data-scroll id="back-top" v-show="back" transition="backtop"></a>
</template>
<script>
import asidebox from './aside.vue'
import menubox 	from './menu.vue'

import alert 	from './src/alertTest.vue'
import confirm  from './src/confirmTest.vue'
import prompt  	from './src/promptTest.vue'
import actions 	from './src/actionsTest.vue'
//panel
import panel 	from './src/panelTest.vue'
import accordion from './src/accordionTest.vue'
import tabpanel from './src/tabPanelTest.vue'
//btn
import btn from './src/btnTest.vue'
import sbtn from './src/switchTest.vue'
//progress
import progress from './src/progressTest.vue'
//slide
import slide from './src/slideTest.vue'
//menu
import menubar from './src/menuTest.vue'

export default {
	data() {
		return {
			id : 'm-modal',
			back : false
		}
	},
	components : {
		asidebox,
		menubox,
		alert,
		confirm,
		prompt,
		actions,
		panel,
		accordion,
		tabpanel,
		btn,
		sbtn,
		progress,
		slide,
		menubar
	},
	ready() {
		let that = this,
			d = document.documentElement,
			b = document.body,
			linkList,
			len;

		linkList = document.querySelectorAll('.main a[data-scroll]');
		len = linkList.length;
		console.log(linkList)
		window.addEventListener('scroll', function(){
			that.updateSidebar.apply(that, [d, b, linkList, len]);
		}, !1);
	},
	methods : {
		updateSidebar(d, b, linkList, len) {
			let top = d && d.scrollTop || b.scrollTop,
				last;
			top += 100;

			this.setBackTop(top);

			for (var i = 0; i < len; i++) {
				let link = linkList[i];
				if (link.offsetTop > top) {
					if (!last) last = link;
					break;
				} else {
					last = link;
				}
			}

			if (last) this.setActive(last.hash.substring(1));
		},
		setActive(id) {
			this.id = id;
		},
		/**
		 * [toggle back to top button]
		 * @param {[type]} top [description]
		 */
		setBackTop(top) {
			this.back = top > 500 ? true : false;
		}
	}
}
</script>