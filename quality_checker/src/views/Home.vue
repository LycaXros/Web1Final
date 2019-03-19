<template> 
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <Intro />
      </v-flex>
      <v-flex xs12 md4>
        <ProgresionList :items="checkData" :title="checkTitle"/>        
      </v-flex>
      <v-flex xs12 md4>
        <ProgresionList :items="checkData2" title="Cuestionario Numero 2"/>        
      </v-flex>
      <v-flex xs12 md4>
        <ProgresionList :items="checkData2" title="Cuestionario Numero 2"/>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Intro from '../components/Intro.vue'
  import ProgresionList from '../components/ProgresionList.vue'

  export default {
    data(){
      return {
        checkTitle:"Cuestionario Nuemro 1",
        checkData:[
          { pregunta: "Tiene 1 Pregunta>", value: true },
          { pregunta: "Tiene 2 Pregunta>", value: false },
          { pregunta: "Tiene 3 Pregunta>", value: false },
          { pregunta: "Tiene 4 Pregunta>", value: false },
        ],
        checkData2:[
          { pregunta: "Tiene 1 Pregunta.0>", value: false },
          { pregunta: "Tiene 2 Pregunta.0>", value: false },
          { pregunta: "Tiene 3 Pregunta.0>", value: false },
          { pregunta: "Tiene 4 Pregunta.0>", value: false },
          { pregunta: "Tiene 5 Pregunta.0>", value: false },
          { pregunta: "Tiene 6 Pregunta.0>", value: true }
        ],
      }
    },
    components: {
      Intro,
      ProgresionList
    }
  }
</script>
