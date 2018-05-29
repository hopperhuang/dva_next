import React from 'react';
import WithDva from '../utils/store';
import LoginLayoutWrapper from '../components/LoginLayout';
import LogRoute from '../routes/log/index';


class Log extends React.Component {
  static async getInitialProps(props) {
    const {
      pathname, query, isServer, store, req,
    } = props;
    await props.store.dispatch({ type: 'index/init', req });
    return {
      pathname, query, isServer, dvaStore: store,
    };
  }
  render() {
    return (
      <LogRoute {...this.props} />
    );
  }
}
export default WithDva((state) => { return { log: state.log }; })(LoginLayoutWrapper(Log));
