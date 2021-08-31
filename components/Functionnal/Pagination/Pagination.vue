<template>
  <component :is="'div'"> <!--TODO appeler un thumbnail selon la props  --></component>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api';
import { PaginationParams } from '~/models';

export default defineComponent({
  name: 'Pagination',
  props: {
    //TODO prop thumbnail
  },
  setup() {
    const lastSearchParams = ref<PaginationParams | null>(null);
    const hasNextPage = computed<boolean>(
      () => !!lastSearchParams.value!.hasNextPage && lastSearchParams.value!.hasNextPage
    );

    return {};
  },
});
</script>
