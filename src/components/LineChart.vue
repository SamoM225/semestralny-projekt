<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    VueApexCharts
  },
  props: {
    series: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    type: {
      type: String,
      default: 'bar'
    }
  },
  data() {
    return {
      chartOptions: {
        ...this.options,
        chart: {
          ...this.options.chart,
          height: this.options.chart?.height || 350,
          type: this.options.chart?.type || 'line',
          zoom: {
            enabled: false
          }
        }
      }
    }
  },
  methods: {
    updateSeries(newSeries) {
      this.$emit('update:series', newSeries)
    },
    updateOptions(newOptions) {
      this.$emit('update:options', newOptions)
    }
  }
}
</script>

<template>
    <div>
        <v-card>
            <v-card-text>
                <VueApexCharts :type="type" height="350" :options="chartOptions" :series="series" @update:series="updateSeries" @update:options="updateOptions" />
            </v-card-text>
        </v-card>
    </div>
</template>


