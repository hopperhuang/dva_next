
import Link from 'next/link';
import React from 'react';
import { Button } from 'antd-mobile';
import WithDva from '../utils/store';
// import api from '../utils/api';
import LoginLayoutWrapper from '../components/LoginLayout';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
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
    console.log('did mount');
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
  logout() {
    this.props.dispatch({
      type: 'login/logout',
    });
  }

  render() {
    const { index } = this.props;
    // console.log(this.props);
    const { name, count } = index;
    // console.log('rendered!!');
    return (
      <div className="index" >
      Hi,{name}!! &nbsp;
        <p className="red" >count:&nbsp; {count}</p>
        <p className="addButton" >
          <Button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: 1 }); }} >
        plus
          </Button>
        </p>
        <p className="minusButton" >
          <Button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: -1 }); }} >
          minus
          </Button>
        </p>
        <p><Button onClick={this.logout} >退出登陆</Button></p>
        <p>
          <Link href="/users">
            <a>Go to /users</a>
          </Link>
        </p>
        <p>
          <Link href="/login">
            <a>Go to /login</a>
          </Link>
        </p>
        <style jsx>{`
          .index {
            font-size: 28px;
            .red {
              display: flex;
              color: red;
              font-size: 26px;
            }
          }
          .addButton {
            width: 375px;
          }
          .addButton :gloabl(.am-button) {
            font-size: 26px;
          }
          .minusButton {
            width: 375px;
          }
          .minusButton :gloabl(.am-button) {
            font-size: 26px;
          }
        `}
        </style>
      </div>
    );
  }
}

export default WithDva((state) => { return { index: state.index }; })(LoginLayoutWrapper(Page));
