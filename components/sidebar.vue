<style>
.ani-sidebar-transition{
	-webkit-transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.ani-sidebar-enter,
.ani-sidebar-leave{
	-webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
</style>

<template>
<div class="t-aside-dimmer" v-show="show" v-on="click:close($event)"></div>
<div class="t-aside" v-show="show" v-transition="ani-sidebar">
	<content></content>
</div>
</template>

<script>
module.exports = {
	data : function(){
		return {
			name : 'aside-fix',
			top : 0
		}
	},
	props : {
		show : {
			type : Boolean,
			default : false
		}
	},
	watch : {
		'show' : function(val){
			this.fix(val);
		}
	},
	methods : {
		/**
		 * [close this component]
		 * @param  {[type]} e [description]
		 * @return {[type]}   [description]
		 */
		close : function(e){
			var that = this;
			if (e.target.className === 't-aside-dimmer') {
				that.show = false;
			}
		},
		/**
		 * [As the aside opened, fix body position]
		 * @return {[type]} [description]
		 */
		fix : function(data){
			var that = this,
				_html = document.documentElement,
				_body = document.body;

			if (data) {

				that.top = _body.scrollTop;

				_html.style.marginTop = '-' + that.top + 'px';

				that.setBodyStyle(_body, _html.getBoundingClientRect().width, window.screen.height);
			} else {

				//wait transiton end
				setTimeout(function(){
					_html.style.marginTop = '';
					that.setBodyStyle.call(that, _body, '','',that.top);
				}, 300);
				
			}
			

		},
		/**
		 * [setBodyStyle description]
		 * @param {[type]} w [width]
		 * @param {[type]} h [height]
		 * @param {[type]} t [scrollTop]
		 */
		setBodyStyle : function(b, w, h, t){
			b.style.width = w + 'px';
			b.style.height = h + 'px';
			if (t) {
				b.classList.remove(this.name);
				b.scrollTop = t;
			} else {
				b.classList.add(this.name);
			}
		}
	}

}
</script>