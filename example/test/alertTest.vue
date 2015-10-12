<style lang="less">
.test-btn-alert{
	background-color: #4c9cee;
}
</style>

<template>
<div class="info__bd" id="m-modal-alert">
	<h2>模拟Alert</h2>
	<div class="info__demo">
		
		<a class="test-btn test-btn-alert" v-on="click:show=true">alert</a>
		<div class="t-dimmer" v-show="show"></div>
		<alert show="{{@show}}" title="{{title}}" content="{{content}}"></alert>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<div class="t-dimmer" v-show="show"></div>
<alert show="{{@show}}" 
   title="{{title}}" 
   content="{{content}}"></alert>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Alert = require(components/alert.vue');

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'alert' : Alert
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
			<td>show</td>
			<td>Boolean</td>
			<td>是否显示组件</td>
		</tr>
		<tr>
			<td>title</td>
			<td>String（可选）</td>
			<td>alert 标题</td>
		</tr>
		<tr>
			<td>content</td>
			<td>String</td>
			<td>alert 内容</td>
		</tr>
	</table>
</div>

</template>

<script>
var Alert = require('../../components/alert.vue');

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'alert' : Alert
	}
}
</script>