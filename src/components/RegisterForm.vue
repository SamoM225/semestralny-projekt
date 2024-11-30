<script>
export default {
    data() {
        return {
            dialog: false,
        }
    }
}
</script>

<template>
    <div style="margin: 10px;">
        <v-btn @click="dialog = true" color="#8E24AA" variant="tonal">
            Create your own
        </v-btn>

        <v-dialog v-model="dialog" max-width="600">
            <v-card prepend-icon="mdi-account" title="Registration form">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Name*" required></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Email*" required></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>

                        <v-col cols="16" sm="6">
                            <v-text-field label="Confirm Password*" type="password" required></v-text-field>
                        </v-col>


                    </v-row>

                    <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

                    <v-btn color="primary" text="Send" variant="tonal" @click="dialog = false"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
