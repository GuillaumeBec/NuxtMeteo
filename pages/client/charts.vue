<template>
  <div class="flex flex-row flex-wrap items-center justify-center w-full">
    <div class="flex flex-col items-center justify-center w-full">
      <h1 class="my-6"> Charts - PAGE</h1>
      <DoughnutChart :chartData="donughtTestData" :options="donughtOptions" :plugins="plugins" />
      <LineChart :chartData="lineTestData" :options="lineOptions" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables, ChartData, ChartOptions } from 'chart.js';
import { green } from '~/styles/colors.module';
import { _DeepPartialObject } from 'chart.js/types/utils';

const Background = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart: Chart) => {
    const ctx = chart.canvas.getContext('2d');
    if (ctx) {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'lightGreen';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  },
};

Chart.register(...registerables);

export default defineComponent({
  name: 'closePage',
  components: { DoughnutChart, LineChart },
  setup() {
    const plugins = [Background];

    //! Graph 1 - Donught
    const donughtOptions = ref<ChartOptions<'doughnut'>>({
      responsive: true,
      // onResize: () => console.error('resize le camembert'),
      plugins: {
        title: {
          display: true,
          text: 'Cest le titre',
          padding: {
            top: 10,
            bottom: 10,
          },
          color: green,
          fullSize: true,
        },
        legend: {
          display: true,
          title: {
            display: true,
            text: "C'est la légende",
            color: '#123E6B',
            padding: { top: 10, bottom: 10 },
          },
          position: 'bottom',
        },
      },
    });
    const donughtTestData = ref<ChartData<'doughnut'>>({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    });

    //! Graph 2 - Line
    const lineOptions = ref<ChartOptions<'line'>>({
      responsive: true,
      maintainAspectRatio: false,
      // onResize: () => console.log('resize la ligne'),
      plugins: {
        title: {
          display: true,
          text: 'Cest le titre',
          padding: {
            top: 10,
            bottom: 10,
          },
          color: green,
          fullSize: true,
        },
        legend: {
          display: true,
          title: {
            display: true,
            text: "C'est la légende",
            color: '#123E6B',
            padding: { top: 10, bottom: 10 },
          },
          position: 'bottom',
        },
      },
    });
    const lineTestData = ref<ChartData<'line'>>({
      labels: [2000, 2010, 2020, 2030, 2040, 2050],
      datasets: [
        {
          data: [30, 40, 60, 70, 5, 23, 12],
          label: 'Paris',
          fill: false,
          borderColor: '#77CEFF',
        },
        {
          data: [15, 76, 34, 54, 13, 19, 11],
          label: 'Bordeaux',
          fill: true,
          borderColor: '#f0f',
        },
      ],
    });
    return { donughtTestData, donughtOptions, lineTestData, lineOptions, plugins };
  },
});
</script>
