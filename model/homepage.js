import api from '../utils/api';
import auth from '../utils/auth';
import checkRequestResult from './checkRequestResult';

// const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const { getCompany } = api;

const model = {
  namespace: 'index',
  state: {
    init: false,
    companies: [],
  },
  reducers: {
    clearData() {
      return {
        init: false,
        companies: [],
      };
    },
    changeInitToTrue(state) {
      return { ...state, init: true };
    },
    saveData(state, payload) {
      const { companies } = state;
      const { data } = payload;
      const newCompanies = companies.concat(data);
      return { ...state, companies: newCompanies };
    },
  },
  effects: {
    *init(action, { put, call, select }) {
      const indexState = yield select(state => state.index);
      const { init } = indexState;
      if (!init) {
        const token = auth.getTokenFromCookie(action.req);
        const res = yield call(getCompany, token);
        const checkedResult = yield checkRequestResult(res);
        const { data } = checkedResult;
        if (data) {
          // console.log(data);
          yield put({ type: 'changeInitToTrue' });
          yield put({ type: 'saveData', data });
        }
      }
    },
  },
};

export default model;

