<template>
<a class="t-btn" :class="['t-btn--'+type]"
				 @click.prevent="callback"><slot></slot></a>
</template>
<script>
export default {
	props : {
		type : {
			type : String,
			default : 'default'
		},
		cb : {
			type : Function
		},
		opt : {
			type : null,
			default : ''
		}
	},
	methods : {
		callback : function(){
			this.opt === '' ? this.cb() : this.cb(this.opt);
		}
	}
}
</script>