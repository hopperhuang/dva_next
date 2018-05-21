import React from 'react';

function LoginLayoutWrapper(Com) {
  return class extends React.Component {
    static async getInitialProps(props) {
      // login here
      const login = true;
      // transport props to Component and get initprops
      console.log('method is called in login layout');
      const componentInitProps = await Com.getInitialProps({ ...props });
      return {
        login,
        ...componentInitProps,
      };
    }
    render() {
      const { login } = this.props;
      //   console.log(this.props);
      return login ? <Com {...this.props} /> : <div>你尚未登陆,请先登陆</div>;
    }
  };
}


export default LoginLayoutWrapper;
