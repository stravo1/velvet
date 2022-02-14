<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1 class="text-3xl font-bold">Hello world! Vue3, TailwindCSS, Firebase!!</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
