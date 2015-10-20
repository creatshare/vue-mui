<template>

<div class="info__bd" id="m-btn-hamburger">
	<h2>Hamburger</h2>
	<div class="info__demo">
		<div class="info__demo--show">
			<hamburger></hamburger>
		</div>
		
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<hamburger></hamburger>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Hamburger = require('components/hamburger.vue');

new Vue({
	components : {
		'hamburger' : Hamburger
	}
})
			</code>
		</pre>
	</div>
</div>

</template>

<script>
var Hamburger = require('../../components/hamburger.vue');

module.exports = {
	components : {
		'hamburger' : Hamburger
	}
}
</script>