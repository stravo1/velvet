<template>
  <div class="flex">
    <div
      class="bg-neutral-600 flex flex-row rounded-md items-center justify-center h-11 font-nunito text-neutral-50 font-bold text-lg left-0 w-screen md:w-1/2 relative"
      :class="[alignment == true ? 'md:right-1/2' : 'md:left-1/2']"
    >
      <div
        v-for="tab in tabs"
        :key="tab"
        class="transition basis-1/3 hover:bg-neutral-500 h-11 rounded-md flex items-center justify-center"
        :class="[
          activeTab == tab
            ? 'bg-neutral-200 hover:bg-neutral-200 text-neutral-800'
            : '',
        ]"
        @click="handleSelect(tab)"
      >
        <a href="" @click.prevent="">{{ tab }}</a>
      </div>
    </div>
    <div
      class="relative m-auto hidden md:block w-5"
      :class="[alignment == true ? 'mr-0' : 'ml-0 right-1/2']"
      @click="toggleSide"
    >
      <img class="w-5" :src="source" />
    </div>
  </div>
</template>

<script>
import right from "../../../assets/icons/arrow-right-2.svg"
import left from "../../../assets/icons/arrow-left-3.svg"
export default {
  data() {
    return {
      activeTab: this.tabs[0],
      alignment: true,
    };
  },
  methods: {
    handleSelect(tab) {
      this.activeTab = tab;
      this.$emit("change", tab);
    },
    toggleSide(){
      this.alignment = !this.alignment
    }
  },
  computed:{
      source(){
          if(this.alignment) return right
          return left
      }
  },
  props: {
    tabs: Array,
  },
  emits: ["change"],
};
</script>
