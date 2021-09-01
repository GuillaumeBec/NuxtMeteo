<template>
  <div class="top-16 absolute flex flex-col bg-white">
    <div v-show="showContent" class="w-full"> <slot name="content" /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { oneOfType, string, bool } from 'vue-types';

export default defineComponent({
  name: 'Popin',

  props: {
    title: string(),
    getStyle: oneOfType([Object]),
    isOpen: bool().isRequired,
  },
  setup(props) {
    const showContent = computed<boolean>(() => props.isOpen);

    return {
      showContent,
    };
  },
});
</script>
