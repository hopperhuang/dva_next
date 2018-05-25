import Router from 'next/router';
// import { Toast } from 'antd-mobile';
import checkResquetResult from './checkRequestResult';
import auth from '../utils/auth';
import api from '../utils/api';


const { login } = api;

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));


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
    *login(action, { call }) {
      const { username, password } = action;
      const authenrizationToken = yield call(login, { username, password });
      const checkedReq = yield checkResquetResult(authenrizationToken);
      const { data } = checkedReq;
      if (data) {
        const { token } = data;
        // set token to cookie
        auth.setTokenToCookie(token);
        Router.push('/');
      }
    },
    // 退出登陆
    *logout(action, { put }) {
      // console.log('logout!!');
      yield delay(500);
      auth.removeTokenFromCookie();
      yield put({ type: 'changeStateToUnlogin' });
      // eslint-disable-next-line
      window.location.href = '/login'; // 必须在window重定向，要清除本地所有状态
    },
  },
};

export default model;
