<template>
<a class="t-btn" v-class="'t-btn--'+type" v-on="click:callback">button</a>
</template>

<script>
module.exports = {
	props : {
		type : {
			type : String,
			default : 'normal'
		},
		onClick : {
			type : Function
		},
		opt : {
			type : null,
			default : ''
		}
	},
	methods : {
		callback : function(){
			this.opt === '' ? this.onClick() : this.onClick(this.opt);
		}
	}
}
</script>