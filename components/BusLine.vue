<template>
  <div>
    <h2>Bus Name</h2>
    <div class="buses">
      <div v-for="bus in allBuses" :key="bus.id" class="bus">
        Line: {{ bus.Line }} <br />
        VehicleCode: {{ bus.VehicleCode }}
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("buses");
export default {
  methods: {
    ...mapActions(["fetchData"])
  },
  computed: mapGetters(["allBuses"]),
  created() {
    this.fetchData();
  }
};
</script>

<style>
.bus {
  height: 100px;
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
}
</style>
