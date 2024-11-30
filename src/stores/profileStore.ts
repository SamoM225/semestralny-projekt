import { defineStore } from "pinia";
import monthlyReview from '../datas/monthly_review.json';
interface ProfileProperties {
    name: string;
    email: string;
}

interface Transaction {
    profileInsightsText: { month: string; expenses: string; savings: string }[];
    profileInsightsValues: {month: string, expenses: number, savings: number}[];
}

interface Profile extends Transaction, ProfileProperties {}

export const useProfileStore = defineStore('profile', {
    state: (): Profile => ({
        profileInsightsText: [{ month: 'Month', expenses: 'Expenses', savings: 'Savings' }],
        profileInsightsValues: monthlyReview,
        name: '',
        email: '',
    }),
    actions: {
        setProfileName(name: string) {
            this.name = name
        },
        setEmail(email: string) {
            this.email = email
        }
    }
});