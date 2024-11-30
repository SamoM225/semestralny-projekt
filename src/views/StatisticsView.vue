<script>
import { useChartStore } from '@/stores/chartStore';
import LineChart from '@/components/LineChart.vue';
import tableData from '../datas/tableData.json';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      chartStore: useChartStore(),
    };
  },
  created() {
    tableData.forEach((config) => {
      this.chartStore.addChart(config.id, { series: config.series, options: config.options });
    });
  },
};
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <span class="flex" v-for="(chartId, index) in Object.keys(chartStore.charts)" :key="chartId">
      <LineChart
        :type="chartStore.charts[chartId].options.chart.type"
        :series="chartStore.charts[chartId].series"
        :options="chartStore.charts[chartId].options"
        class="flex w-full"
      />
    </span>
  </div>
</template>
