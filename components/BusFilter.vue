<template>
  <div>
    <h2>Bus Filter</h2>
    <select @change="filterBuses($event)">
      <option v-for="bus in allBuses" :key="bus.id" class="bus">
        {{ bus.Line }}
      </option>
    </select>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("buses");
export default {
  computed: mapGetters(["allBuses"]),
  methods: { ...mapActions(["filterBuses"]) }
};
</script>

<style></style>
