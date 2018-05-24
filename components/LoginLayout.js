import React from 'react';
import Router from 'next/router';
import auth from '../utils/auth';

// 所有需要登陆的页面都做无感登陆
function LoginLayoutWrapper(Com) {
  class LoginLayout extends React.Component {
    static async getInitialProps(props) {
      // login here
      // console.log('method is called in login layout');
      // 目前这种方式左无感登陆，必须封闭所有在本地进入/login的入口
      // 进入login页面只能通过输入浏览器地址进入，否则res对象在client无法获取，导致错误
      const {
        store, pathname, res, req,
      } = props;
      // 获取token
      const token = auth.getTokenFromCookie(req);
      console.log(token);
      // 无感登陆
      // 调用子组件方法，通过子组件方法调用effct -> api -> 拉数据 -> 改变login.login
      const componentInitProps = Com.getInitialProps ? await Com.getInitialProps({ ...props }) : {};
      // check login status
      const reduxState = store.getState();
      const { login } = reduxState;
      const loginStatus = login.login;
      console.log(loginStatus);
      // 如果已经登陆，且目标页面是/login,则重定向到首页/
      if (loginStatus) {
        if (pathname === '/login') {
          if (res) { // serverside
            res.writeHead(302, { Location: '/' });
            res.end();
          } else { // cliecnt side
            Router.push('/');
          }
        }
      }
      // 如果尚未登陆，且目标页面不为/login,则重定向到/login
      if (!loginStatus) {
        if (pathname !== '/login') {
          if (res) {
            res.writeHead(302, { Location: '/login' });
            res.end();
          } else {
            // console.log('redierct in client side');
            Router.push('/login');
          }
        }
      }
      // 已经正常登陆，拉去数据
      // transport get props and transport to Component
      // let componentInitProps;
      // if (loginStatus) { // 确保已经登录才调用子组件的方法，否则redux状态会错误
      //   componentInitProps = Com.getInitialProps ? await Com.getInitialProps({ ...props }) : {};
      // } else {
      //   componentInitProps = {};
      // }
      return {
        loginStatus,
        ...componentInitProps,
      };
    }
    render() {
      //   console.log(this.props);
      return <Com {...this.props} />;
    }
  }
  return LoginLayout;
}


export default LoginLayoutWrapper;
