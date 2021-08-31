<template>
  <div class="flex flex-col items-start w-full my-4">
    <label for="input" class="leading-1 flex items-center justify-start pb-1 text-sm font-semibold"
      >{{ `${label}${required ? '&#x2a;' : ''}` }}
    </label>
    <div class="InputContainer / rounded-2xl w-full p-2">
      <input
        type="text"
        :placeholder="placeholder || label"
        :value="value"
        @input="updateValue($event.target.value)"
        @keydown.enter.prevent="updateValue($event.target.value)"
        @keydown.esc.prevent="updateValue('')"
        class="w-full"
      />
    </div>
    <span v-if="errorMessage" class="ErrorInput">{{ `${errorMessage} '&#x2a;' ` }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api';
import { debounce } from 'lodash';
import { string, bool } from 'vue-types';
export default defineComponent({
  name: 'TextInput',
  props: {
    errorMessage: { type: String as PropType<string> },
    label: { type: String as PropType<string>, required: true },
    placeholder: { type: String as PropType<string> },
    required: { type: Boolean as PropType<Boolean>, default: false },
  },
  setup(_, { emit }) {
    const value = ref<string>('');
    const updateValue = debounce((newValue: string) => {
      value.value = newValue;
      emit('updateValue', value.value);
    }, 300);
    return {
      value,
      updateValue,
    };
  },
});
</script>
<style lang="postcss">
label {
  text-transform: capitalize;
}

.InputContainer {
  border: 2px solid lightgray;
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.4);
}
</style>
