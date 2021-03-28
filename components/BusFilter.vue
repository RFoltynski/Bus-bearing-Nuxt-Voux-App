<template>
  <div>
    <h2>Bus Filter</h2>
    <select>
      <option v-for="bus in allBuses" :key="bus.id" class="bus">
        Line: {{ bus.Line }}
      </option>
    </select>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("buses");
export default {
  computed: mapGetters(["allBuses"])
};
</script>

<style></style>
