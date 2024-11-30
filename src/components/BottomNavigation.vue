<script>
import { useTheme } from 'vuetify';

export default {
    setup() {
        const theme = useTheme();

        function changeTheme() {
            theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
        }

        return {
            changeTheme,
        };
    },
}
</script>

<template>

    <!-- Change theme -->
    <div class="flex pb-5">
        <v-btn @click="changeTheme" active="false">
            <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn class="ml-10" @click="login" active="false">
            <v-icon>mdi-login</v-icon>
        </v-btn>

    </div>


    <v-bottom-navigation color="#7B1FA2" active>
        <v-btn value="Home" to="/">
            <v-icon>mdi-home</v-icon>
            <span>Home</span>
        </v-btn>
        <v-btn value="portfolio" to="/portfolio">
            <v-icon>mdi-briefcase</v-icon>
            <span>Portfolio</span>
        </v-btn>
        <v-btn value="statistics" to="/statistics">
            <v-icon>mdi-chart-bar</v-icon>
            <span>statistics</span>
        </v-btn>
        <v-btn value="profil" to="/profile">
            <v-icon>mdi-account</v-icon>
            <span>Profil</span>
        </v-btn>
    </v-bottom-navigation>
</template>
