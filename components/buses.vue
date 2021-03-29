<template>
  <div>
    <h2>Bus Name</h2>
    <div class="buses">
      <div v-for="bus in $store.state.buses" :key="bus.id" class="bus">
        Line: {{ bus.Line }} <br />
        VehicleCode: {{ bus.VehicleCode }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchData"])
  },
  created() {
    this.fetchData();
  },
  mounted() {
    setInterval(() => {
      console.log("fire");
      this.fetchData();
    }, 2000);
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
  border: 1px solid #35495e;
  color: #35495e;
}
</style>
