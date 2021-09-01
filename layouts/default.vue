<template>
  <div id="main">
    <AlertContainer />
    <div>
      <HeaderComponent title="Nuxt-Météo" />
      <div class="relative w-full min-h-screen px-3">
        <div id="RootView" class="w-full h-screen max-w-full">
          <Nuxt />
        </div>
      </div>
      <FooterComponent title="Nuxt-Météo" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { HeaderComponent, FooterComponent, AlertContainer } from '../components';

export default defineComponent({
  name: 'Default',
  components: { HeaderComponent, FooterComponent, AlertContainer },
});
</script>
<style lang="postcss" scoped>
#main {
  position: relative;
  width: 100%;
  max-width: 100%;
  & #RootView {
    padding-top: var(--headerHeight);
    padding-bottom: var(--footerHeight);
  }
}
</style>
