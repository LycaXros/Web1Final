<template> 
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex justify-center>
        <v-btn color="success" @click="nuevoProducto" > Nuevo producto </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data:function(){
      return {

      }
    },
    components: {
    },
    methods:{
      nuevoProducto: function(){
        this.$store.dispatch("guardarProducto", { Nombre : "Producto 1", numeroLote:"0001001"})
        this.$router.push({name: 'cuestionario'});
      }
    }
  }
</script>
