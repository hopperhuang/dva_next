import api from '../utils/api';

const {
  getServiceInfoByServiceId,
  getDeployInfoByServiceId,
  getPackageInfoByServiceId,
} = api;

const model = {
  namespace: 'service',
  state: {
    servicename: '',
    companyId: '',
    deployInfoData: [],
    packageInfoData: [],
  },
  reducers: {
    clearData() {
      return {
        servicename: '',
        companyId: '',
        deployInfoData: [],
        packageInfoData: [],
      };
    },
    saveData(state, action) {
      const oldDeployInfoData = state.deployInfoData;
      const oldPackageInfoData = state.packageInfoData;
      const {
        deployInfoData, packageInfoData, servicename, companyId,
      } = action;
      const newDeployInfoData = oldDeployInfoData.concat(deployInfoData);
      const newPackageInfoData = oldPackageInfoData.concat(packageInfoData);
      return {
        ...state,
        servicename,
        companyId,
        deployInfoData: newDeployInfoData,
        packageInfoData: newPackageInfoData,
      };
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
        let packageInfoData = [];
        if (!isShort) {
          const packageInfo = yield call(getPackageInfoByServiceId, { token, id });
          packageInfoData = packageInfo.data;
          // console.log(serviceInfoData, 'sd');
          // console.log(deployInfoData, 'dd');
          // console.log(packageInfoData, 'pd');
        }
        // getservicename
        const { servicename } = firstData;
        const companyId = firstData.company[0].id;
        yield put({
          type: 'saveData', servicename, deployInfoData, packageInfoData, companyId,
        });
      } else {
        yield put({ type: 'login/changeStateToUnlogin' });
      }
    },
  },
};

export default model;

