import axios from "axios";

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

export const getters = {
  allBuses: state => state.buses
};

export const actions = {
  async fetchData({ commit }) {
    const response = await axios.get(
      "https://ckan2.multimediagdansk.pl/gpsPositions"
    );
    commit("setData", response.data.Vehicles);
  }
};

export const mutations = {
  setData: (state, buses) => {
    state.buses = buses;
  }
};
