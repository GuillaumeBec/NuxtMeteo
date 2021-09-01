<template>
  <div class="relative flex flex-col items-center justify-between w-full h-full">
    <div class="absolute top-0 left-0 flex flex-row justify-between w-1/5">
      <DegreeControler degree="F" />
      <DegreeControler degree="C" />
    </div>
    <div v-if="treatedWind" class="absolute top-0 right-0 flex flex-col items-center justify-start">
      <SvgIcon src="wind" :size="40" />
      <span class="mb-6 text-xs">{{ treatedWind.windSpeed }}</span>
      <SvgIcon src="gust" :size="40" />
      <span class="text-xs">{{ treatedWind.windGust }}</span>
    </div>
    <div class="flex flex-col items-center justify-between h-[75%]">
      <h1 class="text-3xl uppercase">- {{ city.name }} -</h1>
      <div class="flex-nowrap flex flex-row items-center">
        <div class="w-28 flex flex-row items-center justify-start">
          <SvgIcon src="heat" :size="24" />
          <h2 class="ml-2 font-bold text-red-300">{{ treatedTemperature(city.main.temp_max) }}</h2>
        </div>
        <div class="w-28 flex flex-row items-center justify-start">
          <SvgIcon src="cold" :size="24" />
          <h2 class="Cold / ml-2 italic">{{ treatedTemperature(city.main.temp_min) }}</h2>
        </div>
      </div>
      <img :src="`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue-demi';
import { City } from '../../models';
import DegreeControler from './DegreeControler.vue';
import { useWeatherModule } from '~/vuex-modules';
import { celciusToFahreineit, meterBySecondsToKmByHour } from '~/utils';
import { computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CityInfos',
  components: { DegreeControler },
  props: {
    city: { required: true, type: Object as PropType<City> },
  },
  setup(props) {
    //? Temperature
    const {
      state: { unity },
    } = useWeatherModule();

    const treatedTemperature = (value: number) => {
      return unity.value === 'F'
        ? `${celciusToFahreineit(value).toFixed(2)} F°`
        : `${value.toFixed(2)} C°`;
    };

    //? Wind
    const treatedWind = computed(() => {
      if (props.city.wind) {
        return {
          windSpeed: `${meterBySecondsToKmByHour(props.city.wind.speed).toFixed(2)} Km/h`,
          windGust: props.city.wind.gust
            ? `${meterBySecondsToKmByHour(props.city.wind.gust).toFixed(2)} Km/h`
            : 'Non disponible',
          deg: props.city.wind.deg,
        };
      }
    });

    return { treatedTemperature, treatedWind };
  },
});
</script>
<style lang="postcss" scoped>
h1,
.Cold {
  color: var(--mainColor);
}
</style>
