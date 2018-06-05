import React from 'react';
import { Button } from 'antd-mobile';
import generateUrl from '../utils/generateUrl';

const logoImage = generateUrl('/static/image/logo@2x.png');

class LoginRoute extends React.Component {
  render() {
    const {
      username,
      password,
      changeUsername,
      changePassword,
      login,
    } = this.props;
    return (
      <div className="container" >
        <div className="title" >登录</div>
        <div className="logo" >
          <img src={logoImage} alt="logo" />
        </div>
        <div className="inputs" >
          <p className="usernameinputs" >
            <span className="usrlabel" >用户名</span>
            <input
              value={username}
              className="usrinput"
              placeholder="请输入您的用户名"
              onChange={(e) => { changeUsername(e.target.value); }}
            />
          </p>
          <p className="passwordinputs" >
            <span className="pwdlabel" >密码</span>
            <input
              value={password}
              className="pwdinput"
              type="password"
              placeholder="请输入您的密码"
              onChange={(e) => { changePassword(e.target.value); }}
            />
          </p>
        </div>
        <div className="loginButton" >
          <Button onClick={login} type="primary" >登录</Button>
        </div>
        <style jsx>{`
          .container {
              width: 100%;
          }
          .title {
              font-size: 36px;
              color: #363636;
              letter-spacing: 0.3px;
              width: 100%;
              text-align: center;
              box-sizing: border-box;
              padding: 13px;
          }
          .logo {
              width: 258px;
              height: 164px;
              box-sizing: border-box;
              margin: 102px auto 0;
              img {
                  width: 100%;
                  height: auto;
              }
          }
          .inputs {
              width: 654px;
              box-sizing: border-box;
              margin: 80px auto 0;
          }
          .usernameinputs, .passwordinputs {
              box-sizing: border-box;
              padding-bottom: 36px;
              border-bottom: 1px solid #CDD0D6;
          }
          .usernameinputs {
              margin: 0;
          }
          .passwordinputs {
              margin: 36px auto 0;
          }
          .usrlabel, .pwdlabel {
              font-size: 28px;
              color: #9B9B9B;
              letter-spacing: 0.6px;
              text-align: justify;
              line-height: 28px;
              display: inline-block;
              width: 90px;
          }
          .usrinput, .pwdinput {
              font-size: 28px;
              color: #D1D3D9;
              letter-spacing: 0.6px;
              line-height: 28px;
              border-width: 0;
              display: inline-block;
              margin-left: 30px;
          }
          .loginButton {
              box-sizing: border-box;
              width: 654px;
              height: 92px;
              margin: 160px auto 0;

          }
          .loginButton :global(.am-button) {
            font-size: 32px;
            color: #ffffff;
            background-color:  #2372FF;
            height: 92px;
            line-height: 92px;
            vertical-align: middle;
            border-radius: 46px;
            overflow: hidden;
          }
          .loginButton :global(.am-button-active) {
            background-color: #ddd;
          }
          ::-webkit-input-placeholder {
            color: #D1D3D9;
          }
          :-moz-placeholder {/* Firefox 18- */
            color: #D1D3D9;
          }
          ::-moz-placeholder{/* Firefox 19+ */
           color: #D1D3D9;
          }
          :-ms-input-placeholder {
            color: #D1D3D9;
          }
        `}
        </style>
      </div>
    );
  }
}

export default LoginRoute;
