<template> 
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="card--Addons">
        <Intro :item="producto"/>
      </v-flex>
      <v-flex xs12 />
      <v-flex xs12 >
        <v-expansion-panel v-model="panel" >
          <v-expansion-panel-content
            style="background-color:#778CAA"
            class="card--Addons" >
            <template v-slot:header>
              <h3> Datos de la Muestra ({{producto.numMuestra}})</h3>
            </template>
            <v-card>
              <v-card-text>
                <v-container grid-list-md text-xs-center>
                  <v-layout wrap justify-space-between>

                    <v-flex xs12 md6 lg4>
                      <v-text-field prepend-icon="fas fa-thermometer-half"
                        label="Temperatura de la Muestra" type="number"
                        v-model="datosMuestras.temp" min="0" max="100">
                        <template v-slot:append>
                          C°
                        </template>
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 md6 lg4>
                      <v-text-field prepend-icon="fas fa-weight"
                        label="Peso de la Muestra" type="number"
                        v-model="datosMuestras.peso" min="0">
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12 md6 lg4>
                      <v-text-field 
                        label="Fecha de produccion" type="date"
                        v-model="datosMuestras.fechaP" :max="tomorrow">
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions class="text-xs-center">
                <v-btn large color="green" @click="saveState()" block>Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
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
        panel: [false],
        datosMuestras: { },
        producto: null,
        tomorrow: ""
        
      }
    },
    methods:{
      saveState (){
        // console.log("I'm here");
        this.$store.dispatch("guardarProducto", this.producto);
      },
      setTomorrowDate () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        this.tomorrow = yyyy + "-" + mm + "-" + dd;
      }
    },

    components: {
      Intro,
      ProgresionList
    },
    created () {
      this.setTomorrowDate();
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

      if(this.producto.datosMuestras === undefined || this.producto.datosMuestras == null){
        this.datosMuestras = {
            temp: null,
            peso: null,
            fechaP: this.tomorrow
        };
        this.producto.datosMuestras = this.datosMuestras;
      }else{
        this.datosMuestras = this.producto.datosMuestras;
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