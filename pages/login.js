
// import Router from 'next/router';
import React from 'react';
import { Button } from 'antd-mobile';
import WithDva from '../utils/store';
import LoginLayoutWrapper from '../components/LoginLayout';
import auth from '../utils/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    // 来到登陆页面，说明无感登陆已经失败, 清除存放在cookies中的token(登陆信息)
    console.log('clear token in cookies');
    this.clearToken();
  }
  login() {
    this.props.dispatch({
      type: 'login/login',
    });
  }
  // eslint-disable-next-line
  clearToken() {
    auth.removeTokenFromCookie();
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <p>这是一个登陆模块，请先登陆</p>
        <p><Button onClick={this.login} >点击登陆</Button></p>
      </div>
    );
  }
}

export default WithDva((state) => { return { login: state.login }; })(LoginLayoutWrapper(Login));
