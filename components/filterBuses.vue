<template>
  <div>
    <h2>Bus Filter</h2>
    <select @change="filterBuses($event)">
      <option v-for="bus in $store.state.buses" :key="bus.id" class="bus">
        {{ bus.Line }}
      </option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
