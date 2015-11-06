<template>
<div class="info__bd" id="m-menu-menu">
	<a href="#m-menu-menu" data-scroll><h2>MenuList</h2></a>
	<div class="info__demo">
		
		<div class="info__demo--show">
			<menulist list="{{list}}"></menulist>		
		</div>
		
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<menulist list="{{list}}"></menulist>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var Menu = require('components/menu.vue');

new Vue({
	data : function(){
		return {
			list : [{
				name : 'Hello',
				link : 'http://mui.yaobieting.com'
			},{
				name : 'World',
				child : [{
					name : 'test',
					link : 'http://mui.yaobieting.com'
				},{
					name : 'test2',
					link : 'http://mui.yaobieting.com'
				}]
			},{
				name : 'Test',
				link : 'http://mui.yaobieting.com'
			}]
		}
	},
	components : {
		'menulist' : Menu
	}
	
})
			</code>
		</pre>
	</div>

</div>


</template>

<script>
var Menu = require('../../components/menu.vue');

module.exports = {
	data : function(){
		return {
			list : [{
				name : 'Hello',
				link : 'http://mui.yaobieting.com'
			},{
				name : 'World',
				child : [{
					name : 'test',
					link : 'http://mui.yaobieting.com'
				},{
					name : 'test2',
					link : 'http://mui.yaobieting.com'
				}]
			},{
				name : 'Test',
				link : 'http://mui.yaobieting.com'
			}]
		}
	},
	components : {
		'menulist' : Menu
	}
	
}
</script>