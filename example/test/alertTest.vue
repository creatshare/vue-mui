<template>
<div class="info__bd" id="m-modal-alert">
	<a href="#m-modal-alert" data-scroll><h2>Alert</h2></a>
	<p class="info__bd--hint">A rendered 'alert' with title, content, and set of actions in the footer.</p>
	<div class="info__demo">
		
		<a class="test-btn test-btn-blue" data-color="blue" v-on="click:show=true">alert</a>
		<alert show="{{@show}}" title="{{title}}" content="{{content}}"></alert>
	</div>
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
var Alert = require('vue-mui').Alert;

new Vue({
	data : function(){
		return {
			show : false,
			title : 'This is title',
			content : 'This is content'
		}
	},
	components : {
		'alert' : Alert
	}
})
		</code>
	</pre>

	<table class="info__opt">
		<tr>
			<th>Name</th>
			<th>type</th>
			<th>default</th>
			<th>description</th>
		</tr>
		<tr>
			<td>show</td>
			<td>Boolean</td>
			<td><i>false</i></td>
			<td>Whether to show this component</td>
		</tr>
		<tr>
			<td>title</td>
			<td>String</td>
			<td></td>
			<td><i>(optional)</i>Title of component</td>
		</tr>
		<tr>
			<td>content</td>
			<td>String</td>
			<td></td>
			<td>Content of component</td>
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