<template>
  <div class="flex flex-col">
    <div
      class="InputContainer / rounded-2xl flex flex-row items-center justify-start w-full px-2 py-1"
    >
      <SvgIcon v-if="hasIcon" src="actions/search" :size="24" @click.prevent="updateValue(value)" />
      <input
        type="text"
        class="p-2 max-w-[80%]"
        :placeholder="placeholder"
        :value="value"
        @input="updateValue($event.target.value)"
        @keydown.enter.prevent="updateValue($event.target.value)"
        @keydown.esc.prevent="updateValue('')"
        @blur="close()"
        @focus="open()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from '@nuxtjs/composition-api';
import SvgIcon from '~/components/Medias/SvgIcon.vue';
import { debounce } from 'lodash';

export default defineComponent({
  name: 'SearchBar',
  props: {
    placeholder: { type: String as PropType<string>, default: 'Recherche...' },
    hasIcon: { type: Boolean as PropType<boolean>, default: true },
    isAutocompleteAllowed: { type: Boolean as PropType<boolean>, default: false },
    results: { type: [Array, Object] as PropType<any>, default: () => [] },
  },
  setup(props, { emit }) {
    //? Data
    const value = ref<string>('');
    const isActive = ref<boolean>(false);

    //? Computed
    const autocomplete = computed<Boolean>(() => {
      if (props.isAutocompleteAllowed) {
        if (props.results) {
          return isActive && value.value.length > 0;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });

    //? Methods
    const close = () => (isActive.value = false);
    const open = () => (isActive.value = true);
    const updateValue = debounce((newValue: string) => {
      value.value = newValue;
      emit('updateValue', value.value);
    }, 300);

    return {
      value,
      isActive,
      close,
      open,
      updateValue,
      autocomplete,
    };
  },
  components: { SvgIcon },
});
</script>
<style>
.InputContainer {
  border: 2px solid lightgray;
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.4);
}
</style>
