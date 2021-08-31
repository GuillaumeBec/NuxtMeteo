<template>
  <button>
    <SvgIcon src="actions/download" :size="size" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'DownloadButton',
  props: {
    link: { type: Object as PropType<Location> },
    size: { type: Number },
  },
  setup() {
    return {};
  },
});
</script>
