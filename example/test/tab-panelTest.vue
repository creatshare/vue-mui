<style lang="less">
.demo-pannel+.demo-pannel{
	margin-top: 10px;
}
</style>

<template>
<div class="info__bd" id="m-panel-tab-panel">
	<h2>tab-panel</h2>
	<div class="info__demo">
		<div class="info__demo--show">
			<div class="demo-pannel">
				<!-- 演示 普通面板 -->
				<tab-panel list="{{list}}"></tab-panel>
			</div>
		</div>
		<!-- code -->
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<tab-panel list="{{list}}"></tab-panel>	
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Panel = require('components/tab-panel.vue');

new Vue({
	data : function(){
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
		'tab-panel' : Panel
	}
})				
			</code>
		</pre>
	</div>

</div>
</template>

<script>
var panel = require('../../components/tab-panel.vue');

module.exports = {
	data : function(){
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
		'tab-panel' : panel
	}
}
</script>