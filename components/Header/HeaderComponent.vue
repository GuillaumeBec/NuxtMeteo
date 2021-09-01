<template>
  <header class="flex-nowrap fixed top-0 flex flex-row items-center justify-center w-full px-3">
    <div
      class=" -lg:text-2xl md:w-full md:text-lg flex items-center justify-between w-2/3 h-full py-3 font-semibold"
    >
      <div class="Sun / h-full"></div>
      <h1 class="xs:text-base text-white">{{ title || 'Nuxt-Starter' }}</h1>
      <div class="Globe / h-full"> </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import NavbarElement from './Navbar/NavbarElement.vue';
import UserPopup from './UserPopup.vue';
import { string } from 'vue-types';

export default defineComponent({
  name: 'HeaderComponent',
  components: { NavbarElement, UserPopup },
  props: {
    title: string(),
  },
  setup() {
    return {};
  },
});
</script>

<style lang="postcss" scoped>
header {
  background-color: var(--mainColor);
  height: var(--headerHeight);
  z-index: 1000;
  @media (max-width: 639px) {
    height: 60px !important;
  }
  & .Globe {
    height: var(--headerHeight);
    width: 92px;
    background: url('../../assets/icons/globe.svg') no-repeat;
    background-size: 80%;
    background-position: center;
    @media (max-width: 550px) {
      background-size: 50%;
      width: 65px;
    }
  }

  & .Sun {
    height: var(--headerHeight);
    width: 92px;
    background: url('../../assets/icons/bigsun.svg') no-repeat;
    background-size: 80%;
    background-position: center;
    @media (max-width: 550px) {
      background-size: 50%;
      width: 65px;
    }
  }
}
</style>
