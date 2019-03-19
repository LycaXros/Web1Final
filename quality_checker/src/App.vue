<template>
  <v-app id="inspire">

    <AppNavigation> </AppNavigation>
    
    <!-- <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile :to="home" >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
     -->
    <v-content transition="slide-x-transition" style="background-color:#232635">
        <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app >
      <v-layout justify-center row>
        <span class="white--text">Jesus Dicent 2018-1523 &copy; 2017</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';
  export default {
    data: () => ({
      drawer: false
    }),
    props: {
      source: String
    },
    components: {
      AppNavigation,
    }
  }
</script>