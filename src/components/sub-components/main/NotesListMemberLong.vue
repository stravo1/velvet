<template>
  <div
    :class="{
      'bg-rose-400 border-rose-600': color == 'red',
      'bg-sky-400 border-sky-600': color == 'blue',
      'bg-teal-400 border-teal-600': color == 'green',
      'bg-amber-400 border-amber-600': color == 'yellow',
      'bg-violet-400 border-violet-600': color == 'violet',
      'bg-zinc-400 border-neutral-600': color == 'neutral',
    }"
    class="border-2 rounded-xl relative min-h-[14rem] font-[Poppins]"
  >
    <div
      class="elliptic_h p-4 my-1 text-left font-medium max-h-20 text-xl overflow-y-scroll"
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
      architecto.
    </div>
    <div
      class="elliptic_p px-4 my-4 h-24 text-left overflow-y-scroll font-[Roboto]"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis
      vitae maiores fuga ullam quod saepe facilis et aperiam dolorum? Amet quae
      maiores nostrum necessitatibus similique eveniet sint reiciendis
      repellendus?
    </div>
    <div class="flex w-full py-4 bottom-0 absolute">
      <div class="basis-3/4 mx-4 text-left text-xs truncate">
        Sample Tag | Goals | Hashtags
      </div>
      <div class="basis-1/4 mx-8 text-right text-xs">21/02/2022</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gg: true,
    };
  },
  methods: {
    getColorClassName() {
      return "bg-red-400 border-red-600";
    },
  },
  props: {
    color: String,
  },
};
</script>

<style>
.elliptic_p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 4.5rem;
}
.elliptic_h {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 4.5rem;
}
</style>
