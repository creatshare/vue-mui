<style lang="less">
.menu{
	position: fixed;
	top: 0;
	left: 0;
	width: 200px;
	height: 100%;
	font-size: 14px;

	h2{
		padding: 20px 20px 0;
		color: #fff;
	}

	&__index{
		padding: 20px;

		&>li{
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
		padding: 10px 20px;
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
<ul class="menu__index">
	<li>
		<a href="#m-modal">Modal 组件</a>

		<ul class="menu__index menu__children">
			<li>
				<a href="#m-modal-alert">alert</a>
			</li>
			<li>
				<a href="#m-modal-confirm">confirm</a>
			</li>
			<li>
				<a href="#m-modal-prompt">prompt</a>
			</li>
		</ul>
	</li>
	<li>
		<a href="#m-panel">Panel 组件</a>

		<ul class="menu__index menu__children">
			<li>
				<a href="#m-panel-panel">panel</a>
			</li>
			<li>
				<a href="#m-panel-accordion">accordion</a>
			</li>
		</ul>
	</li>
</ul>
</div>
</template>

<script>
	
</script>