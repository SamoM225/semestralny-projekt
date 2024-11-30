<script>
import { useTransactionStore } from '../stores/TransactionStore';
import Insights from '@/components/Insights.vue';
import TransactionTable from '@/components/TransactionTable.vue';

export default {
    data() {
        return {
            transactionStore: useTransactionStore()
        }
    }
}
</script>

<template>
    <div class="flex gap-4 m-5">
        <v-avatar color="indigo" size="150"></v-avatar>
        <div class="m-10">
            <h1>John Doe</h1>
            <h1>Username</h1>
        </div>
        <Insights class="w-1/2 ml-auto" :data="[
            { text: 'Monthly Limit', value: transactionStore.getMonthlyLimit },
            { text: 'Total Expense', value: transactionStore.expense },
            { text: 'Monthly Income', value: transactionStore.getMonthlyIncome },
            { text: 'Monthly Savings', value: transactionStore.getMonthlySavings },
            { text: 'monthly income', value: transactionStore.getMonthlyIncome },
        ]" />
    </div>
    <div>
        <TransactionTable style="width: 100%;" :TableText="transactionStore.profileInsightsText"
            :transactions="transactionStore.profileInsightsValues" />
    </div>
</template>
    