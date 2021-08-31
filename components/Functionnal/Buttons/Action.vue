<template>
  <button
    class="Action / rounded-3xl flex flex-row items-center w-full py-2"
    :class="[`justify-${icon ? 'between' : 'center'}`, theme || 'main', { disabled }]"
    @click="handleClick"
  >
    <span>{{ text }}</span>
    <SvgIcon v-if="icon" :src="icon" />
    <div v-if="loading" class="max-w-[20%] h-auto ml-2">
      <Spinner :theme="theme === 'white' || 'main' ? 'black' : 'white'" />
    </div>
  </button>
</template>
<script lang="ts">
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api';
import { string, bool, oneOfType, func } from 'vue-types';
import { computed } from '@vue/runtime-core';
import { createLink } from '~/utils';

export default defineComponent({
  name: 'Action',
  props: {
    icon: string(),
    text: string().isRequired,
    theme: string().def('main'),
    disabled: bool().def(false),
    //TODO form + améliorer les types
    form: {},
    handler: func(),
    link: oneOfType([Object]),
  },
  setup(props, { emit }) {
    //TODO handle local loading
    const loading = ref<Boolean>(false);

    //? Computed
    const isExternalLink = computed<Boolean>(
      () => !!props.link && props.link.path.startsWith('http')
    );

    //? HANDLECLICK
    const router = useRouter();
    async function handleClick(e: MouseEvent) {
      e.preventDefault();
      if (!props.disabled) {
        loading.value = true;
        console.log('ok', loading.value);
        if (props.handler) {
          try {
            await props.handler();
          } finally {
            loading.value = false;
          }
        } else if (props.link) {
          if (isExternalLink.value) {
            createLink(props.link.path, true);
          } else {
            router.push(props.link.path);
          }
        } else if (props.form) {
          //TODO
          emit('submit', props.form);
        }
      }
    }

    return { handleClick, loading };
  },
});
</script>
<style lang="postcss" scoped>
.Action:hover:not(.disabled) {
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--w110);
}

.main {
  color: var(--mainText);
  background-color: white;
  border: 0.5px solid lightgray;
}

.white {
  background-color: white;
  color: black;
  border: 1px solid lightgray;
  box-shadow: var(--shadow);
}

.red {
  background-color: var(--buttonRed);
  color: white;
}

.black {
  background-color: black;
  color: white;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.5 !important;
}
</style>
