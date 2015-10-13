<style lang="less">
.t-progress-bar{
	position: fixed;
	top:0;
	left:0;
	width: 100%;
	height:2px;
	z-index: 999;
	-webkit-transition: all 200ms ease;
	transition: all 200ms ease;
}
</style>

<template>
<div class="t-progress-bar" v-style="background-color:color,
									 transform:'translate3d(-100%,0,0)',
									 display:'none'"></div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			timer : null,
			size : 100
		}
	},
	props : {
		color : {
			type : String,
			default : '#4c9cee'
		},
		status : {
			type : String, //hide start done
			default : 'hide'
		},
		num : {
			type : Number,
			default : 100
		}
	},
	watch : {
		'status' : function(val) {
			var that = this;
			return {
				'hide' : that.hide,
				'start' : that.start,
				'done' : that.done
			}[val].call(that);
		},
		/**
		 * [if the num change, set progress bar size ,restart progress bar]
		 * @param  {[type]} val [description]
		 * @return {[type]}     [description]
		 */
		'num' : function(val){
			if (val !== 100) {
				clearInterval(this.timer);
				this.size = 100 - this.num; //get size by num
				this.setSize(this.size);
				this.start();
			} else {
				this.done();
			}
			
		}
	},
	methods : {
		start : function(){
			var that = this,
				count = that.size,
				target = that.$el;

			target.style.display = 'block';

			that.timer = setInterval(function(){

				if (count > 10) {
					count -= 1;
					that.setSize.call(that, count);
				} else {
					clearInterval(this.timer);
				}
				
			}, 1000)
		},
		done : function(){
			var that = this,
				target = that.$el;

			that.setSize.call(that, 0);
			clearInterval(this.timer);
			setTimeout(function(){
				target.style.display = 'none';
				that.setSize.call(that, 100); //fix position
				that.size = 100;
			}, 200)
		},
		hide : function(){
			this.$el.style.display = 'none';
		},
		setSize : function(val){
			this.$el.style.transform = 'translate3d(-'+ val +'%,0,0)'
		}
	}
}
</script>