<style lang="less">
.test-btn-bar{
	&:first-child{
		background-color: #4c9cee;
	}
	&:nth-child(2){
		background-color: #4c9;
	}
	&:nth-child(3){
		background-color: #333;
	}
}	
</style>

<template>
<div class="info__bd" id="m-progress-bar">
	<h2>Progress bar</h2>
	<div class="info__demo">
		
		<a class="test-btn test-btn-ilb test-btn-bar" v-on="click:status='start'">Start</a>
		<a class="test-btn test-btn-ilb test-btn-bar" v-on="click:status='done'">Done</a>
		<a class="test-btn test-btn-ilb test-btn-bar" v-on="click:setNum">random</a>
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
var Progress = require('../../components/progress.vue');
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
			<th>名称</th>
			<th>类型</th>
			<th>说明</th>
		</tr>
		<tr>
			<td>status</td>
			<td>String</td>
			<td>进度条状态 <i>hide</i><i>start</i><i>done</i><br/>默认<i>hide</i></td>
		</tr>
		<tr>
			<td>num</td>
			<td>Number</td>
			<td>进度条的进度<i>可选</i></td>
		</tr>
	</table>

	<div class="hint"><i>说明:</i>直接更改status属性便可触发进度条</div>

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