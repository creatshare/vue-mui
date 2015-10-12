<style lang="less">
@border-color: #eee;
@base-padding: 20px;
@s87 : rgba(0,0,0,.87);
@s54 : rgba(0,0,0,.54);
html,body{
	background-color: #252528;
}
.test-btn{
	display: block;
	width: 100px;
	height: 32px;
	line-height: 32px;
	margin: 10px;
	text-align: center;
	color: #fff;
	cursor: pointer;
}
i{
    display: inline-block;
    padding: 3px 5px;
    margin: 0 3px;
    font-size: 14px;
    font-style: normal;
    border-radius: 3px;
    border: 1px solid #ccc;
    color: #DC5E5E;
	background-color: #ddd;
}
.info{
	width: 50%;
	margin: 0 auto;
	background-color: #fff;
	&__header{
		h1{
			padding: @base-padding;
			line-height: 38px;
			font-size: 30px;
			font-weight: 700;
			border-bottom: 1px solid @border-color;
		}
		p{
			color: @s54;
			padding: @base-padding;
		}
	}

	&__bd{
		padding: @base-padding;
		h2{
			font-weight: 700;
			font-size: 16px;
			line-height: 2;
		}
	}

	&__demo{
		border: 1px solid @border-color;
	}

	&__opt{
		width: 100%;
		margin: 20px auto;
		border: 1px solid @border-color;
		font-size: 14px;

		tr{
			line-height: 32px;
		}

		tr+tr{
			border-top: 1px solid @border-color;
		}

		th{
			padding: 0 10px;
			color: @s87;
			font-weight: 700;
		}

		th+th,
		td+td{
			border-left: 1px solid @border-color;
		}
		td{
			padding: 0 10px;
			color: @s54;
		}
	}
}
@media screen and (max-width : 600px) {
	.info{
		width: auto;
		border: 0;
	}
}
</style>

<template>
<aside></aside>
<menu></menu>
<div class="info">
	<div class="info__header" id="m-modal">
		<h1>Modal</h1>
		<p>模态框，用来模拟浏览器的<i>alert</i><i>confirm</i></p>
	</div>
	<div class="info__bd" id="m-modal-alert">
		<h2>模拟Alert</h2>
		<div class="info__demo">
			<alert></alert>
			<pre>
				<code class="language-markup">
					<script type="language-mark-up">
<div class="t-dimmer" v-show="show"></div>
<alert show="{{@show}}" 
	   title="{{title}}" 
	   content="{{content}}"></alert>
					</script>
				</code>
			</pre>
			<pre>
				<code class="language-javascript">
var Alert = require(components/alert.vue');

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'alert' : Alert
	}
}
				</code>
			</pre>
		</div>

		<table class="info__opt">
			<tr>
				<th>名称</th>
				<th>类型</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>show</td>
				<td>Boolean</td>
				<td>是否显示组件</td>
			</tr>
			<tr>
				<td>title</td>
				<td>String（可选）</td>
				<td>alert 标题</td>
			</tr>
			<tr>
				<td>content</td>
				<td>String</td>
				<td>alert 内容</td>
			</tr>
		</table>
	</div>
	<!-- confirm -->
	<div class="info__bd" id="m-modal-confirm">
		<h2>模拟Confirm</h2>
		<div class="info__demo">
			<confirm></confirm>
			<pre>
				<code class="language-markup">
					<script type="language-mark-up">
<div class="t-dimmer" v-show="show"></div>
<confirm show="{{@show}}" title="{{title}}" content="{{content}}" on-confirm="{{onConfirm}}" on-cancel="{{onCancel}}"></confirm>
					</script>
				</code>
			</pre>
			<pre>
				<code class="language-javascript">
var Confirm = require('../../components/confirm.vue');

module.exports = {
	data : function(){
		return {
			show : false,
			title : '测试标题',
			content : '测试内容'
		}
	},
	components : {
		'confirm' : Confirm
	},
	methods : {
		/**
		 * [点击确定之后的回调]
		 * @return {[type]} [description]
		 */
		onConfirm : function(){
			alert('点击了确定')
		},
		/**
		 * [点击取消之后的回调]
		 * @return {[type]} [description]
		 */
		onCancel : function(){
			alert('点击了取消')
		}
	}
	
}
				</code>
			</pre>
		</div>
		
		<table class="info__opt">
			<tr>
				<th>名称</th>
				<th>类型</th>
				<th>说明</th>
			</tr>
			<tr>
				<td>show</td>
				<td>Boolean</td>
				<td>是否显示组件</td>
			</tr>
			<tr>
				<td>title</td>
				<td>String（可选）</td>
				<td>confirm 标题</td>
			</tr>
			<tr>
				<td>content</td>
				<td>String</td>
				<td>confirm 内容</td>
			</tr>
			<tr>
				<td>on-confirm</td>
				<td>Function</td>
				<td>点击确定之后的回调函数</td>
			</tr>
			<tr>
				<td>on-cancel</td>
				<td>Function</td>
				<td>点击取消之后的回调函数</td>
			</tr>
		</table>

	</div>
</div>

</template>

<script>
var dir = './test/';
var aside = require('./aside.vue');
var menu = require('./menu.vue');
var alertTest = require(dir + 'alertTest.vue');
var confirmTest = require(dir + 'confirmTest.vue');
var prismcss = require('./lib/prism.css')
var prismjs = require('./lib/prism.js'); //语法高亮

module.exports = {
	ready : function(){
		hlt.initHighlightingOnLoad();
	},
	components : {
		'aside' : aside,
		'menu' : menu,
		'alert' : alertTest,
		'confirm' : confirmTest
	}
}
</script>