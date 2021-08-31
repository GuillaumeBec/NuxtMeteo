<template>
  <div
    class="h-80 flex flex-col items-center justify-between p-6 bg-white rounded-md"
    :style="getStyle"
  >
    <SvgIcon :src="alertIcon" />
    <p v-if="alert.text" class="text-center">{{ alert.text }}</p>
    <AlertActions :type="alert.type" @close="handleClose()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@nuxtjs/composition-api';
import { AlertTypes, Alert, StyleValue } from '~/models';
import AlertActions from './AlertActions.vue';

export default defineComponent({
  name: 'AlertComponent',
  components: { AlertActions },
  props: {
    alert: { type: Object as PropType<Alert>, required: true },
  },
  setup(props, { emit }) {
    const alertIcon = computed<string>(() => {
      if (props.alert.type === AlertTypes.Info || props.alert.type === AlertTypes.Confirm) {
        return `alerts/confirm`;
      } else {
        return `alerts/${props.alert.type}`;
      }
    });
    const isError = computed<boolean>(() => props.alert.type === AlertTypes.Error);
    const isInfo = computed<boolean>(() => props.alert.type === AlertTypes.Info);
    const isSuccess = computed<boolean>(() => props.alert.type === AlertTypes.Succes);
    const isConfirm = computed<boolean>(() => props.alert.type === AlertTypes.Confirm);

    //? Method
    const handleClose = () => {
      emit('close', props.alert);
    };

    return {
      props,
      handleClose,
      alertIcon,
      isError,
      isInfo,
      isSuccess,
      isConfirm,
      getStyle: computed<StyleValue>(() => ({
        borderColor: isError ? `var(--redError)` : `rgb(255,255,255)`,
        color: isError ? `var(--redError)` : `var(--mainColor)`,
        textColor: isError ? `var(--redError)` : `var(--mainColor)`,
      })),
    };
  },
});
</script>
