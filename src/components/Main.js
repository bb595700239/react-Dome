// require('normalize.css/normalize.css');
// require('styles/base.css');
// require('styles/weui.min.css');
// require('styles/animate.min.css');


import React from 'react';
var PhoneNode = React.createClass({
	handleBlur:function(){
		var phoneDom=this.refs.phone;
		var myReg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!myReg.test(phoneDom.value)) {
        	$.alert('手机号有误',null,null,1200,{className:'favorpop'},false)
        }
	},
	render:function(){
		return (
			<div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">手机号</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" id="phone" type="number" placeholder="请输入手机号" onBlur={this.handleBlur} data-group-state="false"
                    ref="phone"/>
                </div>
            </div>
		)	
	}
})
var SendCodeNode = React.createClass({
	handleBlur:function(){
		var phoneDom=this.refs.code;
		var myReg = /^\d{4}$/;
        if (!myReg.test(phoneDom.value)) {
        	$.alert('验证码有误',null,null,1200,{className:'favorpop'},false)
        }
	},
	render:function(){
		return (
			<div className="weui_cell weui_vcode">
                <div className="weui_cell_hd"><label className="weui_label">验证码</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" type="number" placeholder="请输入验证码" onBlur={this.handleBlur} ref="code" data-group-state="false"/>
                </div>
                <a href="javascript:;" onClick={this.handleBlur} className="weui_btn weui_btn_primary sendcode" data-url="#">发送验证码</a>
            </div>
		)	
	}
})
//let yeomanImage = require('../images/yeoman.png');
var LoginPage = React.createClass({
	render:function(){
		return (
			<div className="login-box">
		        <div className="login-user">
		            <img src="http://imgs3.mxthcdn.com/m/I36pa5bj89c1650703473_mFKWJO.jpg" onError="" alt="user"/>
		        </div>
		        <form className="g-form">
			        <div className="weui_cells weui_cells_form">
			           	<PhoneNode/>
			            <SendCodeNode/>
			        </div>
			        <div className="weui_btn_area surebtn">
			            <a className="weui_btn weui_btn_primary">免注册登录</a>
			        </div>
		        </form>
		    </div>
		)
	}
})
class AppComponent extends React.Component {
	render() {
	    return (
		    <LoginPage/>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
