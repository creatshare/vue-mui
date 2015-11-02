<template>

<div class="info__bd" id="m-btn-switch">
	<h2>Switch <span style="color:#4c9;" v-text="msg"></span></h2>
	<div class="info__demo">
		<div class="info__demo--show">
			<switch status="{{@status}}" callback="{{toggle}}"></switch>
		</div>
		
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<switch status="{{@status}}"></switch>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Switch = require('components/switch.vue');

new Vue({
	data : function(){
		return {
			status : false
		}
	},
	watch : {
		'status' : function(val){
			...
		}
	},
	components : {
		'switch' : Switch
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
var Switch = require('../../components/switch.vue');

module.exports = {
	data : function(){
		return {
			status : false,
			msg : '关'
		}
	},
	components : {
		'switch' : Switch
	},
	watch : {
		'status' : function(val){
			this.msg = val ? '开' : '关';
		}
	}
}
</script>