<template>
  <div id="app">
    <h1>Vue + Quasar + React</h1>
    <q-btn label="Tombol Quasar" color="primary" @click="show = !show" />
    <ReactInVueWrapper v-if="show" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ReactInVueWrapper from "./ReactInVueWrapper.vue";

const show = ref(true);
</script>

<style scoped>
#app {
  padding: 2rem;
  font-family: sans-serif;
}
</style>
