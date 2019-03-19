<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    <h1> {{item.Nombre}} </h1>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Intro",
    props:{
      item:{
        type: Object,
        required: true
      }
    }
  }
</script>

<style>

</style>
