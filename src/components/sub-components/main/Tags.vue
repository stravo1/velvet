<template>
  <div class="mx-6 py-3 text-slate-50 flex">
    <div class="basis-1/2">
      <div class="text-left font-medium">Group by:</div>
    </div>
    <div class="basis-1/2">
      <div class="text-right">
        <select class="bg-neutral-900" v-model="selected">
          <option
            v-for="option in options"
            v-bind:value="option.value"
            :key="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
};
</script>
