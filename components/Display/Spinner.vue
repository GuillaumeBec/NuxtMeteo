<template>
  <div class="relative flex items-center justify-center w-full h-full" :style="getSpinnerStyle">
    <div class="Loading / flex items-center justify-center w-full h-full" :class="theme"> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { string, number } from 'vue-types';
export default defineComponent({
  name: 'Spinner',
  props: {
    theme: string().def('main'),
    width: string().def('100'),
    height: string().def('100'),
    size: number(),
  },
  setup(props) {
    const calculatedWidth = computed<string | undefined>(() => {
      if (props.width) return props.width + '%';
      else if (props.height) return 'auto';
      else if (props.size) return props.size + '%';
      else return undefined;
    });

    const calculatedHeight = computed<string | undefined>(() => {
      if (props.height) return props.height + '%';
      else if (props.width) return 'auto';
      else if (props.size) return props.size + '%';
      else return undefined;
    });
    const getSpinnerStyle = { width: calculatedWidth.value, height: calculatedHeight.value };
    return { getSpinnerStyle };
  },
});
</script>
<style lang="postcss" scoped>
.Loading {
  color: transparent;
  content: '';
  border: 5px solid;
  border-radius: 999999%;
  transform: rotate(0.16turn);
  animation: loading 1s ease infinite;
}

@keyframes loading {
  /* Safari support */
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}

.white {
  border-color: rgba(255, 255, 255, 0.5);
  border-top-color: rgb(255, 255, 255);
}

.black {
  border-color: rgba(255, 255, 255, 0.5);
  border-top-color: rgb(24, 0, 0);
}

.main {
  border-color: rgba(255, 255, 255, 0.5) !important;
  border-top-color: var(--mainColor) !important;
}
</style>
