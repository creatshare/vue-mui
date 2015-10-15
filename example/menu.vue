<style lang="less">
.menu{
	position: fixed;
	top: 0;
	left: 0;
	width: 200px;
	height: 100%;
	font-size: 12px;

	h2{
		padding: 20px 20px 0;
		color: #fff;
	}

	&__index{
		padding: 20px;

		&>li{
			margin-bottom: 10px;
			cursor: pointer;

			a{
				display: block;
	    		padding-left: 10px;
				color: #fff;
				border-left: 4px solid #4c9cee;
			}



		}	
	}

	&__children{
		padding: 10px 20px 0;
		li{
			margin-bottom: 10px;
			a{
				border-left: 2px solid #4c9;
			}
		}
	}
	
}
</style>

<template>
<div class="menu">
<h2>目录</h2>
<ul class="menu__index" v-el="menu">
	<li v-repeat="item : list">
		<a v-attr="href:'#m-'+item.id" v-on="click:toggle(item)" v-text="item.name"></a>

		<ul class="menu__index menu__children" v-show="item.show">
			<li v-repeat="its : item.children">
				<a href="#m-progress-bar" v-attr="href:'#m-'+item.id+'-'+its.id" v-text="its.name"></a>
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
					}
				]
			},{
				name : 'Button',
				id : 'btn',
				show : false,
				children : [{
						name : 'button',
						id : 'btn'
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
						name : 'aside',
						id : 'aside'
				}]
			}]
		}
	},
	methods : {
		toggle : function(that){
			that.show = !that.show;
			this.hide(that);
		},
		hide : function(target){
			this.list.forEach(function(x){
				if (target !== x) {
					x.show = false;
				}
			})
		}
	}
}
</script>