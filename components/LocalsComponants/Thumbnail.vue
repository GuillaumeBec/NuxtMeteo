<template>
  <div class="flex flex-row w-full my-2">
    <div
      class="rounded-2xl flex items-center justify-center w-12 h-12 border-2"
    >
      Icone
    </div>
    <div class="flex flex-col ml-3 text-xs">
      <span>nom de la ville</span
      ><span class="italic text-gray-500">infos complémentaires</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Thumbnail",
  props: {},
  setup() {
    return {};
  },
});
</script>
