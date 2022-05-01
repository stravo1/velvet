<template>
  <div
    class="container mx-auto bg-slate-300 text-lime-600 font-semibold sm:columns-1 md:columns-2 lg:columns-4"
  >
    <div>GG</div>
    <div class="break-before-column">Z</div>
    <div>GG</div>
    <div>GG</div>
    <div>GG</div>
  </div>
  <div class="bg-indigo-300 invisible lg:visible">
    <img
      class="object-top-left object-none mx-auto h-40"
      src="../assets/1.jpg"
    />
  </div>
  <div>
    <div>
      <div class="sticky top-0 bg-slate-400">a</div>
      <template
        v-for="number in [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ]"
        :key="number"
      >
        <div class="bg-lime-300 h-12">{{ number }}</div>
      </template>
    </div>
    <div>
      <div class="sticky top-0 bg-slate-500">b</div>
      <template v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="number">
        <div class="bg-lime-400 h-24">{{ number }}</div>
      </template>
    </div>
  </div>
</template>
