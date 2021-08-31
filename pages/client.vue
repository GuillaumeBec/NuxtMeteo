<template>
  <div class="flex flex-1">
    <div class="flex w-full">
      <NuxtChild />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Admin',
  layout: 'default',
});
</script>
