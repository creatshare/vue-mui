<template>
<div class="info__bd" id="m-modal-confirm">
	<a href="#m-modal-confirm" data-scroll><h2>Actions</h2></a>
	<p class="info__bd--hint">simulate IOS action list</p>
	<div class="info__demo">
		
		<a class="test-btn test-btn-blue" data-color="blue" @click.prevent="show=true">actions</a>
		<actions :show.sync="show" title="标题">
			<li @click="test(1)">alert 1</li>
			<li @click="test(2)">alert 2</li>
		</actions>
	</div>
	<pre>
		<code class="language-markup">
			<script type="language-mark-up">
<actions :show.sync="show" 
		 title="标题">
	<li @click="test(1)">alert 1</li>
	<li @click="test(2)">alert 2</li>
</actions>
			</script>
		</code>
	</pre>
	<pre>
		<code class="language-javascript">
var actions = require('vue-mui').actions;
// or //
import { actions } from 'vue-mui'

new Vue({
	data() {
		return {
			show : false
		}
	},
	components : {
		actions
	},
	methods : {
		test(data) {
			alert(data)
			this.show = false
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

	</table>
</div>
</template>
<script>
import actions from '../../src/components/actions.vue'

export default {
	data() {
		return {
			show : false
		}
	},
	components : {
		actions
	},
	methods : {
		test(data) {
			alert(data)
			this.show = false
		}
	}
}
</script>