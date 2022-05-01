<template>
  <div class="flex flex-row">
    <div class="basis-1/4 md:basis-1/6 lg:basis-2/12 flex flex-row items-center" @click="$router.go(-1)">
      <img
        class="mx-auto ml-0 w-5"
        src="../../../assets/icons/arrow-circle-left.svg"
        alt=""
      />
    </div>
    <div
      class="basis-2/4 md:basis-4/6 lg:basis-8/12 text-center text-slate-100 text-2xl font-bold font-[Nunito]"
    >
      view note
    </div>
    <div
      class="basis-1/4 md:bottom-1/6 lg:basis-2/12 flex flex-row items-center"
    >
      <img
        class="mx-auto mr-0 w-5"
        src="../../../assets/icons/edit.svg"
        alt=""
      />
    </div>
  </div>
</template>
