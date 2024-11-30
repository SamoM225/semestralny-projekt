<script>
export default {
    data() {
        return {
            monthlyIncome: 0,
        }
    },
    methods: {
        setMonthlyIncome() {
            this.$emit('setMonthlyIncome', this.monthlyIncome);
        }
    }
}
</script>


<template>
    <v-card>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <v-text-field label="Monthly income" v-model="monthlyIncome" type="number"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <v-btn block color="primary" @click="setMonthlyIncome">
                            Set income
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>
