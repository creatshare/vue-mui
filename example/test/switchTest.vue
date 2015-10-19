<template>

<div class="info__bd" id="m-btn-switch">
	<h2>Switch</h2>
	<div class="info__demo">
		<div class="info__demo--show">
			<switch status="{{@status}}" callback="{{toggle}}"></switch>
		</div>
		
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<switch status="{{@status}}" 
		callback="{{toggle}}">
</switch>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Switch = require('components/switch.vue');

new Vue({
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
		<tr>
			<td>callback</td>
			<td>Function</td>
			<td></td>
			<td>A callback Function when you click</td>
		</tr>
	</table>
</div>

</template>

<script>
var Switch = require('../../components/switch.vue');

module.exports = {
	data : function(){
		return {
			status : true
		}
	},
	components : {
		'switch' : Switch
	},
	methods : {
		toggle : function(val){
			console.log(val)
		}
	}
}
</script>