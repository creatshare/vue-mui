<template>
<div class="info__bd" id="m-btn-btn">
	<a href="#m-btn-btn" data-scroll><h2>botton</h2></a>
	<div class="info__demo">
		
		<div class="info__demo--show">		
			<btn on-click="{{handle}}" opt="Click normal button"></btn>
		</div>
		<div class="info__demo--show">
			<btn type="warn" on-click="{{handle}}"></btn>
		</div>
		<div class="info__demo--show">
			<btn type="default" on-click="{{handle}}"></btn>
		</div>

		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<btn></btn>
<btn type="warn"></btn>
<btn type="default" on-click="callback" opt="test"></btn>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Btn = require(components/btn.vue');

module.exports = {
	components : {
		'btn' : Btn
	},
	methods : {
		callback : function(){
			....code....
		}
	}
}
			</code>
		</pre>
	</div>

	<table class="info__opt">
		<tr>
			<th>Name</th>
			<th>type</th>
			<th width="350">description</th>
		</tr>
		<tr>
			<td>type</td>
			<td>String</td>
			<td>Type of button <i>normal</i><i>warn</i><i>default</i></td>
		</tr>
		<tr>
			<td>on-click</td>
			<td>Function</td>
			<td><p>A callback Function when you click the button component</p></td>
		</tr>
		<tr>
			<td>opt</td>
			<td></td>
			<td><i>(optional)</i>The parameter of callback function</td>
		</tr>
	</table>
</div>
</template>

<script>
var Btn = require('../../components/button.vue');

module.exports = {
	components : {
		'btn' : Btn
	},
	methods : {
		handle : function(data){
			if (data) {
				alert(data);
			}
		}
	}
}
</script>