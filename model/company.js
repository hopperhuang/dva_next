import api from '../utils/api';
import auth from '../utils/auth';
import checkRequestResult from './checkRequestResult';

// const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const { getServiceByCompanyId } = api;

const model = {
  namespace: 'company',
  state: {
    init: false,
    companyName: '',
    services: [],
  },
  reducers: {
    changeInitToTrue(state) {
      return { ...state, init: true };
    },
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
  },
  effects: {
    *init(action, { put, call, select }) {
      const { req, id } = action;
      const companyState = yield select(state => state.company);
      const { init } = companyState;
      if (!init) {
        const token = auth.getTokenFromCookie(req);
        const res = yield call(getServiceByCompanyId, { id, token });
        const checkedResult = yield checkRequestResult(res);
        const { data } = checkedResult;
        console.log(data);
        if (data) {
          // console.log(data);
          yield put({ type: 'changeInitToTrue' });
          if (data.length > 0) { // 数据存在, 设置公司名字
            const firstData = data[0];
            const companyName = firstData.company[0].name;
            yield put({ type: 'saveCompanyName', companyName });
          } else { // 数据不存在，设置为无主之地
            yield put({ type: 'saveCompanyName', companyName: '无主之地' });
          }
          yield put({ type: 'saveData', data });
        }
      }
    },
  },
};

export default model;
