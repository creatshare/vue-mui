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

	&>&__index>li{
	    &>a{
	    	padding-left: 0;

	    	span{
	    		display: inline-block;
	    		vertical-align: middle;
	    	}
	    	

	    	&:before{
		    	content: '';
			    display: block;
			    width: 0;
			    height: 0;
			    margin-right: 10px;
			    border-left: 5px solid #888;
			    border-top: 5px solid transparent;
			    border-bottom: 5px solid transparent;
			    display: inline-block;
			    vertical-align: middle;
			    -webkit-transition: transform .2s linear;
			    transition: transform .2s linear;
		    }

		    &.open{
		    	&+ul{
		    		display: block;
		    	}
		    	&:before{
		    		-webkit-transform: rotate(90deg);
		    		transform: rotate(90deg);
		    	}
		    }
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
				color: #888;

				&:hover{
					color: @color-blue;
				}
			}



		}	
	}

	&__children{
		display: none;
		padding: 10px 20px 0;
		li{
			margin-bottom: 20px;
		}
	}
	
}
</style>

<template>
<div class="menu">
	<h2>
		<a href="http://mui.yaobieting.com/">vue-mui</a>
	</h2>
	<ul class="menu__index" v-el="menu">
		<li v-for="item in list">
		<a data-scroll :href="'#m-'+item.id" @click="toggle(item.id)" :class="{active:act==='m-'+item.id,open:index===item.id}"><span v-text="item.name"></span></a>

		<ul class="menu__index menu__children">
			<li v-for="its in item.children">
				<a data-scroll :href="'#m-'+item.id+'-'+its.id" v-text="its.name" :class="{active:act==='m-'+item.id+'-'+its.id}"></a>
			</li>
		</ul>
	</li>
	</ul>
</div>
</template>

<script>
export default {
	data() {
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
		act(val) {
			if (this.status) {
				let index;
				val = val.substring(2);
				index = val.indexOf('-');

				this.index = index < 0 ? val : val.substr(0, index);
			}
		}
	},
	methods : {
		toggle(id) {
			let that = this;
			that.index = id;
			that.status = false;

			clearTimeout(that.timer);

			that.timer = setTimeout(() => {
				that.status = true;
			}, 600)
		}
	}
}
</script>