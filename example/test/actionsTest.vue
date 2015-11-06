<template>
<div class="info__bd" id="m-modal-actions">
	<a href="#m-modal-actions" data-scroll><h2>Actions</h2></a>
	<p class="info__bd--hint">simulate IOS action list</p>
	<div class="info__demo">
		
		<a class="test-btn test-btn-blue" v-on="click:show=true">actions</a>
		<actions show="{{@show}}" title="标题">
			<li v-on="click:test(1)">alert 1</li>
			<li v-on="click:test(2)">alert 2</li>
		</actions>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<actions show="{{@show}}" title="Title">
	<li v-on="click:test(1)">alert 1</li>
	<li v-on="click:test(2)">alert 2</li>
</actions>				
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Actions = require('../../components/actions.vue');

new Vue({
	data : function(){
		return {
			show : false
		}
	},
	components : {
		'actions' : Actions
	},
	methods : {
		test : function(data){
			alert(data);

			this.show = false;
		}
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
			<td>show</td>
			<td>Boolean</td>
			<td><i>false</i></td>
			<td>Whether to show this component</td>
		</tr>
		<tr>
			<td>title</td>
			<td>String</td>
			<td></td>
			<td><i>(optional)</i>Title of component</td>
		</tr>
	</table>
</div>	
</template>

<script>
var Actions = require('../../components/actions.vue');

module.exports = {
	data : function(){
		return {
			show : false
		}
	},
	components : {
		'actions' : Actions
	},
	methods : {
		test : function(data){
			alert(data);

			this.show = false;
		}
	}
}
</script>