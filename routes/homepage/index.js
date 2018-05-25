import React from 'react';

class IndexRoute extends React.Component {
  render() {
    const { companies } = this.props;
    console.log(companies, 'rendered');
    return (
      <div>
                这里是你能看到的首页
      </div>
    );
  }
}

export default IndexRoute;
