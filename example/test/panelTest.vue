<style lang="less">
.demo-pannel+.demo-pannel{
	margin-top: 10px;
}
</style>

<template>
<div class="info__bd" id="m-panel-panel">
	<h2>panel</h2>
	<div class="info__demo">
		<div class="info__demo--show">
			<div class="demo-pannel">
				<!-- 演示 普通面板 -->
				<panel show="false" title="普通面板">
					<div>测试一下</div>
				</panel>
			</div>
			<div class="demo-pannel">
				<!-- 演示 折叠面板 -->
				<panel show="false" title="折叠面板" type="fold">
					<div>测试一下</div>
				</panel>
			</div>
		</div>
		<!-- code -->
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<panel type="normal" title="title">
	...code...
</panel>				
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Panel = require('../../components/pannel.vue');

new Vue({
	components : {
		'panel' : Panel
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
			<td>type</td>
			<td>String</td>
			<td>面板类型<i>可选</i>默认值为normal<br/>normal-默认面板<br/>fold-折叠面板</td>
		</tr>
		<tr>
			<td>title</td>
			<td>String</td>
			<td>面板标题</td>
		</tr>
	</table>
	<p><i>说明:</i>正文内容可添加在<i>panel</i>标签内</p>

</div>
</template>

<script>
var Panel = require('../../components/pannel.vue');

module.exports = {
	components : {
		'panel' : Panel
	}
}
</script>