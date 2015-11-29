<template>
<div class="info__bd" id="m-progress-bar">
	<a href="#m-progress-bar" data-scroll><h2>Progress bar</h2></a>
	<div class="info__demo">
		
		<a class="test-btn test-btn-ilb test-btn-blue" @click.prevent="status='start'">Start</a>
		<a class="test-btn test-btn-ilb test-btn-green" @click.prevent="status='done'">Done</a>
		<a class="test-btn test-btn-ilb test-btn-black" @click.prevent="setNum">random</a>
		<progress :status="status" :num="num"></progress>
	</div>
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<progress :status="status" :num="num"></progress>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var progress = require('vue-mui').progress;
// or //
import { progress } from 'vue-mui'

new Vue({
	components : {
		'progress' : Progress
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
			<td>status</td>
			<td>String</td>
			<td>hide</td>
			<td>whether to show progress<i>hide</i><i>start</i><i>done</i></td>
		</tr>
		<tr>
			<td>num</td>
			<td>Number</td>
			<td>0</td>
			<td><i>(optional)</i></td>
		</tr>
		<tr>
			<td>color</td>
			<td>String</td>
			<td>#4c9cee</td>
			<td><i>(optional)</i></td>
		</tr>
	</table>
</div>
</template>

<script>
import progress from '../../src/components/progress.vue'

export default {
	data() {
		return {
			status : 'hide',
			num : 100
		}
	},
	components : {
		progress
	},
	methods : {
		setNum() {
			this.num = Math.floor(Math.random() * 100)
		}
	}
}
</script>