<template>
<div class="info__bd" id="m-panel-accordion">
	<a href="#m-panel-accordion" data-scroll><h2>accordion</h2></a>
	<div class="info__demo">
		<!-- accordion -->
		<accordion>
			<panel type="fold" title="Title 1">
				<div>Test Content 1</div>
			</panel>
			<panel type="fold" title="Title 2" :show="false">
				<div>Test Content 2</div>
			</panel>
			<panel type="fold" title="Title 3" :show="false">
				<div>Test Content 3</div>
			</panel>
			<panel type="fold" title="Title 4" :show="false">
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
	<panel type="fold" title="Title 2" :show="false">
		<div>Test Content 2</div>
	</panel>
	<panel type="fold" title="Title 3" :show="false">
		<div>Test Content 3</div>
	</panel>
	<panel type="fold" title="Title 4" :show="false">
		<div>Test Content 4</div>
	</panel>
</accordion>		
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var panel = require('vue-mui').panel;
var accordion = require('vue-mui').accordion;
// or //
import { panel } from 'vue-mui'
import { accordion } from 'vue-mui'

new Vue({
	components : {
		panel,
		accordion
	}
})	
			</code>
		</pre>
	
	<div class="hint"><i>notice:</i>must import 'panel' component</div>

</div>
</template>

<script>
import panel from '../../src/components/panel.vue'
import accordion from '../../src/components/accordion.vue'

export default {
	components : {
		panel,
		accordion
	}
}
</script>