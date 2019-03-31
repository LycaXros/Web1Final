<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1 class="text-md-left">Nombre Producto: {{item.Nombre}}  </h1>
      <h2 class="text-md-right">Lote: {{item.numeroLote}} </h2>
      </v-flex>
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
