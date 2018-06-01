import React from 'react';
import Router from 'next/router';
import WithDva from '../utils/store';
import LoginLayoutWrapper from '../components/LoginLayout';
import auth from '../utils/auth';
import ServiceRoute from '../routes/service/index';
import checkServer from '../utils/checkServer';


class Service extends React.Component {
  static async getInitialProps(props) {
    const {
      pathname, query, isServer, store, req,
    } = props;
    const { id } = query;
    const token = auth.getTokenFromCookie(req);
    await props.store.dispatch({ type: 'service/clearData' });
    await props.store.dispatch({ type: 'service/init', token, id });
    return {
      pathname, query, isServer, dvaStore: store,
    };
  }
  componentDidMount() {
    const isServer = checkServer();
    if (!isServer) {
      // 兼容微信浏览器
      // eslint-disable-next-line
      window.scrollTo(0, 0);
    }
  }
  componentWillUnmount() {
    // this.props.dispatch({ type: 'service/clearData' });
  }
  // eslint-disable-next-line
  goBackToCompanyById = (id) => {
    Router.push({
      pathname: '/company',
      query: {
        id,
      },
    });
  }
  render() {
    return (
      <ServiceRoute {...this.props} goBackToCompanyById={this.goBackToCompanyById} />
    );
  }
}

// eslint-disable-next-line
export default WithDva((state) => { return { service: state.service }; })(LoginLayoutWrapper(Service));
