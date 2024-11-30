<script>
export default {
    data() {
        return {
            monthlyLimit: 0,
        }
    },
    methods: {
        addMonthlyLimit() {
            this.$emit('addMonthlyLimit', this.monthlyLimit);
        }
    }
}
</script>

<template>
    <v-card>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" md="12" sm="12">
                        <v-text-field label="Monthly limit" v-model="monthlyLimit" type="number"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="12" sm="12">
                        <v-btn block color="primary" @click="addMonthlyLimit">
                            Set limit
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>
