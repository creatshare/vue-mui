<template>
<div class="info__bd" id="m-panel-accordion">
	<a href="#m-panel-accordion" data-scroll><h2>accordion</h2></a>
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
var Panel = require('vue-mui').Panel;
var Accordion = require('vue-mui').Accordion;

new Vue({
	components : {
		'panel' : Panel,
		'accordion' : Accordion
	}
})	
			</code>
		</pre>
	</div>
	
	<div class="hint"><i>notice:</i>must import 'panel' component</div>

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