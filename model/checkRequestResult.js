import { put } from 'redux-saga/effects';
import { Toast } from 'antd-mobile';
import auth from '../utils/auth';

const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

function *checkResquetResult(response) {
  const isServer = checkServer();
  const { data } = response;
  if (data) {
    yield put({ type: 'login/changeStateToLogin' });
    return response;
  } else {
    const { code } = response.err;
    if (code) { // 参数错误
      if (!isServer) {
        Toast.info('登陆失败', 2);
      }
      yield put({ type: 'login/changeStateToUnlogin' });
      auth.removeTokenFromCookie();
    } else { // 网络错误
      if (!isServer) {
        Toast.info('网络错误');
      }
      yield put({ type: 'login/changeStateToUnlogin' });
    }
  }
  return response;
}

export default checkResquetResult;
