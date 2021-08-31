<template>
  <div class="center flex flex-row w-full">
    <hr :style="{ border: getStyle.border }" :class="`${getStyle.space} w-[${getStyle.width}]`" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { string } from 'vue-types';

export default defineComponent({
  name: 'Separator',
  props: {
    width: string().def('100%'),
    color: string().def('main'),
    space: string().def('2'),
    thick: string().def(''),
  },
  setup(props) {
    //TODO fix borders
    return {
      getStyle: computed(() => ({
        width: `${props.width}`,
        space: `my-${props.space}`,
        border: `${props.thick} solid ${props.color}`,
      })),
    };
  },
});
</script>
<style>
.main {
  color: var(--mainColor);
}
</style>
