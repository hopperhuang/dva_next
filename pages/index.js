
import Link from 'next/link';
import React from 'react';
import { Button } from 'antd-mobile';
import WithDva from '../utils/store';

class Page extends React.Component {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const {
      pathname, query, isServer, store,
    } = props;
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'index/init' });
    return {
      // dont use store as property name, it will confilct with initial store
      pathname, query, isServer, dvaStore: store,
    };
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
        <p>
          <Link href="/users">
            <a>Go to /users</a>
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

export default WithDva((state) => { return { index: state.index }; })(Page);
