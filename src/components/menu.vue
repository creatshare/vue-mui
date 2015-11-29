<template>
<ul class="t-menu">
	<li v-for="its in list">
		<a v-text="its.name" @click.prevent="handle($event,its.link)"></a>
		<ul class="t-menu__child" v-if="its.child">
			<li v-for="items in its.child">
				<a :href="items.link" v-text="items.name"></a>
			</li>
		</ul>
	</li>
</ul>
</template>
<script>
export default {
	props : {
		list : {
			type : Array
		}
	},
	methods : {

		handle(e, link) {
			if (link) {
				window.location.href = link;
			} else {
				e.target.classList.toggle('current');
			}
		}
	}
}
</script>