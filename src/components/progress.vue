<style>
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
<div class="t-progress-bar" :show="show" :style="{backgroundColor:color,transform:'translate3d(-100%,0,0)'}"></div>
</template>
<script>
export default {
	data() {
		return {
			timer : null,
			size : 100,
			show : false
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
		status(val) {
			let that = this
			return {
				'hide' : that.hide,
				'start' : that.start,
				'done' : that.done
			}[val].call(that)
		},
		/**
		 * [if the num change, set progress bar size ,restart progress bar]
		 * @param  {[type]} val [description]
		 * @return {[type]}     [description]
		 */
		num(val) {
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
		start() {
			let that = this,
				count = that.size

			that.show = true

			that.timer = setInterval(() => {
				if (count > 10) {
					count -= 1
					that.setSize.call(that, count)
				} else {
					clearInterval(that.timer)
				}
			}, 1000)
		},
		done() {
			let that = this

			that.setSize.call(that, 0)
			clearInterval(this.timer)
			setTimeout(() => {

				that.show = false
				that.setSize.call(that, 100) // fix position
				that.size = 100
			}, 200)
		},
		hide() {
			this.show = false
		},
		setSize(val) {
			this.$el.style.transform = 'translate3d(-'+ val +'%,0,0)'
			this.$el.style.webkitTransform = 'translate3d(-'+ val +'%,0,0)'
		}
	}
}
</script>