
// import Router from 'next/router';
import React from 'react';
import Router from 'next/router';
import { Toast } from 'antd-mobile';
import WithDva from '../utils/store';
import LoginRoute from '../routes/login';
import LoginLayoutWrapper from '../components/LoginLayout';
import auth from '../utils/auth';


class Login extends React.Component {
  static async getInitialProps(props) {
    // 进入登陆页面，只要token存在就默认其已经登录，在loginlayout层，将其从定向到/
    const token = auth.getTokenFromCookie(props.req);
    // console.log(token);
    if (token && token !== 'expired') {
      await props.store.dispatch({
        type: 'login/changeStateToLogin',
      });
    }
    return {};
  }
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }
  componentDidMount() {
    // 来到登陆页面，说明无感登陆已经失败, 清除存放在cookies中的token(登陆信息)
    // const { login } = this.props;
    // const loginstatus = login.login;
    // console.log(loginstatus);
    console.log('clear token in cookies');
    Router.prefetch('/log');
    Router.prefetch('/index');
    this.clearToken();
  }
  login() {
    const { username, password } = this.state;
    const checked = this.checkLoginValue(username, password);
    if (checked) {
      // console.log('dispatch a login action!');
      this.props.dispatch({
        type: 'login/login',
        username,
        password,
      });
    }
  }
  // eslint-disable-next-line
  checkLoginValue(username, password) {
    const usrLength = username.length;
    const pwdLength = password.length;
    if (usrLength === 0) {
      Toast.info('请输入您的账号', 1);
      return false;
    }
    if (pwdLength === 0) {
      Toast.info('请输入您的密码', 1);
      return false;
    }
    return true;
  }
  // eslint-disable-next-line
  clearToken() {
    auth.removeTokenFromCookie();
  }
  changeUsername(value) {
    this.setState({
      username: value,
    });
  }
  changePassword(value) {
    this.setState({
      password: value,
    });
  }
  render() {
    // console.log(this.props);
    const { username, password } = this.state;
    return (
      <LoginRoute
        username={username}
        password={password}
        changeUsername={this.changeUsername}
        changePassword={this.changePassword}
        login={this.login}
      />
    );
  }
}

export default WithDva((state) => { return { login: state.login }; })(LoginLayoutWrapper(Login));
