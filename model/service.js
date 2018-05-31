import api from '../utils/api';

const {
  getServiceInfoByServiceId,
  getDeployInfoByServiceId,
  getPackageInfoByServiceId,
} = api;

const model = {
  namespace: 'service',
  state: {
    service: 'no service',
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
    *init(action, { call, all, put }) {
      const { token, id } = action;
      const { serviceInfo, deployInfo } = yield all({
        serviceInfo: call(getServiceInfoByServiceId, { token, id }),
        deployInfo: call(getDeployInfoByServiceId, { token, id }),
      });
      const serviceInfoData = serviceInfo.data;
      const deployInfoData = deployInfo.data;
      if (serviceInfoData && deployInfoData) {
        yield put({ type: 'login/changeStateToLogin' });
        const firstData = serviceInfoData[0];
        const isShort = firstData.is_short;
        // 根据ishort去判断是否获取打包信息
        if (!isShort) {
          const packageInfo = yield call(getPackageInfoByServiceId, { token, id });
          const packageInfoData = packageInfo.data;
          console.log(serviceInfoData, 'sd');
          console.log(deployInfoData, 'dd');
          console.log(packageInfoData, 'pd');
        }
      } else {
        yield put({ type: 'login/changeStateToUnlogin' });
      }
    },
  },
};

export default model;

