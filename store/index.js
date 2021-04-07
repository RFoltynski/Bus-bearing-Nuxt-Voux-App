import axios from "axios";

export const state = () => ({
  buses: [{}]
});

export const getters = {
  allBuses: state => {
    return state.buses;
  }
};

export const mutations = {
  setData: (state, buses) => {
    let newState = buses.map(item => {
      let bus = {};
      bus.LastUpdate = item.DataGenerated;
      bus.VehicleId = item.VehicleId;
      bus.Line = item.Line;
      bus.Cords = [[item.Lon, item.Lat]];
      bus.VehicleCode = item.VehicleCode;
      bus.Bearing = 0;
      return bus;
    });

    state.buses = newState;
  },
  updateDataa: (state, buses) => {
    const bearing = (point1 = [0, 0], point2 = [0, 0]) => {
      let start_lat = point1[0];
      let start_long = point1[1];
      let stop_lat = point2[0];
      let stop_long = point2[1];
      let y = Math.sin(stop_long - start_long) * Math.cos(stop_lat);
      let x =
        Math.cos(start_lat) * Math.sin(stop_lat) -
        Math.sin(start_lat) *
          Math.cos(stop_lat) *
          Math.cos(stop_long - start_long);
      let brng = (Math.atan2(y, x) * 180) / Math.PI;

      return brng;
    };

    let newstate = state.buses.map(stateBus => {
      let bus = buses.find(bus => bus.VehicleId === stateBus.VehicleId);

      if (bus !== undefined) {
        if (bus.DataGenerated !== stateBus.LastUpdate) {
          stateBus.Cords = [[bus.Lon, bus.Lat], ...stateBus.Cords];
          if (stateBus.Cords.length > 2) {
            stateBus.Cords.pop();
          }
          stateBus.LastUpdate = bus.DataGenerated;
        }
        stateBus.Bearing = bearing(stateBus.Cords[0], stateBus.Cords[1]);
        return stateBus;
      }
      return stateBus;
    });
    state.buses = newstate;
  }
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
  },
  async updateData({ commit }) {
    const response = await axios.get(
      "https://ckan2.multimediagdansk.pl/gpsPositions"
    );

    commit("updateDataa", response.data.Vehicles);
  }
};
