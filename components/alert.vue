
<template>
<div class="t-modal" v-show="show" v-el="modal">
	<div class="t-modal__header">
		<h3 class="t-modal__header--tt" v-show="title !== ''" v-text="title"></h3>
		<p class="t-modal__header--ct" v-text="content"></p>
	</div>
	<div class="t-modal__footer">
		<a class="t-modal__footer--btn" v-on="click:show=false">确定</a>
	</div>
</div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			status : 0
		}
	},
	props : {
		show : {
			type : Boolean,
			default : false,
			twoWay : true
		},
		title : {
			type : String
		},
		content : {
			type : String
		},
	},
	watch : {
		'show' : function(val){
			if (val && this.status === 0) {
				this.fixed();
				this.status = 1;
			}
		}
	},
	methods : {
		fixed : function(){
			var target = this.$$.modal,
				top = target.getBoundingClientRect().height / 2;
			target.style.marginTop = '-'+top+'px';
		}
	}
}
</script>