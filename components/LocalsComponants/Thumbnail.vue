<template>
  <div v-if="forecast.weather" class="flex flex-row w-full my-2">
    <div class="rounded-2xl flex items-center justify-center w-12 h-12 border-2">
      <img :src="`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`" />
    </div>
    <div class="flex flex-col ml-3 text-xs">
      <span>températures</span>
      <span class="italic text-gray-500">{{ forecast.weather[0].description }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { Forecast } from '~/models';
export default defineComponent({
  name: 'Thumbnail',
  props: {
    forecast: { type: Object as PropType<Forecast>, required: true },
  },
  setup() {
    return {};
  },
});
</script>
