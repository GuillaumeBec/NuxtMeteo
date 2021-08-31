<template>
  <div
    v-if="showAlert"
    class="AlertContainer / fixed top-0 left-0 flex items-center justify-center"
    @click.self="handleClick()"
  >
    <div
      class="w-[50%] fixed"
      @mouseout="handleMouseOut()"
      @mouseover="handleMouseOver()"
      v-for="(alert, index) in alerts"
      :key="index"
    >
      <AlertComponent :alert="alert" @close="closeAlert(alert)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';
import { Alert } from '@models';
import AlertComponent from './AlertComponent.vue';
import { AlertModule, useAlertModule } from '~/vuex-modules';
export default defineComponent({
  name: 'AlertContainer',
  components: { AlertComponent },

  props: {},
  setup(props) {
    const alertStore = useAlertModule();

    //? Computed
    const showAlert = computed<Boolean>(() => alertStore.state.alertsList.value.length > 0);
    const currentAlert = computed<Alert>(() => alertStore.getters.currentAlert);
    const alerts = computed<Array<Alert>>(() => alertStore.state.alertsList.value);
    const closable = ref<Boolean>(true);

    //? Methods
    const handleMouseOut = () => {
      closable.value = true;
    };

    const handleMouseOver = () => {
      closable.value = false;
    };

    const handleClick = () => {
      if (currentAlert.value && closable.value === true) {
        closeAlert(currentAlert.value);
      }
    };

    const closeAlert = (alert: Alert) => {
      alertStore.mutations.deleteAlerte(alert);
    };

    return {
      alerts,
      showAlert,
      currentAlert,
      handleMouseOut,
      handleMouseOver,
      handleClick,
      closeAlert,
    };
  },
});
</script>
<style lang="postcss" scoped>
.AlertContainer {
  min-height: 100vh;
  min-width: 100vw;
  z-index: 100000;
  background: rgba(40, 40, 40, 0.7);
}
</style>
