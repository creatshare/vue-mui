<template>
<div class="info__bd" id="m-btn-btn">
	<a href="#m-btn-btn" data-scroll><h2>botton</h2></a>
	<div class="info__demo">
		
		<div class="info__demo--show">		
			<btn type="normal" :cb="test">button 1</btn>
		</div>
		<div class="info__demo--show">
			<btn type="warn" :cb="test2">button 2</btn>
		</div>
		<div class="info__demo--show">
			<btn>button 3</btn>
		</div>
	</div>
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<btn type="normal" :cb="callback">button 1</btn>
<btn type="warn" :cb="callback2">button 2</btn>
<btn>button 3</btn>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var btn = require('vue-mui').btn;
// or //
import { btn } from 'vue-mui'

new Vue({
	components : {
		btn
	},
	methods : {
		callback : function(){
			....code....
		}
	}
})
			</code>
		</pre>

	<table class="info__opt">
		<tr>
			<th>Name</th>
			<th>type</th>
			<th width="350">description</th>
		</tr>
		<tr>
			<td>type</td>
			<td>String</td>
			<td>Type of button <i>normal</i><i>warn</i><i>default</i></td>
		</tr>
		<tr>
			<td>callback</td>
			<td>Function</td>
			<td><p>A callback Function when you click the button component</p></td>
		</tr>
	</table>
</div>
</template>

<script>
import btn from '../../src/components/btn.vue'

export default {
	components : {
		btn
	},
	methods : {
		test() {
			alert('Click normal button')
		},
		test2() {
			alert('Click warn button')
		}
	}
}
</script>