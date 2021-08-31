<template>
  <footer class="absolute bottom-0 flex justify-center w-full px-3">
    <div
      class="
        flex flex-row
        items-center
        justify-between
        text-lg
        font-light
        text-white
        md:min-w-[450px]
      "
    >
      <SvgIcon src="cute-sun" :width="50" />
      <h1 class="py-2">{{ title || 'Nuxt-Starter' }}</h1>
      <span class="text-base"> 2021 - Guillaume Becard</span>
      <SvgIcon src="cute-cloud" :width="50" />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'FooterComponent',
  props: {
    title: { type: String as PropType<string> },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="postcss" scoped>
footer {
  background-color: var(--mainColor);
}
</style>
