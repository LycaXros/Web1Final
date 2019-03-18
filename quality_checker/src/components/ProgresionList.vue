<template>
  <v-container fluid brown lighten-4>
    
    <v-layout row >        
      <v-flex xs12 > 
        <h1> {{ title }} </h1>
      </v-flex>
    </v-layout>

    <v-layout row >        
      <v-flex xs12 > 
        <dougout :chart-data="dData" />  
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12>
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Ver Cuestionario</v-btn>
          </template>
          <v-card>
            <v-card-title>
                <h1 > {{ title }} </h1>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                  <v-flex xs12 v-for="(item, index) in items" :key="index">
                      <v-checkbox 
                          required
                          v-model="item.value"
                          :label="item.pregunta"
                          />
                  </v-flex>
              </v-layout>
              <br />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" flat @click="dialog = false">Cancelar</v-btn>
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
                "rgb(0, 250,0)",
                "#fff",
              ],
              borderColor: [
                "rgb(0, 200,100)",
                "#ff0"
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
