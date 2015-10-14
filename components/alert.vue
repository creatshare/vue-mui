
<template>
<div class="t-dimmer" v-show="show"></div>
<div class="t-modal" v-show="show">
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
			name : 'fix-position'
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
			var $body = document.body;

			val === true ? $body.classList.add(this.name) : $body.classList.remove(this.name);
		}
	}
}
</script>