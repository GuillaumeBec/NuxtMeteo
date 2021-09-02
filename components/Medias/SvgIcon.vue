<template>
  <component
    class="svg-container"
    :class="{
      relativeSize: size,
      'cursor-pointer': button,
    }"
    :type="button ? 'button' : ''"
    :is="button ? 'button' : 'div'"
    v-html="require(`~/assets/icons/${$props.src}.svg?raw`)"
    :style="{
      height: `${calculatedHeight}`,
      width: `${calculatedWidth}`,
    }"
  >
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import { string, bool, number } from 'vue-types';
export default defineComponent({
  name: 'SvgIcon',
  //TODO color handling
  props: {
    src: string().isRequired,
    button: bool().def(false),
    size: number(),
    colors: { type: [String, Object] as PropType<string | Record<string, boolean>> },
    width: number(),
    height: number(),
  },
  setup(props) {
    const calculatedWidth = computed<string | undefined>(() => {
      if (props.width) return props.width + 'px';
      else if (props.height) return 'auto';
      else if (props.size) return props.size + 'px';
      else return undefined;
    });

    const calculatedHeight = computed<string | undefined>(() => {
      if (props.height) return props.height + 'px';
      else if (props.width) return 'auto';
      else if (props.size) return props.size + 'px';
      else return undefined;
    });

    return {
      calculatedWidth,
      calculatedHeight,
    };
  },
});
</script>

<style lang="postcss">
.svg-container {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  float: left;
  max-height: 100%;
  max-width: 100%;

  svg {
    height: 100%;
    width: 100%;
  }
}
</style>
