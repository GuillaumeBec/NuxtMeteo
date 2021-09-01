<template>
  <div class="flex flex-row flex-wrap items-center justify-center w-full h-full">
    <div class="flex flex-row justify-between w-3/4">
      <div class="flex flex-col">
        <SearchBar @updateValue="checkValue" />
        <div v-if="cityForecasts" class="flex flex-col mt-5">
          <span class="text-sm italic text-gray-400"> prévisions jours suivants </span>
          <div class="flex flex-col h-[290px] my-3 overflow-y-scroll">
            <Thumbnail v-for="(forecast, index) in cityForecasts" :forecast="forecast" />
          </div>
        </div>
      </div>
      <div class="rounded-2xl flex items-center justify-center w-2/3 p-6 border-2 h-[400px]">
        <CityInfos v-if="city" :city.sync="city" />
        <div v-else-if="loading" class="flex items-center justify-center w-[33%] h-[46%]">
          <Spinner />
        </div>
        <div v-else>
          <p class="w-full h-full text-4xl italic text-gray-500"> Chercher quelque chose </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';
import { SearchBar, Thumbnail, CityInfos } from '~/components';
import { City } from '../models';
import { useWeatherModule, WeatherModule } from '~/vuex-modules/Weather.module';

export default defineComponent({
  name: 'Meteo',
  head: { title: 'Nuxt-Meteo' },
  components: { SearchBar, Thumbnail, CityInfos },
  setup() {
    const loading = ref<boolean>(false);
    //! - Handle Search

    const {
      actions: { getWeather },
      state: { currentCity, forecasts },
    } = useWeatherModule();

    async function checkValue(newValue: string) {
      loading.value = true;
      await getWeather(newValue)
        .catch((e) => console.log)
        .finally(() => (loading.value = false));
    }

    const city = computed((): City | null => currentCity.value);
    const cityForecasts = computed((): Object | null => forecasts.value);
    return { loading, checkValue, city, cityForecasts };
  },
});
</script>
