<template> 
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="card--Addons">
        <Intro :item="producto"/>
      </v-flex>
      <v-flex xs12 />
      <v-flex xs12 md4>
        <ProgresionList 
          :items="checkData"
          title="Cuestionario Nuemro 1" 
          @save="saveState" />        
      </v-flex>
      <v-flex xs12 md4>
        <ProgresionList 
          :items="checkData2" 
          title="Cuestionario Numero 2"
          @save="saveState"/>        
      </v-flex>
      <v-flex xs12 md4>
        <ProgresionList 
          :items="checkData3" 
          title="Cuestionario Numero 3" 
          @save="saveState"/>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Intro from '../components/Intro.vue'
  import ProgresionList from '../components/ProgresionList.vue'

  export default {
    name: "Cuestionarios",
    data(){
      return {
        checkData: [],
        checkData2:[],
        checkData3:[],
        producto: null
        
      }
    },
    methods:{
      saveState(){
        // console.log("I'm here");
        this.$store.dispatch("guardarProducto", this.producto);
      }
    },

    components: {
      Intro,
      ProgresionList
    },
    created(){
      this.producto = this.$store.state.producto;
      if(this.producto.Lista_1 === undefined || this.producto.Lista_1 == null){
        this.checkData = [
            { pregunta: "Tiene 1 Pregunta>", value: false },
            { pregunta: "Tiene 2 Pregunta>", value: false },
            { pregunta: "Tiene 3 Pregunta>", value: false },
            { pregunta: "Tiene 4 Pregunta>", value: false },
          ];
        this.producto.Lista_1 = this.checkData;
      }
      else{
        this.checkData = this.producto.Lista_1 ;
      }

      
      if(this.producto.Lista_2 === undefined || this.producto.Lista_2 == null){
        this.checkData2 = [
          { pregunta: "Tiene 1 Pregunta.0>", value: false },
          { pregunta: "Tiene 2 Pregunta.0>", value: false },
          { pregunta: "Tiene 3 Pregunta.0>", value: false },
          { pregunta: "Tiene 4 Pregunta.0>", value: false },
          { pregunta: "Tiene 5 Pregunta.0>", value: false },
          { pregunta: "Tiene 6 Pregunta.0>", value: false }

          ];
        this.producto.Lista_2 = this.checkData2;
      }
      else{
        this.checkData2 = this.producto.Lista_2 ;
      }

      if(this.producto.Lista_3 === undefined || this.producto.Lista_3 == null){
        this.checkData3 = [
          { pregunta: "Tiene 1 Pregunta.5>", value: false },
          { pregunta: "Tiene 2 Pregunta.4>", value: false },
          { pregunta: "Tiene 3 Pregunta.3>", value: false },
          { pregunta: "Tiene 4 Pregunta.2>", value: false },
          { pregunta: "Tiene 5 Pregunta.1>", value: false }
          ];
        this.producto.Lista_3 = this.checkData3;
        
      }
      else{
        this.checkData3 = this.producto.Lista_3 ;
      }

    }
  }
</script>

<style >
.card--Addons{
  background-color:#778CAA;
  /* box-shadow: 3px 3px 2px #87AFC1; */
  border-radius: 10px ;
}
.card--border{
  border-radius: 15px;
  /* overflow-y:hidden; */
}
</style>