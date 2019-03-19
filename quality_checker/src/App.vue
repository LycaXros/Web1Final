<template>
  <v-app id="inspire">

    <AppNavigation> </AppNavigation>
    
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
    },
    created(){
      this.$store.dispatch("sameProducto");
    }

  }
</script>