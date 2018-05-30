import api from '../utils/api';
import auth from '../utils/auth';
import checkRequestResult from './checkRequestResult';

// const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const { getServiceByCompanyId, getCompanyInfoById } = api;

const defaultState = {
  companyName: '',
  services: [],
};

const model = {
  namespace: 'company',
  state: {
    companyName: '',
    services: [],
  },
  reducers: {
    // changeInitToTrue(state) {
    //   return { ...state, init: true };
    // },
    saveCompanyName(state, payload) {
      const { companyName } = payload;
      return { ...state, companyName };
    },
    saveData(state, payload) {
      const { services } = state;
      const { data } = payload;
      const newServices = services.concat(data);
      return { ...state, services: newServices };
    },
    clearData() {
      return { ...defaultState };
    },
  },
  effects: {
    *init(action, { put, call, all }) {
      const { req, id } = action;
      const token = auth.getTokenFromCookie(req);
      //   const companyService = yield call(getServiceByCompanyId, { id, token });
      const { companyService, companyInfo } = yield all({
        companyService: call(getServiceByCompanyId, { id, token }),
        companyInfo: call(getCompanyInfoById, { id, token }),
      });
      //   console.log(s1);
      //   console.log(s2);
      const serviceCheckedResult = yield checkRequestResult(companyService);
      const infoChcekedResult = yield checkRequestResult(companyInfo);
      const serviceData = serviceCheckedResult.data;
      const infoData = infoChcekedResult.data;
      //   console.log(data);
      if (serviceData && infoData) {
        // 判断info数据长度，判断是否有此公司，设置名称
        if (infoData.length > 0) { // 数据存在, 设置公司名字
          const firstData = infoData[0];
          const companyName = firstData.companyname;
          yield put({ type: 'saveCompanyName', companyName });
        } else { // 数据不存在，设置为无主之地
          yield put({ type: 'saveCompanyName', companyName: '无主之地' });
        }
        // 保存service 数据
        yield put({ type: 'saveData', data: serviceData });
      }
    },
  },
};

export default model;
