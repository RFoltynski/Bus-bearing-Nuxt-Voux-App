export const state = () => ({
  buses: [
    {
      id: 1,
      line: "12"
    },
    {
      id: 2,
      line: "43"
    },
    {
      id: 3,
      line: "64"
    }
  ]
});

const getters = {
  allBuses: state => state.buses
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
