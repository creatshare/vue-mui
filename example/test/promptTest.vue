<style lang="less">
	
</style>

<template>

<div class="info__bd" id="m-modal-prompt">
	<h2>模拟Prompt</h2>
	<div class="info__demo">
		
		<a class="test-btn test-btn-blue" v-on="click:show=true">prompt</a>
		<div class="t-dimmer" v-show="show"></div>
		<prompt show="{{@show}}" title="{{title}}" content="{{content}}" on-confirm="{{onConfirm}}" on-cancel="{{onCancel}}"></prompt>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<div class="t-dimmer" v-show="show"></div>
<prompt show="{{@show}}" title="{{title}}" content="{{content}}" on-confirm="{{onConfirm}}" on-cancel="{{onCancel}}"></prompt>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Prompt = require('../../components/prompt.vue');

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'prompt' : Prompt
	},
	methods : {
		/**
		 * [点击确定之后的回调]
		 * @return {[type]} [description]
		 */
		onConfirm : function(data){
			alert('你输入了' + data)
		},
		/**
		 * [点击取消之后的回调]
		 * @return {[type]} [description]
		 */
		onCancel : function(){
			alert('点击了取消')
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
			<td>show</td>
			<td>Boolean</td>
			<td>是否显示组件</td>
		</tr>
		<tr>
			<td>title</td>
			<td>String（可选）</td>
			<td>prompt 标题</td>
		</tr>
		<tr>
			<td>content</td>
			<td>String</td>
			<td>prompt 内容</td>
		</tr>
		<tr>
			<td>on-confirm</td>
			<td>Function</td>
			<td>点击确定之后的回调函数<br/>该函数接收一个<i>参数</i>,接收的<i>参数</i>为输入内容</td>
		</tr>
		<tr>
			<td>on-cancel</td>
			<td>Function</td>
			<td>点击取消之后的回调函数</td>
		</tr>
	</table>

</div>


</template>

<script>
var Prompt = require('../../components/prompt.vue');

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'prompt' : Prompt
	},
	methods : {
		/**
		 * [点击确定之后的回调]
		 * @return {[type]} [description]
		 */
		onConfirm : function(data){
			alert('你输入了' + data)
		},
		/**
		 * [点击取消之后的回调]
		 * @return {[type]} [description]
		 */
		onCancel : function(){
			alert('点击了取消')
		}
	}
}
</script>