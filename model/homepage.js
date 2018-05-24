import auth from '../utils/auth';

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const model = {
  namespace: 'index',
  state: {
    name: 'hopperhuang',
    count: 0,
    init: false,
  },
  reducers: {
    caculate(state, payload) {
      const { count } = state;
      const { delta } = payload;
      return { ...state, count: count + delta };
    },
  },
  effects: {
    *init(action, { put }) {
      yield delay(500);
      const token = auth.getTokenFromCookie(action.req);
      if (token) {
        yield put({ type: 'login/changeStateToLogin' });
        yield put({ type: 'caculate', delta: 1 });
      }
    },
  },
};

export default model;

