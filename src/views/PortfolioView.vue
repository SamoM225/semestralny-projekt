<script>
import { useTransactionStore } from '../stores/TransactionStore';
import ProgressCircles from '@/components/ProgressCircles.vue';
import TransactionTable from '@/components/TransactionTable.vue';
import AddTransaction from '@/components/AddTransaction.vue';
import MonthlyLimit from '@/components/MonthlyLimit.vue';
import TotalIncome from '@/components/TotalIncome.vue';
import Insights from '@/components/Insights.vue';

export default {
    components: { 
        ProgressCircles, 
        TransactionTable, 
        AddTransaction, 
        MonthlyLimit, 
        TotalIncome, 
        Insights 
    },
    data() {
        return {
            transactionStore: useTransactionStore()
        }
    }
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex gap-4">
            <TransactionTable 
                :TableText="transactionStore.TableText" 
                :transactions="transactionStore.transactions"
                class="w-2/3" 
                style="width: 70%;" 
            />
            <AddTransaction 
                @addTransaction="transactionStore.addTransaction" 
                :categories="transactionStore.categories"
                :expense="transactionStore.expense"
                :disabled="transactionStore.expense > transactionStore.maximumMonthly" 
                class="w-1/3" 
                style="width: 70%;" 
            />
        </div>
        <div class="flex">
            <MonthlyLimit 
                class="w-1/2 mr-4" 
                @addMonthlyLimit="transactionStore.setMaximumMonthly" 
            />
            <TotalIncome 
                class="w-1/2" 
                @setMonthlyIncome="transactionStore.setMonthlyIncome" 
            />
        </div>
        <div>
            <Insights 
                :data="[
                    { text: 'Monthly Limit', value: transactionStore.getMonthlyLimit },
                    { text: 'Total Expense', value: transactionStore.expense },
                    { text: 'Monthly Income', value: transactionStore.getMonthlyIncome }
                ]" 
            />
        </div>
        <div style="justify-content: center;" class="flex gap-60">
            <ProgressCircles 
                :progress="transactionStore.getMonthlyLimitLeftPerc" 
                class="w-1/4" 
                :size="150" 
            />
            <ProgressCircles 
                :progress="transactionStore.getTotalExpenseLeftPerc" 
                class="w-1/4" 
                :size="150" 
            />
            <ProgressCircles 
                :progress="transactionStore.getMonthlyIncomeLeftPerc" 
                class="w-1/4" 
                :size="150" 
            />
        </div>
    </div>
</template>
