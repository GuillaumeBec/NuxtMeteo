<template>
  <NuxtLink :to="link" class="flex-0 z-10 flex flex-row justify-between w-12">
    <SvgIcon src="actions/delete" :size="size" />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { RawLocation } from 'vue-router';

export default defineComponent({
  name: 'DeleteButton',
  props: {
    link: { type: [String, Object] as PropType<RawLocation> },
    size: { type: Number },
  },
  setup(props) {
    return {};
  },
});
</script>
