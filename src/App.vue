<script>
import { RouterLink, RouterView } from 'vue-router'
import BottomNavigation from './components/BottomNavigation.vue';

export default {
  name: 'App',
  components: {
    BottomNavigation
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <BottomNavigation> </BottomNavigation>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
