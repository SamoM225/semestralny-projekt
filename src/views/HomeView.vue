<script>
import RegisterForm from '../components/RegisterForm.vue';
import ProgressCircles from '@/components/ProgressCircles.vue';
import transactionData from '../datas/data.json';
import TransactionTable from '@/components/TransactionTable.vue';
import { useHomeStore } from '@/stores/homeStore';

export default {
  components: { 
    RegisterForm, 
    ProgressCircles, 
    TransactionTable 
  },
  data() {
    return {
      homeStore: useHomeStore(),
      dialog: false
    };
  },
  mounted() {
    this.homeStore.setTransactions(transactionData);
    this.homeStore.initializeProgress();
  }
};
</script>

<template>
  <div style="display: flex; margin-bottom: 3rem;">
    <!-- Transaction table -->
    <TransactionTable :TableText="homeStore.tableText" :transactions="homeStore.transactions" />
    <v-card class="margin-card-left" variant="plain">
      <v-card-title>
        Welcome
      </v-card-title>
      <v-card-text>
        Welcome to Financial tracker, a web application where you can track your earnings and expenses,
        see your progresses and much more depending on the inputs you make in your portfolio.
      </v-card-text>
    </v-card>
  </div>
  <div style="display: flex">
    <v-card class="margin-card-right" variant="outlined">
      <v-card-title>
        Portfolio
      </v-card-title>
      <v-card-text>
        Welcome to Vuetify! This is a basic example.
      </v-card-text>
      <RegisterForm v-model="dialog" />
    </v-card>
    <div class="margin-finance-card gap-14">
      <!-- Progress circles -->
      <ProgressCircles :progress="homeStore.progress" :size="100"></ProgressCircles>
      <ProgressCircles :progress="homeStore.progress2" :size="100"></ProgressCircles>
      <ProgressCircles :progress="homeStore.progress3" :size="100"></ProgressCircles>
    </div>
  </div>
</template>
