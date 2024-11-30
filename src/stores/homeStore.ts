import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
    state: () => ({
        transactions: [], 
        tableText: [{ name1: 'To', name2: 'What for', name3: 'Amount' }],
        progress: 0,
        progress2: 0,
        progress3: 0,
        interval: null as number | null, 
    }),

    actions: {
        initializeProgress() {
            let intervalSpeed = 20;
            this.interval = setInterval(() => {
                if (this.progress < 24 || this.progress2 < 79 || this.progress3 < 100) {
                    this.progress = Math.min(this.progress + 2, 24);
                    this.progress2 = Math.min(this.progress2 + 3, 79);
                    this.progress3 = Math.min(this.progress3 + 4, 100);
                    intervalSpeed = intervalSpeed > 1 ? intervalSpeed - 1 : 1;
                } else {
                    clearInterval(this.interval!); 
                    this.interval = null; 
                }
            }, intervalSpeed);
        },
        setTransactions(transactions: any) {
            this.transactions = transactions;
        },
    },
});
