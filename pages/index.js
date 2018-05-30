
import Router from 'next/router';
import React from 'react';
// import { Button } from 'antd-mobile';
import IndexRoute from '../routes/homepage/index';
import WithDva from '../utils/store';
// import api from '../utils/api';
import LoginLayoutWrapper from '../components/LoginLayout';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.goToCompany = this.goToCompany.bind(this);
  }
  static async getInitialProps(props) {
    console.log('method is called in components');
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const {
      pathname, query, isServer, store, req,
    } = props;
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'index/init', req });
    return {
      // dont use store as property name, it will confilct with initial store
      // should not return props or {...props} here, will cause cicular json
      pathname, query, isServer, dvaStore: store,
    };
  }
  componentDidMount() {
    Router.prefetch('/company');
  }
  // componentWillUnmount() {
  //   console.log('will unmount');
  // }
  logout() {
    this.props.dispatch({
      type: 'login/logout',
    });
  }
  // eslint-disable-next-line
  goToCompany(id) {
    Router.push({
      pathname: '/company',
      query: {
        id,
      },
    });
  }

  render() {
    const { index } = this.props;
    // console.log(this.props);
    const { companies } = index;
    // console.log('rendered!!');
    return (
      <IndexRoute
        companies={companies}
        goToCompany={this.goToCompany}
        {...this.props}
      />
    );
  }
}

export default WithDva((state) => {
  return {
    index: state.index,
  };
})(LoginLayoutWrapper(Page));
