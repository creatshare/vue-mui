<style lang="less">
.demo-pannel+.demo-pannel{
	margin-top: 10px;
}
</style>

<template>
<div class="info__bd" id="m-panel-panel">
	<a href="#m-panel-panel" data-scroll><h2>Panel</h2></a>
	<div class="info__demo">
		<div class="info__demo--show">
			<div class="demo-pannel">
				<!-- 演示 普通面板 -->
				<panel show="false" title="default panel">
					<div>
						<p>The most distant way in the world</p>
						<p>is not the way from birth to the end</p>
					</div>
				</panel>
			</div>
			<div class="demo-pannel">
				<!-- 演示 折叠面板 -->
				<panel show="false" title="folding panel" type="fold">
					<div>
						<p>The most distant way in the world</p>
						<p>is not the way from birth to the end</p>
					</div>
				</panel>
			</div>
		</div>
		<!-- code -->
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<panel type="normal" title="title">
	<div>
		<p>The most distant way in the world</p>
		<p>is not the way from birth to the end</p>
	</div>
</panel>				
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Panel = require('vue-mui').Panel;

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
			<th>Name</th>
			<th>type</th>
			<th>default</th>
			<th>description</th>
		</tr>
		<tr>
			<td>type</td>
			<td>String</td>
			<td>normal</td>
			<td>
				<p>type of panel <i>optional</i></p>
				<p>normal : normal panel</p>
				<p>flod : folding panel</p>
			</td>
		</tr>
		<tr>
			<td>title</td>
			<td>String</td>
			<td></td>
			<td>Title of this component</td>
		</tr>
	</table>

</div>
</template>

<script>
var Panel = require('../../components/panel.vue');

module.exports = {
	components : {
		'panel' : Panel
	}
}
</script>