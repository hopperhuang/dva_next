import React from 'react';
import WithDva from '../utils/store';
import LoginLayoutWrapper from '../components/LoginLayout';
import CompanyRoute from '../routes/company/index';

class Company extends React.Component {
  static async getInitialProps(props) {
    const {
      pathname, query, isServer, store, req,
    } = props;
    const { id } = query;
    await props.store.dispatch({ type: 'company/init', req, id });
    return {
      pathname, query, isServer, dvaStore: store,
    };
  }
  render() {
    return (
      <CompanyRoute {...this.props} />
    );
  }
}

// eslint-disable-next-line
export default WithDva((state) => { return { company: state.company }; })(LoginLayoutWrapper(Company));
