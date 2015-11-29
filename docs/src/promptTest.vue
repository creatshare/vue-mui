<template>
<div class="info__bd" id="m-modal-prompt">
	<a href="#m-modal-prompt" data-scroll><h2>Prompt</h2></a>
	<div class="info__demo">
		
		<a class="test-btn test-btn-blue" data-color="blue" @click.prevent="show=true">prompt</a>
		<prompt :show.sync="show"
			     :title="title" 
			     :content="content"></prompt>
	</div>
	<pre>
		<code class="language-markup">
			<script type="language-mark-up">
<prompt :show.sync="show"
        :title="title" 
        :content="content"></prompt>
			</script>
		</code>
	</pre>
	<pre>
		<code class="language-javascript">
var prompt = require('vue-mui').prompt;
// or //
import { prompt } from 'vue-mui'

new Vue({
	data() {
		return {
			show : false,
			title : 'This is title (optional)',
			content : 'This is content'
		}
	},
	components : {
		prompt
	},
	events : {
		confirm(val) {
			alert('你输入了' + val)
		},
		cancel() {
			alert('点击了取消')
		}
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
		<tr>
			<td>confirm</td>
			<td>Function</td>
			<td></td>
			<td>A callback Function when you click the modal confirm button</td>
		</tr>
		<tr>
			<td>cancel</td>
			<td>Function</td>
			<td></td>
			<td>A callback Function when you click the modal cancel button</td>
		</tr>

	</table>
</div>
</template>
<script>
import prompt from '../../src/components/prompt.vue'

export default {
	data() {
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		prompt
	},
	events : {
		confirm(val) {
			alert('你输入了' + val)
		},
		cancel() {
			alert('点击了取消')
		}
	}
}
</script>