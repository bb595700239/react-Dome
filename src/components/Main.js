require('normalize.css/normalize.css');
require('styles/base.css');
require('styles/weui.min.css');
require('styles/animate.min.css');


import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-user">
            <img src="http://imgs3.mxthcdn.com/m/I36pa5bj89c1650703473_mFKWJO.jpg" onerror="this.src='http://imgs3.mxthcdn.com/m/I36pa5bj89c1650703473_mFKWJO.jpg'" alt="user"/>
        </div>
        <form className="g-form" action="#">
        <div className="weui_cells weui_cells_form">
            <div className="weui_cell">
                <div className="weui_cell_hd"><label className="weui_label">手机号</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" id="phone" type="number" placeholder="请输入手机号" onblur="rule.phone($(this));" data-group-state="false"/>
                </div>
            </div>
            <div className="weui_cell weui_vcode">
                <div className="weui_cell_hd"><label className="weui_label">验证码</label></div>
                <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" type="number" placeholder="请输入验证码" onblur="rule.custom($(this),'/^[0-9]{6}$/','短信验证码为6位数字');" data-group-state="false"/>

                </div>
                <a href="javascript:;" className="weui_btn weui_btn_primary sendcode" data-url="#">发送验证码</a>
            </div>
        </div>
        <div className="weui_btn_area surebtn">
            <a className="weui_btn weui_btn_primary">免注册登录</a>
        </div>
        </form>
    </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
