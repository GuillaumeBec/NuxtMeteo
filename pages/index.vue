<template>
  <div class="flex flex-row flex-wrap items-center justify-center w-full h-full">
    <div class="flex flex-row justify-between w-3/4">
      <div class="flex flex-col">
        <SearchBar @updateValue="checkValue" />
        <div class="flex flex-col mt-5">
          <Thumbnail />
        </div>
      </div>
      <div class="rounded-2xl flex items-center justify-center w-1/2 p-6 border-2">
        <CityInfos v-if="city" :city="city" />
        <div v-else-if="loading" class="flex items-center justify-center w-[75%] h-[75%]">
          <Spinner />
        </div>

        <div v-else>
          <h1 class="w-full h-full italic text-gray-500"> Chercher quelque chose </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { SearchBar, Thumbnail, CityInfos } from '~/components';
import axios from 'axios';
import { City } from '../models';
import { mainKey } from '../api/keys';
import { WeatherModule } from '~/vuex-modules/Weather.module';
export default defineComponent({
  name: 'Meteo',
  head: { title: 'Nuxt-Meteo' },
  components: { SearchBar, Thumbnail, CityInfos },
  props: {},

  setup() {
    const loading = ref<boolean>(false);

    // - Handle Search
    const city = ref<City>();

    async function checkValue(newValue: string) {
      loading.value = true;
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${newValue}&?&APPID=${mainKey}&lang=fr`
        )
        .then((results) => {
          city.value = results.data;
          WeatherModule.updateState({ currentCity: results.data });
        })
        .catch((e) => console.log(e))
        .finally(() => (loading.value = false));
      console.log(city.value);
    }

    return { loading, checkValue, city };
  },
});
</script>
