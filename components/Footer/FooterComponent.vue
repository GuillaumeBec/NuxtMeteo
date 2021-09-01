<template>
  <footer class="-md:py-2 absolute bottom-0 flex justify-center w-full px-3">
    <div
      class=" sm:w-full flex flex-row items-center justify-between w-3/4 text-lg font-light text-white"
    >
      <div class="flex flex-row items-center w-full">
        <SvgIcon src="cute-sun" :width="50" />
        <h1 class="sm:text-xs py-2 text-base">{{ title || 'Nuxt-Starter' }}</h1>
      </div>
      <div class="flex flex-row items-center justify-end w-full">
        <span class="sm:text-xs sm:text-center mr-2 text-base"> 2021 - Guillaume Becard</span>
        <SvgIcon src="cute-cloud" :width="50" />
      </div>
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
  height: var(--footerHeight);
  background-color: var(--mainColor);
  @media (max-width: 767px) {
    height: 50px !important;
  }
}
</style>
