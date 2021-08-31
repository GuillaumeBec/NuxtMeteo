<template>
  <div class="relative flex items-center justify-center">
    <div class="loading flex items-center justify-center h-full" :class="theme"> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { string } from 'vue-types';
export default defineComponent({
  name: 'Spinner',
  props: {
    theme: string().def('white'),
  },
  setup(props) {
    return {};
  },
});
</script>
<style lang="postcss" scoped>
.loading {
  color: transparent;
  content: '';
  width: 25px;
  height: 25px;
  border: 5px solid;
  border-radius: 50%;
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
</style>
