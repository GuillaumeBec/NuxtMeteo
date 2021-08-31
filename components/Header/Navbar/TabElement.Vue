<template>
  <NuxtLink :to="tab.link">
    <div class="NavTab / flex flex-row items-center justify-between max-h-full">
      <SvgIcon v-if="tab.icon" :src="tab.icon" :size="24" />
      <span>{{ tab.label }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api';
import { NavLink } from '~/models';

export default defineComponent({
  name: 'TabElement',
  props: {
    tab: { type: Object as PropType<NavLink>, required: true },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="postcss">
.nuxt-link-active {
  & .NavTab {
    border-bottom: 3px black solid;
    & span {
      font-weight: bold;
    }
  }
}
</style>
