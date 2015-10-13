

<template>
<div class="info__bd" id="m-panel-accordion">
	<h2>accordion</h2>
	<div class="info__demo">
		<div class="info__demo--show">
			<!-- accordion -->
			<accordion>
				<panel type="fold" title="Title 1">
					<div>Test Content 1</div>
				</panel>
				<panel type="fold" title="Title 2" show="false">
					<div>Test Content 2</div>
				</panel>
				<panel type="fold" title="Title 3" show="false">
					<div>Test Content 3</div>
				</panel>
				<panel type="fold" title="Title 4" show="false">
					<div>Test Content 4</div>
				</panel>
			</accordion>
		</div>
		<!-- code -->
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<accordion>
	<panel type="fold" title="Title 1">
		<div>Test Content 1</div>
	</panel>
	<panel type="fold" title="Title 2" show="false">
		<div>Test Content 2</div>
	</panel>
	<panel type="fold" title="Title 3" show="false">
		<div>Test Content 3</div>
	</panel>
	<panel type="fold" title="Title 4" show="false">
		<div>Test Content 4</div>
	</panel>
</accordion>			
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Panel = require('../../components/panel.vue');
var Accordion = require('../../components/accordion.vue');

module.exports = {
	components : {
		'panel' : Panel,
		'accordion' : Accordion
	}
}			
			</code>
		</pre>
	</div>
	
	<div class="hint"><i>说明:</i>accordion依赖panel组件,建议在创建时便将除第一个外的<i>panel</i>的<i>show</i>设置为false</div>

</div>
</template>

<script>
var Panel = require('../../components/panel.vue');
var Accordion = require('../../components/accordion.vue');

module.exports = {
	components : {
		'panel' : Panel,
		'accordion' : Accordion
	}
}
</script>