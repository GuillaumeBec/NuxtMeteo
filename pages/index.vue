<template>
  <div class="sm:items-start flex flex-row items-center justify-center w-full h-full">
    <div class="md:w-full flex flex-row flex-wrap justify-between w-5/6">
      <div class="md:w-full md:mb-2 -md:mr-3 flex flex-col w-[30%]">
        <SearchBar @updateValue="checkValue" />
        <div v-if="cityForecasts" class="md:my-2 flex flex-col mt-5">
          <span class="text-sm italic text-center text-gray-400"> prévisions jours suivants </span>
          <div
            class="
              ScrollBar
              shadow-lg
              rounded-lg
              px-2
              flex flex-col
              -md:h-[290px]
              my-3
              md:my-1
              overflow-y-scroll
              md:max-h-[290px]
              sm:max-h-[200px]
            "
          >
            <Thumbnail
              v-for="(forecast, index) in cityForecasts"
              :forecast="forecast"
              :key="index"
            />
          </div>
        </div>
      </div>
      <div
        class="
          rounded-2xl
          flex
          items-center
          justify-center
          w-2/3
          md:w-full
          -md:p-6
          p-1
          border-2
          -md:h-[400px]
          md:h-[200px]
        "
      >
        <CityInfos v-if="city" :city.sync="city" />
        <Spinner v-else-if="loading" width="20" height="42" />
        <div v-else>
          <p class="md:text-lg w-full h-full text-4xl italic text-center text-gray-500">
            Chercher une ville à travers le monde
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';
import { SearchBar, Thumbnail, CityInfos } from '~/components';
import { City, Forecast } from '../models';
import { useWeatherModule } from '~/vuex-modules/Weather.module';

export default defineComponent({
  name: 'Meteo',
  head: { title: 'Nuxt-Meteo' },
  components: { SearchBar, Thumbnail, CityInfos },
  setup() {
    const loading = ref<boolean>(false);

    //? Call le module vuex à chaque event input du composant searchBar

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

    //? Recuperation des données dynamiques dans le module

    const city = computed((): City | null => currentCity.value);
    const cityForecasts = computed((): Array<Forecast> | null => forecasts.value);
    return { loading, checkValue, city, cityForecasts };
  },
});
</script>
<style lang="postcss" scoped>
.Forecasts {
  box-shadow: 0 0 5px inset rgba(0, 0, 0, 0.1);
}
</style>
