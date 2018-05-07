const model = {
  namespace: 'index',
  state: {
    name: 'hopperhuang',
    count: 0,
  },
  reducers: {
    caculate(state, payload) {
      const { count } = state;
      const { delta } = payload;
      return { ...state, count: count + delta };
    },

  },
};

export default model;

