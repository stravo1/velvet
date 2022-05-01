<template>
  <div class="h-screen bg-neutral-900">

    <div class="flex flex-col p-4 bg-neutral-900 gap-y-5">

      <title-bar />
      <top-nav
        :tabs="['My Notes', 'Starred', 'Trash']"
        @change="handleTopNavChange"
      />

    </div>

    <tags />

    <notes-list />

    <bottom-bar>

      <template #option_one>
        <img class="w-6" src="../assets/icons/document-text-1.svg" alt="" />
        <div class="hidden md:block my-auto pl-2 hover:text-neutral-50">Notes</div>
      </template>

      <template #option_two
        ><img class="w-6" src="../assets/icons/main-component.svg" alt="" />
        <div class="hidden md:block my-auto pl-2 hover:text-neutral-50">Feed</div></template
      >

      <template #option_three
        ><img class="w-6" src="../assets/icons/frame.svg" alt="" />
        <div class="hidden md:block my-auto pl-2 hover:text-neutral-50">Profile</div></template
      >

    </bottom-bar>

  </div>

</template>

<script>
import TitleBar from "./sub-components/main/TitleBar.vue";
import TopNav from "./sub-components/main/TopNav.vue";
import BottomBar from "./sub-components/misc/BottomBar.vue";
import Tags from "./sub-components/main/Tags.vue";
import NotesList from "./sub-components/main/NotesList.vue"
import { ref } from "vue";

export default {
  methods: {
    handleTopNavChange(tab) {
      console.log(tab);
    },
  },
  components: {
    TitleBar,
    TopNav,
    BottomBar,
    Tags,
    NotesList
  },
};

const count = ref(0);
</script>
