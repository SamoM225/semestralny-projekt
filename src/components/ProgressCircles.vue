<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 0
        },
        size: Number,
    }
}

</script>


<template>
    <v-progress-circular class="" :model-value="progress" :rotate="360" :size="size" :width="15" color="teal">
        <template v-slot:default> {{ progress }}% </template>
    </v-progress-circular>
</template>
