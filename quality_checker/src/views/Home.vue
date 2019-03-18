<template> 
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <Intro />
      </v-flex>
      <v-flex xs12>
        <checker :items="checkData" :title="checkTitle"/>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Intro from '../components/Intro.vue'
  import checker from '../components/CheckList.vue'

  export default {
    data(){
      return {
        checkTitle:"Cuestionario Nuemro 1",
        checkData:[
          { pregunta: "Tiene 1 Pregunta>", value: false },
          { pregunta: "Tiene 2 Pregunta>", value: false },
          { pregunta: "Tiene 3 Pregunta>", value: false },
          { pregunta: "Tiene 4 Pregunta>", value: false },
        ]
      }
    },
    components: {
      Intro,
      checker
    }
  }
</script>
