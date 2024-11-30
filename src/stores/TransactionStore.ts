import { defineStore } from 'pinia';
import monthlyReview from '../datas/monthly_review.json';

interface Transaction {
  to: string;
  amount: number;
  whatFor: string;
}

interface StoreState {
  categories: string[];
  expense: number;
  monthlyIncome: number;
  maximumMonthly: number;
  transactions: Transaction[];
  TableText: { to: string; whatFor: string; amount: string }[];
  profileInsightsText: { month: string; expenses: string; savings: string }[],
  profileInsightsValues: { month: string; expenses: number; savings: number }[]
}

export const useTransactionStore = defineStore({
  id: 'transaction',
  state: (): StoreState => ({
    categories: ['Rent', 'Shopping', 'Food', 'Transportation', 'Entertainment', 'Miscellaneous'],
    expense: 0,
    monthlyIncome: 22,
    maximumMonthly: 1500,
    transactions: [
      { to: 'John Doe', whatFor: 'Rent payment', amount: 228 },
      { to: 'Alice Smith', whatFor: 'Loan repayment', amount: 500 },
      { to: 'Bob Johnson', whatFor: 'Gift', amount: 200 },
    ],
    TableText: [{ to: 'To', whatFor: 'What for', amount: 'Amount' }],
    profileInsightsText: [{ month: 'Month', expenses: 'Expenses', savings: 'Savings' }],
    profileInsightsValues: monthlyReview,
  }),
  getters: {
    getMonthlyLimit: (state) => state.maximumMonthly,
    getTotalExpense: (state) => state.expense,
    getMonthlyIncome: (state) => state.monthlyIncome,
    getMonthlySavings: (state) => state.monthlyIncome - state.expense,
    getMonthlyLimitLeftPerc: (state) => (state.maximumMonthly - state.expense) / state.maximumMonthly * 100,
    getTotalExpenseLeftPerc: (state) => (state.expense / state.maximumMonthly) * 100,
    getMonthlyIncomeLeftPerc: (state) => (state.monthlyIncome / state.maximumMonthly) * 100,
  },
  actions: {
    setCategories(categories: string[]) {
      this.categories = categories;
    },
    setExpense(expense: number) {
      this.expense = expense;
    },
    setMaximumMonthly(maximumMonthly: number) {
      this.maximumMonthly = maximumMonthly;
    },
    addTransaction(transaction: Transaction) {
      this.transactions.push(transaction);
      this.expense += transaction.amount;
      this.maximumMonthly -= transaction.amount;
    },
    setMonthlyIncome(monthlyIncome: number) {
      this.monthlyIncome = monthlyIncome;
    },
  },
});
