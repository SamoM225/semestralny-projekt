import { defineStore } from 'pinia';

interface ChartConfig {
  series: Array<{ name: string; data: number[] }>;
  options: {
    chart?: Record<string, any>;
    dataLabels?: Record<string, any>;
    stroke?: Record<string, any>;
    title?: Record<string, any>;
    grid?: Record<string, any>;
    xaxis?: Record<string, any>;
    [key: string]: any; 
  };
}

export const useChartStore = defineStore('chart', {
  state: () => ({
    charts: {} as Record<string, ChartConfig>,
  }),
  actions: {
    addChart(id: string, config: ChartConfig) {
      this.charts[id] = config;
    },
    updateSeries(id: string, newSeries: Array<{ name: string; data: number[] }>) {
      if (this.charts[id]) {
        this.charts[id].series = newSeries;
      }
    },
    updateOptions(id: string, newOptions: Partial<ChartConfig['options']>) {
      if (this.charts[id]) {
        this.charts[id].options = { ...this.charts[id].options, ...newOptions };
      }
    },
    removeChart(id: string) {
      delete this.charts[id];
    },
  },
});
