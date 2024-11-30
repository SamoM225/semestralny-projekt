<script>
export default {
    props: {
        TableText: {
            type: Array,
            default: []
        },
        transactions: {
            type: Array,
            default: []
        }
    }
}
</script>


<template>
    <v-table style="width: 50%; height: 200px;" fixed-header>
        <thead>
            <tr>
                <th v-for="(value, key) in TableText[0]" :key="key">{{ TableText[0][key] }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in transactions" :key="data.id">
                <td v-for="(value, key) in data" :key="key">{{ value }}</td>
            </tr>
        </tbody>
    </v-table>
</template>