<template>
  <div class="bg-neutral-800 fixed w-full h-16 rounded-t-xl bottom-0 flex text-neutral-300 shadow-2xl">
    <div class="w-1/3 h-full flex justify-center">
      <slot name="option_one"> </slot>
    </div>
    <div class="w-1/3 h-full flex justify-center">
      <slot name="option_two"></slot>
    </div>
    <div class="w-1/3 h-full flex justify-center">
      <slot name="option_three"></slot>
    </div>
  </div>
</template>
