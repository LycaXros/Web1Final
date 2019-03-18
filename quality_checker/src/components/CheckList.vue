<template>
    <v-layout>        
      <v-flex xs6>
        <dougout :chart-data="dData" />  
      </v-flex>
      <v-flex xs6>
        <v-card>
            <v-card-title>
                <h1 > {{ title }} </h1>
            </v-card-title>
            <v-card-text>
                <v-form v-model="valid"
                        ref="form"
                        lazy-validation> 
                    <v-layout row wrap>
                        <v-flex xs12 v-for="(item, index) in items" :key="index">
                            <v-checkbox 
                                required
                                v-model="item.value"
                                :label="item.pregunta"
                                />
                        </v-flex>
                        <v-btn
                            :disabled="!valid"
                            color="success"
                            @click="validate"
                            >
                            Validate
                        </v-btn>
                    </v-layout>
                </v-form>
                <br />
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
            valid: true
        }
    },
    methods:{
        clickEvent(){
            
        },
        validate(){
            if (this.$refs.form.validate()) {
             this.snackbar = true
            }
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
      this.fillData();
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
