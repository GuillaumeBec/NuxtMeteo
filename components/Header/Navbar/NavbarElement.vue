<template>
  <nav
    class="rounded-2xl flex justify-between max-w-[75%] w-1/2 max-h-full p-4 bg-white"
    :class="`flex-${direction}`"
  >
    <TabElement v-for="tab in tabs" :tab="tab" :key="tab.label" />
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api';
import { NavLink } from '~/models';
import TabElement from './TabElement.vue';
import { string } from 'vue-types';
export default defineComponent({
  name: 'NavbarElement',
  components: { TabElement },
  props: {
    direction: string().isRequired,
    tabs: { type: Array as PropType<NavLink[]>, required: true },
  },
});
</script>
