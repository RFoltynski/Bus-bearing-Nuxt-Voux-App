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
  },
  filterBuses({ commit }, payload) {
    const busLine = parseInt(
      payload.target.options[payload.target.options.selectedIndex].innerText
    );

    commit("setFilterState", busLine);
  }
};

export const mutations = {
  setData: (state, buses) => {
    state.buses = buses;
  },
  setFilterState: (state, filterLine) => {
    console.log(filterLine);
    let newstate = state.buses.filter(item => {
      return item.Line == filterLine;
    });
    console.log(newstate);
    return (state.buses = newstate);
  }
};
