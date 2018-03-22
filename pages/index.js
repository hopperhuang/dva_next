
import Link from 'next/link';
import React from 'react';
import dva, { connect } from 'dva';


// class Test extends React.Component {
//   render() {
//     return (<div>2333</div>);
//   }
// }

const model = {
  namespace: 'index',
  state: {
    index: true,
  },
  subscriptions: {
    setup({ dispatch }) {
      // console.log(dispatch);
    },
  },
};

const App = (props) => {
  console.log(props);
  return (
    <div>
      Hi,
      <Link href="/users">
        <a>
           Go to /users
        </a>
      </Link>
    </div>
  );
};
const app = dva();
app.model(model);
const Page = connect()(App);
app.router(Page);
const Component = app.start();
// console.log(Component);

// export default Component;


export default function () {
  // const app = dva();
  // app.model(model);
  // app.router(App);

  // const Component = app.start();
  return (
    <Component />
  );
}
