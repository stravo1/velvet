<template>
  <div
    style="height: calc(100% - 15rem)"
    class="mx-2 p-3 overflow-y-scroll grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    <notes-list-member-long v-for="color in colors" :key="color"
      class="row-span-2"
      @click="handleClick"
      :color="color"
    />
    
  </div>
</template>

<script>
import NotesListMemberLong from "./NotesListMemberLong.vue";
export default {
  data() {
    return {
      colors: ["red", "blue", "green", "neutral", "yellow", "violet"],
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ name: "view" });
    },
  },
  components: {
    NotesListMemberLong,
  },
};
</script>
