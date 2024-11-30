import { defineStore } from 'pinia';

export const useInsightsStore = defineStore('insights', {
  state: () => ({
    displayMonthlyLimit: 0,
    displayTotalExpense: 0,
    displayMonthlyIncome: 0,
  }),
  actions: {
    animateNumber(ref: 'displayMonthlyLimit' | 'displayTotalExpense' | 'displayMonthlyIncome', targetValue: number) {
      let currentValue = 0; // Start from 0
      const increment = targetValue / 90;
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
        }
        this[ref] = Math.round(currentValue);
      }, 20);
    },
    updateStats(monthlyLimit: number, totalExpense: number, monthlyIncome: number) {
      this.animateNumber('displayMonthlyLimit', monthlyLimit);
      this.animateNumber('displayTotalExpense', totalExpense);
      this.animateNumber('displayMonthlyIncome', monthlyIncome);
    },
  },
});
