<template>
<div class="t-slide" v-el="box">
	<ul class="t-slide__inner" v-el="inner" v-on="touchstart:touchstart,touchmove:touchmove,touchend:touchend">
		<li v-repeat="its:list" class="t-slide__inner--img">
			<a v-attr="href:its.link">
				<img v-attr="src:its.img">
			</a>
		</li>
	</ul>
	<div class="t-slide__indicator">
		<span v-repeat="its:list" v-class="current:index===$index"></span>
	</div>
</div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			index : 0,
			width : 0,
			xy : 0, //start position
			zz : 0 //move distance
		}
	},
	props : {
		list : {
			type : Array
		}
	},
	ready : function(){
		var len = this.list.length;

		/**
		 * [Cache parent container width at first]
		 * @type {[type]}
		 */
		this.width = this.$$.box.getBoundingClientRect().width;

		this.initInner(len)
			.initImg(len);
	},
	methods : {
		/**
		 * [Set the width of the inner by list length]
		 * @param  {[type]} len [Length of the image set]
		 * @return {[type]}     [description]
		 */
		initInner : function(len){
			this.$$.inner.style.width = len * this.width + 'px';
			return this;
		},
		/**
		 * [init the width of each list item]
		 * @param  {[type]} len [Length of the image set]
		 * @return {[type]}     [description]
		 */
		initImg : function(len){
			var $img = this.$$.inner.children,
				w =  this.width + 'px';

			[].forEach.call($img, function(x){
				x.style.width = w;
			})
		},
		moveInner : function(d, type){
			var $inner = this.$$.inner,
				left = $inner.dataset.left || 0;

			if (!type) {
				d = +left + d;
			} else {
				$inner.dataset.left = d;
			}
			$inner.style.webkitTransform = 'translate3d('+d+'px, 0, 0)';
			$inner.style.transform = 'translate3d('+d+'px, 0, 0)';
		},
		/**
		 * [Record start position]
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		touchstart : function(e){
			e.preventDefault();

			var $touches = e.touches[0];
			this.zz = 0;
			this.xy = $touches.clientX;
		},
		/**
		 * [Record moving distance]
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		touchmove : function(e){
			e.preventDefault();
			var $touches = e.touches[0];

			this.zz = $touches.clientX - this.xy;
			
			//Follow fingers
			this.moveInner(this.zz);
		},
		touchend : function(e){
			e.preventDefault();
			var max = 60,
				d = this.zz;

			if (d < -max) { //left

				if (this.index < (this.list.length - 1)) this.index++;
			} else if (d > 100) { //right

				if (this.index > 0) this.index--;
			}

			this.moveInner(-this.index * this.width, 1);
		}
	}
}
</script>