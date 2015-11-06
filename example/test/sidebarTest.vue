<style>
.aside-test{
	color: #fff;
	padding: 20px;
	line-height: 40px;
}	
</style>

<template>
<div class="info__bd" id="m-aside-sidebar">
	<a href="#m-aside-sidebar" data-scroll><h2>Sidebar</h2></a>
	<div class="info__demo">
		
		<a class="test-btn test-btn-blue test-btn-ilb" v-on="click:showLeft=true">from Left</a>
		<a class="test-btn test-btn-green test-btn-ilb" v-on="click:showRight=true">from Right</a>
		<a class="test-btn test-btn-black test-btn-ilb" v-on="click:openPush">Push</a>
		<sidebar show="{{@showLeft}}" from="left">
			<div class="aside-test">
				<p>The most distant way in the world</p>
				<p>is not the way from birth to the end</p>
			</div>
		</sidebar>
		
		<sidebar show="{{@showRight}}" from="right">
			<div class="aside-test">
				<p>The most distant way in the world</p>
				<p>is not the way from birth to the end</p>
			</div>
		</sidebar>
		<sidebar show="{{@showPush}}"
				 type='{{type}}'>
			<div class="aside-test">
				<p>The most distant way in the world</p>
				<p>is not the way from birth to the end</p>
			</div>
		</sidebar>
	</div>
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<a v-on="click:show=true">sidebar</a>

<sidebar show="{{@show}}"
		 from="left">
	<div>
		<p>The most distant way in the world</p>
		<p>is not the way from birth to the end</p>
	</div>
</sidebar>

----OR----

<sidebar show="{{@showPush}}"
		 type="push">
	<div class="aside-test">
		<p>The most distant way in the world</p>
		<p>is not the way from birth to the end</p>
	</div>
</sidebar>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Sldebar = require('vue-mui').Sidebar;

new Vue({
	data : function(){
		return {
			show : false,
		}
	},
	components : {
		'sidebar' : Sidebar
	}
})
			</code>
		</pre>

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
			<td>from</td>
			<td>String</td>
			<td><i>left</i></td>
			<td>
				<p>How to position the sidebar</p>
				<p>one of <i>left</i><i>right</i></p>
			</td>
		</tr>
	</table>
</div>
</template>

<script>
var Sidebar = require('../../components/sidebar.vue');

module.exports = {
	data : function(){
		return {
			showLeft : false,
			showRight : false,
			showPush : false,
			type : 'open'
		}
	},
	components : {
		'sidebar' : Sidebar
	},
	methods : {
		openPush : function(){
			this.showPush = true;
			this.type = 'push';
		}
	}
}

</script>