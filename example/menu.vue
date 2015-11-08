<style lang="less">
@border-color: #ddd;
@color-blue : #4c9cee;
.menu{
	position: fixed;
	top: 0;
	left: 0;
	width: 200px;
	height: 100%;
	font-size: 14px;
	border-right: 1px solid @border-color;

	a.active{
		color: @color-blue;
	}

	h2{
		height: 60px;
		text-indent: -1000px;
		border-bottom: 1px solid @border-color;
	    background: url(http://mui.yaobieting.com/src/images/logo.png) no-repeat center center;
    	background-size: auto 60%;

    	a{
    		display: block;
    		height: 60px;
    	}
	}

	&__index{
		padding: 20px;

		&>li{
			margin-bottom: 20px;
			cursor: pointer;

			a{
				display: block;
	    		padding-left: 10px;
				color: #333;

				&:hover{
					color: @color-blue;
				}
			}



		}	
	}

	&__children{
		padding: 10px 20px 0;
		li{
			margin-bottom: 20px;
		}
	}
	
}
</style>

<template>
<div class="menu">
<h2><a href="http://mui.yaobieting.com/">vue-mui</a></h2>
<ul class="menu__index" v-el="menu">
	<li v-repeat="item : list">
		<a data-scroll v-attr="href:'#m-'+item.id" v-on="click:toggle(item.id)" v-text="item.name" v-class="active:act==='m-'+item.id"></a>

		<ul class="menu__index menu__children" v-show="index===item.id">
			<li v-repeat="its : item.children">
				<a href="#m-progress-bar" data-scroll v-attr="href:'#m-'+item.id+'-'+its.id" v-text="its.name" v-class="active:act==='m-'+item.id+'-'+its.id"></a>
			</li>
		</ul>
	</li>
</ul>
</div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			index : 'modal',
			status : true,
			timer : null,
			list : [{
				name : 'Modal',
				id : 'modal',
				show : true,
				children : [{
						name : 'alert',
						id : 'alert'
					},{
						name : 'confirm',
						id : 'confirm'
					},{
						name : 'prompt',
						id : 'prompt'
					},{
						name : 'actions',
						id : 'actions'
					}
				]
			},{
				name : 'Panel',
				id : 'panel',
				show : false,
				children : [{
						name : 'panel',
						id : 'panel'
					},{
						name : 'accordion',
						id : 'accordion'
					},{
						name : 'tab-panel',
						id : 'tab-panel'
					}
				]
			},{
				name : 'Button',
				id : 'btn',
				show : false,
				children : [{
						name : 'button',
						id : 'btn'
					},{
						name : 'switch',
						id : 'switch'
					},{
						name : 'hamburger',
						id : 'hamburger'
					}
				]
			},{
				name : 'Progress',
				id : 'progress',
				show : false,
				children : [{
						name : 'progress bar',
						id : 'bar'
					}
				]
			},{
				name : 'Aside',
				id : 'aside',
				show : false,
				children : [{
						name : 'Sidebar',
						id : 'sidebar'
				}]
			},{
				name : 'Slide',
				id : 'slide',
				show : false,
				children : [{
						name : 'Slide',
						id : 'slide'
				}]
			},{
				name : 'Menu',
				id : 'menu',
				show : false,
				children : [{
						name : 'MenuList',
						id : 'menu'
				}]
			}]
		}
	},
	props : {
		act : {
			type : String
		}
	},
	watch : {
		'act' : function(val){
			if (this.status) {
				var index;
				val = val.substring(2);
				index = val.indexOf('-');

				this.index = index < 0 ? val : val.substr(0, index);
			}
		}
	},
	methods : {
		toggle : function(id){
			var that = this;
			that.index = id;
			that.status = false;

			clearTimeout(that.timer);

			that.timer = setTimeout(function(){
				that.status = true;
			}, 600)
		}
	}
}
</script>