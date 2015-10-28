<template>
<ul class="t-menu">
	<li v-repeat="its:list">
		<a v-text="its.name" v-on="click:handle($event,its.link)"></a>
		<ul class="t-menu__child" v-if="its.child">
			<li v-repeat="items:its.child">
				<a v-attr="href:items.link" v-text="items.name"></a>
			</li>
		</ul>
	</li>
</ul>
</template>
<script>
module.exports = {
	props : {
		list : {
			type : Array
		}
	},
	methods : {

		handle : function(e, link){
			if (link) {
				window.location.href = link;
			} else {
				var next = e.target.nextElementSibling;

				next.style.display = next.style.display === 'block' ? 'none' : 'block';
			}
		}
	}
}
</script>