<template>
  <div class="flex flex-row justify-center w-full">
    <div @click="closeAlert()" v-if="isError" class="w-full">
      <Action text="Revenir en arrière" theme="red" />
    </div>
    <div v-if="isInfo" class="w-[45%]" @click="closeAlert()">
      <Action text="Annuler" theme="red" />
    </div>
    <div v-if="isSuccess" class="w-[45%]" @click="closeAlert()"><Action text="Ok" /></div>
    <div v-if="isConfirm" class="w-[75%] flex flex-row justify-between" @click="closeAlert()">
      <Action text="Ok" />
      <div class="w-full ml-2" @click="closeAlert()"> <Action text="Annuler" theme="red" /> </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from '@nuxtjs/composition-api';
import Action from '../Buttons/Action.vue';
import { string } from 'vue-types';
import { AlertTypes } from '~/models';
export default defineComponent({
  name: 'AlertActions',
  props: {
    type: string().isRequired,
  },
  setup(props, { emit }) {
    //TODO actions par AlertType
    const closeAlert = () => {
      emit('close');
    };
    //TODO Actions handler
    return {
      closeAlert,
      isError: computed<boolean>(() => props.type === AlertTypes.Error),
      isInfo: computed<boolean>(() => props.type === AlertTypes.Info),
      isSuccess: computed<boolean>(() => props.type === AlertTypes.Succes),
      isConfirm: computed<boolean>(() => props.type === AlertTypes.Confirm),
    };
  },
  components: { Action },
});
</script>
