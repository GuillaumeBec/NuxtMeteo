<template>
  <div class="w-1/2 max-h-full">
    <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options" />
    <button @click="shuffleData">Shuffle</button>
  </div>
</template>

<script lang="ts">
import { shuffle } from 'lodash';
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';
import { DoughnutChart, ExtractComponentData } from 'vue-chart-3';
import { Chart, DoughnutController, ArcElement, Tooltip, ChartData, ChartOptions } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip);

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const doughnutRef = ref<ExtractComponentData<typeof DoughnutChart>>();

    const options = ref<ChartOptions<'doughnut'>>({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    });

    const testData = computed<ChartData<'doughnut'>>(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    function shuffleData() {
      data.value = shuffle(data.value);
    }

    return { testData, shuffleData, doughnutRef, options };
  },
});
</script>
