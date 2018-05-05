
import Link from 'next/link';
import React from 'react';
import dva, { connect } from 'dva';
// import dva from 'dva';

const page = (props) => {
  const { index } = props;
  const { name } = index;
  return (
    <div>
      Hi,{name}!! &nbsp;
      <Link href="/users">Go to /users</Link>
    </div>
  );
};

const model = {
  namespace: 'index',
  state: {
    name: 'hopperhuang',
  },
};

export default function () {
  const app = dva();
  const ConnectedComponent = connect((state) => { return { index: state.index }; })(page);
  const main = () => {
    return <ConnectedComponent />;
  };
  app.model(model);
  app.router(main);

  const Component = app.start();
  return <Component />;
}
