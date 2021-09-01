<template>
  <div class="relative flex flex-col items-center justify-between w-full h-full">
    <div class="md:bottom-0 -md:top-0 md:w-1/4 absolute left-0 flex flex-row justify-between w-1/5">
      <DegreeControler degree="F" />
      <DegreeControler degree="C" />
    </div>
    <div v-if="treatedWind" class="absolute top-0 right-0 flex flex-col items-center justify-start">
      <SvgIcon src="wind" :size="40" />
      <span class="mb-6 text-xs">{{ treatedWind.windSpeed }}</span>
      <SvgIcon src="gust" :size="40" />
      <span class="text-xs">{{ treatedWind.windGust }}</span>
    </div>
    <div class="flex flex-col items-center justify-between -md:h-[75%]">
      <h1 class="md:text-lg md:mb-3 text-3xl uppercase -md:max-w-[75%] -md:text-center"
        >- {{ city.name }} -</h1
      >
      <div class="flex-nowrap flex flex-row items-center">
        <div class="w-28 flex flex-row items-center justify-start">
          <SvgIcon src="heat" :size="24" />
          <span class="md:text-sm ml-2 font-bold text-red-300">{{
            treatedTemperature(city.main.temp_max)
          }}</span>
        </div>
        <div class="w-28 flex flex-row items-center justify-start">
          <SvgIcon src="cold" :size="24" />
          <span class="Cold / md:text-sm ml-2 italic">{{
            treatedTemperature(city.main.temp_min)
          }}</span>
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
    //? Récupération de l'unité de l'utilisateur
    const {
      state: { unity },
    } = useWeatherModule();

    //? Temperature (Celcius ou Fhn selon le choix de l'utilisateur)
    const treatedTemperature = (value: number) => {
      return unity.value === 'F'
        ? `${celciusToFahreineit(value).toFixed(2)} F°`
        : `${value.toFixed(2)} C°`;
    };

    //? Wind (km heure ou miles selon choix de l'utilisateur)
    const treatedWind = computed(() => {
      if (props.city.wind) {
        if (unity.value === 'F') {
          return {
            windSpeed: `${meterBySecondsToKmByHour(props.city.wind.speed).toFixed(2)} MpH`,
            windGust: props.city.wind.gust
              ? `${meterBySecondsToKmByHour(props.city.wind.gust).toFixed(2)} MpH`
              : 'Non disponible',
          };
        } else {
          return {
            windSpeed: `${meterBySecondsToKmByHour(props.city.wind.speed * 1.6).toFixed(2)} Km/h`,
            windGust: props.city.wind.gust
              ? `${meterBySecondsToKmByHour(props.city.wind.gust * 1.6).toFixed(2)} Km/h`
              : 'Non disponible',
          };
        }
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
