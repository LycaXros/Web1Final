<template>
  <v-container>
    <v-layout
      text-xs-center
      row
    >
    <h1 xs8> {{item.Nombre}} </h1>
    <h2 xs4> {{item.numeroLote}} </h2>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>

</style>
