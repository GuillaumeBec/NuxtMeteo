<template>
  <div
    class=" Container / flex-nowrap md:rounded-2xl flex flex-row items-center justify-center font-semibold rounded-md cursor-pointer"
    :class="{ isSelected: isSelected }"
    @click="updateDegree"
  >
    <span class="lg:text-xs p-2">{{ degree }} °</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api';
import { degreesUnity } from '~/models';
import { useWeatherModule } from '~/vuex-modules';

export default defineComponent({
  name: 'DegreeControler',
  props: {
    degree: { type: String as PropType<degreesUnity>, required: true },
  },
  setup(props) {
    //? Changement de style selon sélection utilisateur
    const {
      state: { unity },
      mutations: { updateCurrentDegreeUnity },
    } = useWeatherModule();

    const isSelected = computed(() => props.degree === unity.value);

    const updateDegree = () => {
      if (!isSelected.value) {
        updateCurrentDegreeUnity(props.degree);
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
  border-color: var(--mainColor);
  color: var(--mainColor);
}

.isSelected {
  font-weight: bolder;
  background-color: rgb(70, 157, 197);
  color: white;
  border-color: #ffffff;
}
</style>
