<template>
  <!-- <v-container fluid light-green lighten-3> -->
  <v-container fluid style="background-color:#7D88C1">
    
    <v-layout row >        
      <v-flex xs12 > 
        <h1> {{ title }} </h1>
      </v-flex>
    </v-layout>

    <v-layout row >        
      <v-flex xs12 > 
        <dougout :chart-data="dData"   class="white--text"/>  
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-dialog v-model="dialog" persistent max-width="350">
          <template v-slot:activator="{ on }">
            <v-btn color="success"  dark v-on="on">Ver Cuestionario</v-btn>
          </template>
          <v-card >
            <v-card-title class="deep-purple darken-1">
                <h1 class="white--text" > {{ title }} </h1>
            </v-card-title>
            <v-card-text class="blue-grey">
              <v-layout row wrap >
                  <v-flex xs12 v-for="(item, index) in items" :key="index">
                      <v-checkbox 
                          required
                          v-model="item.value"
                          :label="item.pregunta"    
                          dark
                          />
                  </v-flex>
              </v-layout>
              <br />
            </v-card-text>
            <v-card-actions >
              <v-btn color="red darken-1" flat @click="dialog = false">Cancelar</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="validate()">Aceptar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import dougout from '../components/DougoutChart.vue'

export default {
    props:{
        items:{
            type: Array,
            required: true
        },
        title:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            total: 0,
            completas: 0,
            dData: null,
            valid: true,
            dialog:false
        }
    },
    methods:{
        clickEvent(){
            
        },
        validate(){
           
            this.dialog = false;
            this.CalcularC();
        },
      setTotal(){ 
        this.total = this.items.length;
      },
      fillData(){        
        this.dData = {
          labels: ["Completado", "Sin completar", ],
          datasets: [
            {
              data: [this.completas, this.sinCompletarVal],
              backgroundColor: [
                "#004D40",
                "#fff",
              ],
              borderColor: [
                "#827717",
                "#827717"
              ],
              borderWidth: [1, 1]
            }
          ]
        }
      },
      CalcularC(){
        let res = 0;
        this.items.forEach(element => {
          if(element.value)
            res += 1;
        });

        this.completas = res;
        this.fillData();
      }
    },
    mounted () {
      this.setTotal();
      this.CalcularC();
    },
    computed:{
      sinCompletarVal(){
        if(this.completas >= this.total){ return 0;}

        return this.total - this.completas;
      }
    },
    components:{
      dougout,
    }
}
</script>
