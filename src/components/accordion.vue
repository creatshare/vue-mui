<style lang="less">
.t-accordion{
	.t-panel+.t-panel{
		border-top: 0;
	}
}
</style>
<template>
<div class="t-accordion">
	<slot></slot>
</div>
</template>
<script>
export default {
	ready() {
		this.init()
		this.listen()
	},
	methods : {
		init() {
			this.$children.forEach((x, i) => {
				if (i > 0) {
					x.show = false
				}
			})
		},
		listen() {
			let that = this
			that.$on('toggle', (child) => {
				that.$children.forEach((x) => {
					if (child !== x) {
						x.show = false
					}
				})
			})
		}
	}
}
</script>