<template>
  <div class="relative flex flex-col items-center justify-between w-full h-full py-10">
    <div class="absolute top-0 left-0 flex flex-row justify-between w-1/5">
      <DegreeControler degree="F" />
      <DegreeControler degree="C" />
    </div>
    <div v-if="city.wind" class="absolute top-0 right-0 flex flex-col items-center justify-between">
      <SvgIcon src="wind" :size="40" />
      <span>{{ city.wind.speed }}</span>
      <span>{{ city.wind.gust }}</span>
    </div>
    <h1 class="text-3xl uppercase">- {{ city.name }} -</h1>
    <p>{{ city.weather[0].description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue-demi';
import { City } from '../../models';
import DegreeControler from './DegreeControler.vue';

export default defineComponent({
  name: 'CityInfos',
  components: { DegreeControler },
  props: {
    city: { required: true, type: Object as PropType<City> },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="postcss" scoped>
h1 {
  color: var(--mainColor);
}
</style>
