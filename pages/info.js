import React from 'react';
// import Router from 'next/router';
import WithDva from '../utils/store';
import LoginLayoutWrapper from '../components/LoginLayout';
import auth from '../utils/auth';

class Info extends React.Component {
  static async getInitialProps(props) {
    const {
      pathname, query, isServer, store, req,
    } = props;
    const token = auth.getTokenFromCookie(req);
    await props.store.dispatch({ type: 'index/init', req });
    const reduxState = store.getState();
    const { login } = reduxState;
    const loginStatus = login.login;
    if (token && loginStatus) {
      await store.dispatch({ type: 'info/getUserInfoByToken', token });
    }
    return {
      pathname, query, isServer, dvaStore: store,
    };
  }
  render() {
    const { info } = this.props;
    const { name } = info;
    return (
      <div>{name}</div>
    );
  }
}

export default WithDva((state) => { return { info: state.info }; })(LoginLayoutWrapper(Info));
