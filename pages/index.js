
import Link from 'next/link';
import React from 'react';
import WithDva from '../utils/store';

class Page extends React.Component {
  static async getInitialProps(props) {
    await props.store.dispatch({ type: 'index/caculate', delta: 1 });
    return props;
  }
  componentDidMount() {
    // this.props.dispatch({
    //   type: 'index/caculate',
    //   delta: 1,
    // });
  }

  render() {
    const { index } = this.props;
    const { name, count } = index;
    return (
      <div>
      Hi,{name}!! &nbsp;
        <p>count:&nbsp; {count}</p>
        <p>
          <button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: 1 }); }} >
        plus
          </button>
        </p>
        <p>
          <button onClick={() => { this.props.dispatch({ type: 'index/caculate', delta: -1 }); }} >
          minus
          </button>
        </p>
        <p>
          <Link href="/users">
            <a>Go to /users</a>
          </Link>
        </p>
      </div>
    );
  }
}

export default WithDva((state) => { return { index: state.index }; })(Page);
