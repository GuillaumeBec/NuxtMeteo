<template>
  <div
    class="Container / flex items-center justify-center rounded-md cursor-pointer"
    :class="{ isSelected }"
    @click.stop="updateDegree"
  >
    <span class="p-2">{{ degree }} °</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api';
import { degreesUnity } from '~/models';
import { bool } from 'vue-types';
import { computed } from '@vue/runtime-core';
import { WeatherModule } from '~/vuex-modules/Weather.module';

export default defineComponent({
  name: 'DegreeControler',
  props: {
    degree: { type: String as PropType<degreesUnity>, required: true },
  },
  setup(props) {
    //! Handle SelectedStyle and available changes
    const isSelected = computed<boolean>(() => props.degree === WeatherModule.state.degreesUnity);

    const updateDegree = () => {
      if (!isSelected.value) {
        WeatherModule.mutations.updateCurrentDegreeUnity(props.degree);
      }
    };

    return { isSelected, updateDegree };
  },
});
</script>
<style lang="postcss" scoped>
.Container {
  border: 2px solid;
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
}

.selected {
  font-weight: bold;
  background-color: rgb(70, 157, 197);
  color: white;
}
</style>
