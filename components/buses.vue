<template>
  <div>
    <h2>Bus Name</h2>
    <div class="buses">
      <div v-for="bus in allBuses" :key="bus.VehicleId" class="bus">
        Line: {{ bus.Line }} <br />
        VehicleCode: {{ bus.VehicleCode }} Cords: {{ bus.Cords }} LastUpdate:
        {{ bus.LastUpdate }} Current Bearing: {{ bus.Bearing }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchData", "updateData"])
  },
  computed: mapGetters(["allBuses"]),
  mounted() {
    this.fetchData();
  },
  updated() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      console.log("fire");
      this.$store.dispatch("updateData");
    }, 10000);
  },
  beforeDestroy() {}
};
</script>

<style>
.bus {
  min-height: 100px;
  width: 175px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
}
.buses {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #35495e;
  color: #35495e;
}
</style>
