<script>
export default {
    props: {
        categories: {
            type: Array,
        },
        expense: Number,
        maximumMonthly: Number,
    },
    data() {
        return {
            to: '',
            amount: '',
            whatFor: '',

        }
    },
    methods: {
        addTransaction() {
            this.$emit('addTransaction', {
                to: this.to,
                amount: Number(this.amount),
                whatFor: this.whatFor
            })
        }
    }
}
</script>
<template>
    <v-card>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="4" md="4">
                        <v-text-field label="To" v-model="to" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                        <v-text-field type="number" label="Amount" v-model="amount" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-autocomplete label="What for" v-model="whatFor" :items="categories" item-text="name"
                            required>
                        </v-autocomplete>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-btn block color="primary" @click="addTransaction">
                            Add transaction
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>
