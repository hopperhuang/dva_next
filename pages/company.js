import React from 'react';
import Router from 'next/router';
import WithDva from '../utils/store';
import LoginLayoutWrapper from '../components/LoginLayout';
import CompanyRoute from '../routes/company/index';

class Company extends React.Component {
  static async getInitialProps(props) {
    const {
      pathname, query, isServer, store, req,
    } = props;
    const { id } = query;
    await props.store.dispatch({ type: 'company/clearData' });
    await props.store.dispatch({ type: 'company/init', req, id });
    return {
      pathname, query, isServer, dvaStore: store,
    };
  }
  constructor(props) {
    super(props);
    this.goBackToHomePage = this.goBackToHomePage.bind(this);
    this.seeServiceById = this.seeServiceById.bind(this);
  }
  // eslint-disable-next-line
  goBackToHomePage() {
    Router.push('/');
  }
  // eslint-disable-next-line
  seeServiceById(id) {
    // console.log(id);
    Router.push({
      pathname: '/service',
      query: {
        id,
      },
    });
  }
  componentWillUnmount() {
    this.props.dispatch({ type: 'company/clearData' });
  }
  render() {
    return (
      <CompanyRoute
        goBackToHomePage={this.goBackToHomePage}
        seeServiceById={this.seeServiceById}
        {...this.props}
      />
    );
  }
}

// eslint-disable-next-line
export default WithDva((state) => { return { company: state.company }; })(LoginLayoutWrapper(Company));
