<template>
  <div class="container">
    <div>
      <Header />
      <Buses />
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import FilterBuses from "../components/filterBuses";
import Buses from "../components/buses";
export default {
  components: { Header, Buses, FilterBuses }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
