const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

// 自动登陆流程，第一次autologin，并设置已经尝试自动登陆,之后进入页面就不需要自动登陆
// 自动登陆成功，设置login为true
// 自动登陆失败,设置login为false, 客户端将cookie清除

// 手动登陆流程
// 登陆后将login设置为true
// 登陆失败则不做改变
const model = {
  namespace: 'login',
  state: {
    login: false,
  },
  reducers: {
    changeStateToLogin(state) {
      const newState = { ...state };
      newState.login = false;
      return { ...newState };
    },
  },
  effects: {
    // 手动登陆
    *login(action, { put }) {
      // console.log('login!!');
      yield delay(500);
      yield put({ type: 'changeStateToLogin' });
    },
    // 自动登陆
    *autoLogin(action, { put }) {
      // console.log('login!!');
      yield delay(500);
      yield put({ type: 'changeStateToLogin' });
    },
  },
};

export default model;
