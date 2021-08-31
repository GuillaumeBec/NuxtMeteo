<template>
  <div class="flex flex-col" v-click-outside="close">
    <h2 class="p-4 bg-white rounded-md cursor-pointer" @click="handleDisplayContent"
      >Mes favoris</h2
    >
    <Popin :isOpen="isOpen">
      <template #content>
        <div class="flex flex-col w-full">
          <div class="flex flex-col">
            <h1 class="p-4 bg-white rounded-md cursor-pointer">Mon profil</h1>
            <h1 class="p-4 bg-white rounded-md cursor-pointer">Mes Stats</h1>
            <h1 class="p-4 bg-white rounded-md cursor-pointer">
              <Action text="Déconnexion" theme="red" :handler="testspinner" />
            </h1>
          </div>
        </div>
      </template>
    </Popin>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';
import { clickOutside } from '~/utils';

export default defineComponent({
  name: 'UserPopup',
  directives: { clickOutside },
  props: {},
  setup() {
    const testspinner = () => {
      setTimeout(() => console.log('déconnexion'), 300);
    };

    const isOpen = ref<boolean>(false);

    const handleDisplayContent = () => {
      isOpen.value = !isOpen.value;
    };

    const close = () => {
      isOpen.value = false;
    };

    return {
      close,
      handleDisplayContent,
      testspinner,
      isOpen,
    };
  },
});
</script>
