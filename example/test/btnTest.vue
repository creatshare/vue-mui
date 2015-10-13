<style>
	
</style>

<template>
<div class="info__bd" id="m-btn-btn">
	<h2>botton</h2>
	<div class="info__demo">
		
		<div class="info__demo--show">		
			<btn on-click="{{handle}}" opt="Click normal button"></btn>
		</div>
		<div class="info__demo--show">
			<btn type="warn" on-click="{{handle}}"></btn>
		</div>
		<div class="info__demo--show">
			<btn type="default" on-click="{{handle}}"></btn>
		</div>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<btn></btn>
<btn type="warn"></btn>
<btn type="default" on-click="callback" opt="test"></btn>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Btn = require(components/btn.vue');

module.exports = {
	components : {
		'btn' : Btn
	},
	methods : {
		callback : function(){
			....code....
		}
	}
}
			</code>
		</pre>
	</div>

	<table class="info__opt">
		<tr>
			<th>名称</th>
			<th>类型</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>type</td>
			<td>String</td>
			<td>按钮类型 <i>normal</i><i>warn</i><i>default</i></td>
		</tr>
		<tr>
			<td>onClick</td>
			<td>Function</td>
			<td>按钮点击后执行的函数</td>
		</tr>
		<tr>
			<td>opt</td>
			<td>任意类型</td>
			<td>回调函数的参数<i>可选</i></td>
		</tr>
	</table>
</div>
</template>

<script>
var Btn = require('../../components/button.vue');

module.exports = {
	components : {
		'btn' : Btn
	},
	methods : {
		handle : function(data){
			if (data) {
				alert(data);
			}
		}
	}
}
</script>