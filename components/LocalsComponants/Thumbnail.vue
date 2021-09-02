<template>
  <div v-if="forecast.weather" class="flex flex-row w-full my-2">
    <div class="rounded-2xl flex items-center justify-center w-12 h-12 border-2">
      <img :src="`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`" />
    </div>
    <div class="flex flex-col justify-between py-1 ml-3 text-xs">
      <span>{{ treatedInfos.value }}</span>
      <span class="italic text-gray-500">{{ forecast.weather[0].description }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { computed } from '@vue/runtime-dom';
import { Forecast } from '~/models';
import { getBasicDate, getFormatedHoursAndMinutes } from '~/utils';

export default defineComponent({
  name: 'Thumbnail',
  props: {
    forecast: { type: Object as PropType<Forecast>, required: true },
  },
  setup(props) {
    //? Les navigateurs n'ont pas tous le même niveau de compréhension des Objets Date, pour en générer un sur Firefox ou Safari, on doit remplacer les caractères spéciaux par un "/"

    const treatedInfos = computed(
      () =>
        `Le ${getBasicDate(
          new Date(props.forecast.dt_txt.replace(/-/g, '/'))
        )} ${getFormatedHoursAndMinutes(new Date(props.forecast.dt_txt.replace(/-/g, '/')))}`
    );

    return { treatedInfos };
  },
});
</script>
