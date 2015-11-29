<template>
<div class="info__bd" id="m-btn-switch">
	<a href="#m-btn-switch" data-scroll><h2>Switch <span style="color:#4c9;" v-text="msg"></span></h2></a>
	<div class="info__demo">
		<div class="info__demo--show">
			<switchbtn :status.sync="status"></switchbtn>
		</div>
	</div>
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<switchbtn :status.sync="status"></switchbtn>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var switchbtn = require('vue-mui').switchbtn;
// or //
import { switchbtn } from 'vue-mui'

new Vue({
	data() {
		return {
			status : false
		}
	},
	watch : {
		status(val) {
			...
		}
	},
	components : {
		switchbtn
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
			<td>Boolean</td>
			<td><i>false</i></td>
			<td>is switch checked, true or false</td>
		</tr>
	</table>
</div>

</template>

<script>
import switchbtn from '../../src/components/switch.vue'

export default {
	data() {
		return {
			status : false,
			msg : 'close'
		}
	},
	components : {
		switchbtn
	},
	watch : {
		status(val) {
			this.msg = val ? 'open' : 'close'
		}
	}
}
</script>