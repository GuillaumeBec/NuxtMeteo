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
import { computed, defineComponent, PropType, ref, watch } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SvgIcon',
  //TODO color handling
  props: {
    src: { type: String as PropType<String>, required: true },
    button: { type: Boolean as PropType<Boolean>, default: false },
    size: { type: Number as PropType<Number> },
    colors: { type: [String, Object] as PropType<string | Record<string, boolean>> },
    width: { type: Number },
    height: { type: Number },
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
