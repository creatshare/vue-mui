<style lang="less">
@base-width:16rem;
@color-gray:#eee;
@color-green:#4c9;

.slide{
	position: relative;
	width: @base-width;
	height: (@base-width * 6 / 16);
	overflow: hidden;
	&-detail{
		height: 16rem;
	}
	&__inner{
		position: relative;
		width: @base-width;
		height: 100%;
		&--img{
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
		}
		img{
			width: 100%;
		}
	}
	&__indicator{
		position: absolute;
		right: 10px;
		bottom: 10px;
		span{
			display: inline-block;
			width: 5px;
			height: 5px;
			margin-right: 5px;
			border-radius: 50%;
			background-color: @color-gray;
			&.current{
				background-color: @color-green;
			}
		}
	}
	&__inner{
		transition: transform .5s linear;
	}
}
</style>
<template>
<section class="slide" :class="{'slide-detail':detail}">
	<ul class="slide__inner" @touchstart.prevent="start" @touchmove.prevent="move" @touchend.prevent="end" :style="{transform:'translate3d('+position+'px,0,0)'}">
		<li v-for="its in list" class="slide__inner--img" :style="{left : $index * width + 'px'}">
			<a :href="its.link">
				<img :src="its.img">
			</a>
		</li>
	</ul>
	<div class="slide__indicator">
		<span v-for="its in list" :class="{'current':$index===index}"></span>
	</div>
</section>
</template>
<script>
export default {
	data () {
		return {
			index : 0,
			width : 0,
			position : 0, //inner移动距离
			tmp : 0,
			xy : 0,
			zz : 0
		}
	},
	props : {
		detail : {
			type : Boolean,
			default : false
		},
		list : {
			type : Array
		}
	},
	ready() {
		this.width = document.documentElement.getBoundingClientRect().width
	},
	methods : {
		start(e) {
			this.xy = e.touches[0].clientX
		},
		move(e) {
			this.zz = e.touches[0].clientX - this.xy
			this.position = this.zz + this.tmp

		},
		end(e) {

			if (this.zz < -100) { //right
				if (this.index < this.list.length - 1) {
					this.index++
				}
			} else if (this.zz > 100) { //left
				if (this.index > 0) {
					this.index--
				}
			}

			this.tmp = this.position = -this.index * this.width
		}
	}
}
</script>