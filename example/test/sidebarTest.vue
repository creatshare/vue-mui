<style>
.aside-test{
	color: #fff;
	padding: 20px;
	line-height: 40px;
}	
</style>

<template>
<div class="info__bd" id="m-aside-aside">
	<h2>Aside</h2>
	<div class="info__demo">
		
		<a class="test-btn test-btn-alert" v-on="click:show=true">aside</a>
		<sidebar show="{{@show}}">
			<div class="aside-test">
				<p>The most distant way in the world</p>
				<p>is not the way from birth to the end</p>
			</div>
		</sidebar>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<a v-on="click:show=true">aside</a>

<sidebar show="{{@show}}">
	<div>
		<p>The most distant way in the world</p>
		<p>is not the way from birth to the end</p>
	</div>
</sidebar>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Sidebar = require('../../components/sidebar.vue');

new Vue({
	data : function(){
		return {
			show : false
		}
	},
	components : {
		'sidebar' : Sidebar
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
	</table>
</div>
</template>

<script>
var Sidebar = require('../../components/sidebar.vue');

module.exports = {
	data : function(){
		return {
			show : false
		}
	},
	components : {
		'sidebar' : Sidebar
	}
}

</script>