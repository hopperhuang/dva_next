import jwtDecode from 'jwt-decode';

const model = {
  namespace: 'info',
  state: {
    name: '',
    init: false,
  },
  reducers: {
    changeInitToTrue(state) {
      return { ...state, init: true };
    },
    saveData(state, payload) {
      const { decodedInfo } = payload;
      const { username } = decodedInfo;
      return { ...state, name: username };
    },
  },
  effects: {
    *getUserInfoByToken(action, { put, select }) {
      const infoState = yield select(state => state.info);
      const { init } = infoState;
      if (!init) {
        const { token } = action;
        const decodedInfo = jwtDecode(token);
        yield put({ type: 'saveData', decodedInfo });
        yield put({ type: 'changeInitToTrue' });
      }
    },
  },
};

export default model;
