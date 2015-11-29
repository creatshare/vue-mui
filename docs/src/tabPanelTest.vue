<template>
<div class="info__bd" id="m-panel-tab-panel">
	<a href="#m-panel-tab-panel" data-scroll><h2>tab-panel</h2></a>
	<div class="info__demo">
		<div class="info__demo--show">
			<div class="demo-pannel">
				<tabpanel :list="list"></tabpanel>
			</div>
		</div>
	</div>
		<!-- code -->
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<tabpanel :list="list"></tabpanel>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var tabpanel = require('vue-mui').tabpanel;
// or //
import { tabpanel } from 'vue-mui'

new Vue({
	data() {
		return {
			list : [{
				title : 'tab1',
				content : 'The most distant way in the world'
			},{
				title : 'tab2',
				content : 'is not the way from birth to the end'
			}]
		}
	},
	components : {
		tabpanel
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
			<td>list</td>
			<td>Array</td>
			<td></td>
			<td>
				<p>To render the list</p>
			</td>
		</tr>
	</table>

</div>
</template>

<script>
import tabpanel from '../../src/components/tabPanel.vue'

export default {
	data() {
		return {
			list : [{
				title : 'tab1',
				content : 'The most distant way in the world'
			},{
				title : 'tab2',
				content : 'is not the way from birth to the end'
			}]
		}
	},
	components : {
		tabpanel
	}
}
</script>