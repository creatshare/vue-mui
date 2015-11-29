<template>
<div class="info__bd" id="m-menu-menu">
	<a href="#m-menu-menu" data-scroll><h2>MenuList</h2></a>
	<div class="info__demo">
		<menubar :list="list"></menubar>
	</div>
		<pre>
			<code class="language-markup">
				<script type="language-mark-up">
<menubar :list="list"></menubar>
				</script>
			</code>
		</pre>
		<pre>
			<code class="language-javascript">
var menubar = require('vue-mui').menubar;
// or //
import { menubar } from 'vue-mui'

new Vue({
	data() {
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
		menubar
	}
	
})
			</code>
		</pre>

</div>


</template>

<script>
import menubar from '../../src/components/menu.vue'

export default {
	data() {
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
		menubar
	}
}
</script>