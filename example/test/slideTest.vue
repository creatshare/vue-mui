<style lang="less">
#demo-slide-warn{
	display: none;
	color: #f92672;
}
@media screen and (min-width : 1000px) {
	#demo-slide-warn{
		display: block;
	}
	#demo-slide{
		display: none;
	}
}
</style>

<template>
<div class="info__bd" id="m-slide-slider">
	<h2>slide</h2>
	<p class="info__bd--hint" id="demo-slide-warn">Touch events only, you can be tested on the your mobile phone</p>
	<div class="info__demo">
		<div class="info__demo--show" id="demo-slide">
			<slide list="{{list}}"></slide>
		</div>
		<!-- code -->
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<slide list="{{list}}"></slide>				
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Slide = require('components/slide.vue');

new Vue({
	data : function(){
		return {
			list : [{
				img : 'http://7u2iwk.com2.z0.glb.qiniucdn.com/banner5.png',
				link : 'http://mui.yaobieting.com'
			},{
				img : 'http://7u2iwk.com2.z0.glb.qiniucdn.com/banner6.jpg',
				link : 'http://mui.yaobieting.com'
			},{
				img : 'http://7u2iwk.com2.z0.glb.qiniucdn.com/banner1.jpg',
				link : 'http://mui.yaobieting.com'
			}]
		}
	},
	components : {
		'slide' : Slide
	}
})			
			</code>
		</pre>
	</div>
	
	<table class="info__opt">
		<tr>
			<th>Name</th>
			<th>type</th>
			<th>default</th>
			<th>description</th>
		</tr>
		<tr>
			<td>list</td>
			<td>array</td>
			<td></td>
			<td>
				<p>pictures url set</p>
			</td>
		</tr>
	</table>

</div>
</template>

<script>
var Slide = require('../../components/slide.vue');

module.exports = {
	data : function(){
		return {
			list : [{
				img : 'http://7u2iwk.com2.z0.glb.qiniucdn.com/banner5.png',
				link : 'http://www.baidu.com'
			},{
				img : 'http://7u2iwk.com2.z0.glb.qiniucdn.com/banner6.jpg',
				link : 'http://www.baidu.com'
			},{
				img : 'http://7u2iwk.com2.z0.glb.qiniucdn.com/banner1.jpg',
				link : 'http://www.baidu.com'
			}]
		}
	},
	components : {
		'slide' : Slide
	}
}
</script>