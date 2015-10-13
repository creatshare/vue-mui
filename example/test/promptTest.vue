<style lang="less">
	
</style>

<template>

<div class="info__bd" id="m-modal-prompt">
	<h2>Prompt</h2>
	<div class="info__demo">
		
		<a class="test-btn test-btn-blue" v-on="click:show=true">prompt</a>
		<div class="t-dimmer" v-show="show"></div>
		<prompt show="{{@show}}" title="{{title}}" content="{{content}}" on-confirm="{{onConfirm}}" on-cancel="{{onCancel}}"></prompt>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<div class="t-dimmer" v-show="show"></div>
<prompt show="{{@show}}" 
		title="{{title}}" 
		content="{{content}}" 
		on-confirm="{{onConfirm}}" 
		on-cancel="{{onCancel}}"></prompt>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Prompt = require('components/prompt.vue');

new Vue({
	data : function(){
		return {
			show : false,
			title : 'This is title (optional)',
			content : 'This is content'
		}
	},
	components : {
		'prompt' : Prompt
	},
	methods : {
		onConfirm : function(data){
			...code...
		},
		onCancel : function(){
			alert('Clicked the cancel button')
		}
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
			<th width="300">description</th>
		</tr>
		<tr>
			<td>show</td>
			<td>Boolean</td>
			<td>false</td>
			<td>Whether to show this component</td>
		</tr>
		<tr>
			<td>title</td>
			<td>String</td>
			<td></td>
			<td><i>(optional)</i> Title of component</td>
		</tr>
		<tr>
			<td>content</td>
			<td>String</td>
			<td></td>
			<td>Content of component</td>
		</tr>
		<tr>
			<td>on-confirm</td>
			<td>Function</td>
			<td></td>
			<td><p>A callback Function when you click the modal confirm button</p></td>
		</tr>
		<tr>
			<td>on-cancel</td>
			<td>Function</td>
			<td></td>
			<td><p>A callback Function when you click the modal cancel button</p></td>
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