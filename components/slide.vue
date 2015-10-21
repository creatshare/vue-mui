<template>
<div class="t-slide" v-el="box">
	<ul class="t-slide__inner" v-el="inner" v-on="touchstart:touchstart,touchmove:touchmove,touchend:touchend">
		<li v-repeat="its:list" class="t-slide__inner--img">
			<a v-attr="href:its.link">
				<img v-attr="src:its.img">
			</a>
		</li>
	</ul>
</div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			index : 0,
			width : 0,
			xy :{
				x : 0,
				y : 0
			},
			zz : {
				x : 0,
				y : 0
			}
		}
	},
	props : {
		list : {
			type : Array
		}
	},
	ready : function(){
		var len = this.list.length;

		this.width = this.$$.box.getBoundingClientRect().width;

		this.initInner(len)
			.initImg(len);
	},
	methods : {
		initInner : function(len){
			this.$$.inner.style.width = len * this.width + 'px';
			return this;
		},
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
		touchstart : function(e){
			e.preventDefault();

			var $touches = e.touches[0];
			this.zz.y = 0;
			this.xy.x = $touches.clientX;
			this.xy.y = $touches.clientY;
		},
		touchmove : function(e){
			e.preventDefault();
			var $touches = e.touches[0];

			this.zz.x = $touches.clientX - this.xy.x;
			this.zz.y = $touches.clientY - this.xy.y;

			this.moveInner(this.zz.x);
		},
		touchend : function(e){
			e.preventDefault();
			var max = 60,
				d = this.zz.x;

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