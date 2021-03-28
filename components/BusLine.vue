<template>
  <div class="todos">
    <h2>Bus Name</h2>
    <div v-for="bus in allBuses" :key="bus.id" class="bus">
      Line: {{ bus.line }}
    </div>
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
