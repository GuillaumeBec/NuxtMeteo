<template>
  <header
    class="flex-nowrap lg:pr-12 fixed top-0 flex flex-row items-center justify-between w-full px-3"
  >
    <div
      class=" lg:text-2xl flex flex-row items-center justify-between h-full ml-12 text-4xl font-semibold"
    >
      <NuxtLink to="/">
        <div class="flex-nowrap flex flex-row items-center justify-center h-full py-3">
          <div class="Sun / h-full"></div>
          <h1 class="text-2xl text-white">{{ title || 'Nuxt-Starter' }}</h1></div
        >
      </NuxtLink>
    </div>
    <NavbarElement :tabs="tabs" direction="row" />
    <UserPopup />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { NavLink } from '~/models';
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
    const tabs: NavLink[] = [
      {
        label: 'Documentation',
        link: '/client/doc',
        icon: 'actions/edit',
      },
      { label: 'Contact', link: '/client/charts', icon: 'links/contact' },
      { label: 'Download', link: '/client/Download', icon: 'actions/download' },
    ];

    return {
      tabs,
    };
  },
});
</script>

<style lang="postcss" scoped>
header {
  background-color: var(--mainColor);
  height: var(--headerHeight);
  z-index: 1000;
  & .Sun {
    height: var(--headerHeight);
    width: 92px;
    background: url('../../assets/icons/bigsun.svg') no-repeat;
    background-size: 80%;
    background-position: center;
  }

  .nuxt-link {
    height: 100% !important;
  }
}
</style>
