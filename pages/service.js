import React from 'react';
import WithDva from '../utils/store';
import LoginLayoutWrapper from '../components/LoginLayout';
import auth from '../utils/auth';


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
  componentWillUnmount() {
    this.props.dispatch({ type: 'service/clearData' });
  }
  render() {
    return (
      <div>这里是服务页面</div>
    );
  }
}

// eslint-disable-next-line
export default WithDva((state) => { return { service: state.service }; })(LoginLayoutWrapper(Service));
