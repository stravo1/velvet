<template>
  <div class="h-screen w-screen bg-neutral-900 absolute">
    <div class="sticky top-0 flex flex-col p-4 bg-neutral-900 gap-y-5 drop-shadow-lg">
      <top-bar />
    </div>
    <div style="height: calc(100vh - 8rem)" class="p-4 overflow-y-scroll">
      <content />
    </div>
    <bottom-bar>
      <template #option_one>
        <img class="w-6" src="../assets/icons/share.svg" alt="" />
        <div class="hidden md:block my-auto pl-2 hover:text-neutral-50">
          Notes
        </div>
      </template>

      <template #option_two
        ><img class="w-6" src="../assets/icons/star-1.svg" alt="" />
        <div class="hidden md:block my-auto pl-2 hover:text-neutral-50">
          Feed
        </div></template
      >

      <template #option_three
        ><img class="w-6" src="../assets/icons/trash.svg" alt="" />
        <div class="hidden md:block my-auto pl-2 hover:text-neutral-50">
          Profile
        </div></template
      >
    </bottom-bar>
  </div>
</template>

<script>
import TopBar from "./sub-components/view/TopBar.vue";
import BottomBar from "./sub-components/misc/BottomBar.vue";
import Content from "./sub-components/view/Content.vue";
export default {
  components: {
    TopBar,
    BottomBar,
    Content,
  },
};
</script>
