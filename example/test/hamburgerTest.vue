<template>
<div class="info__bd" id="m-btn-hamburger">
	<a href="#m-btn-hamburger" data-scroll><h2>Hamburger <span v-text="msg" style="color: #4c9;"></span></h2></a>
	<div class="info__demo">
		<div class="info__demo--show">
			<hamburger status="{{@status}}"></hamburger>
		</div>
	</div>
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<hamburger status="{{@status}}"></hamburger>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Hamburger = require('vue-mui').Hamburger;

new Vue({
	data : function(){
		return {
			status : false
		}
	},
	watch : {
		'status' : function(val){
			... ...
		}
	},
	components : {
		'hamburger' : Hamburger
	}
})
			</code>
		</pre>
</div>

</template>

<script>
var Hamburger = require('../../components/hamburger.vue');

module.exports = {
	data : function(){
		return {
			status : false,
			msg : '关'
		}
	},
	watch : {
		'status' : function(val){
			this.msg = val ? '开' : '关';
		}
	},
	components : {
		'hamburger' : Hamburger
	}
}
</script>