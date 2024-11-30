<script>
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
});
</script>


<template>
    <v-container class="py-4">
        <v-row justify="center" class="mb-4">
            <v-col cols="12" class="text-center">
                <h2 class="text-h6 font-weight-bold text-gray-700">Insights</h2>
            </v-col>
        </v-row>
        <v-row justify="center" text-align="center" dense>
            <v-col v-for="(item, index) in data" :key="index" cols="12" md="6" lg="4" class="mb-2">
                <v-card class="pa-3" color="gray darken-3" dark>
                    <v-card-text>
                        <p class="font-weight-medium text-center text-gray-300">{{ item.text }}</p>
                        <h4 class="text-h6 font-weight-bold text-center text-white">{{ item.value }}</h4>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
