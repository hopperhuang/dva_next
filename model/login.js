import Router from 'next/router';
import auth from '../utils/auth';

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

// 模拟登陆后返回token
const mockLogin = () => {
  return 2333;
};

// 自动登陆流程，autonlogin
// 获取cookie，(loginlayout)
// cookie 为空，则设置state.login 为false
// cookie 不为空，远程鉴权,并设置state.login状态(effects.autologin)
// 判断登陆状态(loginlayout)
// 判断目标进入页面是否login或者/(loginlayout)
// 根据登陆态和页面位置重定向(loginlayou)  ---> 若登陆状态为false登陆失败,进入/login页面 清除cookies中的token
// 一切正常，则调用子组件的getInititalProps方法获取数据
// 渲染页面

// 手动登陆流程
// 登陆后将login设置为true
// 登陆失败则设置为false
const model = {
  namespace: 'login',
  state: {
    login: false,
  },
  reducers: {
    changeStateToLogin(state) {
      const newState = { ...state };
      newState.login = true;
      return { ...newState };
    },
    changeStateToUnlogin(state) {
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
      const token = mockLogin();
      // set token to cookie
      auth.setTokenToCookie(token);
      // change login status
      yield put({ type: 'changeStateToLogin' });
      // login success go to index
      Router.push('/');
    },
    // 退出登陆
    *logout(action, { put }) {
      // console.log('logout!!');
      yield delay(500);
      auth.removeTokenFromCookie();
      yield put({ type: 'changeStateToUnlogin' });
      // eslint-disable-next-line
      window.location.href = '/login';
    },
    // 自动登陆 因为是自动登陆并不需要对token进行操作改怎样就怎样
    *autoLogin(action, { put }) {
      // console.log('login!!');
      // 已经登陆则不需要发送请求，检测token是否过期
      // code to check login or not here
      // 尚未登陆，也就是第一次登陆，通过cookies.token远程验证是否过期
      yield delay(500);
      const { token } = action;
      // token 不存在则直接set login 为false
      if (!token) {
        yield put({ type: 'changeStateToUnlogin' });
      } else { // token则鉴权并登陆
        // 如果login为true，则说明，已经登陆过，不需要鉴权
        // check login here
        // 如果login 为fale,则说第一次登陆，鉴权并根据果来设置是登陆状态

        // 因为暂时没有借口，所以只要有token就设置为true
        yield put({ type: 'changeStateToLogin' });
      }
    },
  },
};

export default model;
