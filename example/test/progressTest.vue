<template>
<div class="info__bd" id="m-progress-bar">
	<a href="#m-progress-bar" data-scroll><h2>Progress bar</h2></a>
	<div class="info__demo">
		
		<a class="test-btn test-btn-ilb test-btn-blue" v-on="click:status='start'">Start</a>
		<a class="test-btn test-btn-ilb test-btn-green" v-on="click:status='done'">Done</a>
		<a class="test-btn test-btn-ilb test-btn-black" v-on="click:setNum">random</a>
		<progress status="{{status}}" num="{{num}}"></progress>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<progress status="{{status}}" num="{{num}}"></progress>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Progress = require('vue-mui').Progress;

new Vue({
	components : {
		'progress' : Progress
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
	</table>
</div>
</template>

<script>
var Progress = require('../../components/progress.vue');

module.exports = {
	data : function(){
		return {
			status : 'hide',
			num : 100
		}
	},
	components : {
		'progress' : Progress
	},
	methods : {
		setNum : function(){
			this.num = Math.floor(Math.random()*100);
		}
	}
}
</script>