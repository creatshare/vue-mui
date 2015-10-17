<style>
.ani-open-left-transition,
.ani-open-right-transition{
	-webkit-transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.ani-open-left-enter,
.ani-open-left-leave{
	-webkit-transform: translateX(-100%);
    transform: translateX(-100%);
}
.ani-open-right-enter,
.ani-open-right-leave{
	-webkit-transform: translateX(100%);
    transform: translateX(100%);
}
</style>

<template>
<div class="t-aside" v-class="'t-aside--'+from" v-show="show" v-transition="ani-open-{{from}}">
	<content></content>
</div>
<div class="t-aside-dimmer" v-show="show" v-on="click:close($event)"></div>
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
		},
		//push or open
		type : {
			type : String,
			default : 'open'
		},
		from : {
			type : String,
			default : 'left'
		}
	},
	watch : {
		'show' : function(val){
			if (val) {
				this.fix(val);
			}
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
				this.fix(false);
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

				that.top = _body.scrollTop; //cache scrollTop

				that.setHtmlStyle(_html, that.top);

				that.setBodyStyle(_body, _html.getBoundingClientRect().width, window.screen.height);
				
			} else {

				//wait transiton end
				setTimeout(function(){

					that.setHtmlStyle(_html);
					that.setBodyStyle.call(that, _body);
				}, 300);
				
			}			

		},
		setHtmlStyle : function(target, top){
			target.style.marginTop = top ? '' : '-' + top + 'px';
		},
		/**
		 * [setBodyStyle description]
		 * @param {[type]} w [width]
		 * @param {[type]} h [height]
		 * @param {[type]} t [scrollTop]
		 */
		setBodyStyle : function(b, w, h){
			
			if (w) {		
				b.style.cssText = '';
				b.classList.remove(this.name);
				b.scrollTop = this.top;
			} else {
				b.style.width = w + 'px';
				b.style.height = h + 'px';
				b.classList.add(this.name);
			};
		}
	}

}
</script>