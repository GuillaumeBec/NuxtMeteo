<template>
  <div class="flex items-center justify-center w-screen h-screen bg-white">
    <Nuxt />
  </div>
</template>
<script>
import { defineComponent, useMeta, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'login',
  head: {},
  setup() {
    useMeta({ title: 'Connexion' });
    return {};
  },
});
</script>
