<template> 
  <v-container grid-list-md text-xs-center>
    <v-layout >
      <v-flex class="form--style">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-text-field
                  v-model="name"
                  :counter="50"
                  :rules="nameRules"
                  label="Nombre del producto"
                  required box
                ></v-text-field>
              </v-flex>
            
              <v-flex xs12 md6>
                <v-text-field
                  v-model="numeroLote"
                  label="Numero de Lote"
                  placeholder="****-**"
                  required box return-masked-value
                  mask="NNNN-##"
                  :rules="[v => !!v || 'Este Campo es requerido!']"
                ></v-text-field>
              </v-flex>
              
              <v-flex xs6 md3>
                <v-text-field
                  v-model="numeroMuestra"
                  type="number"
                  min="0" 
                  :rules="muestraRules"
                  label="Numero de Muestra" required box
                ></v-text-field>
              </v-flex>
              
            </v-layout>
            <v-layout  justify-center>
              <v-flex >
                <v-btn
                  color="error"
                  @click="reset"   >
                  Limpiar Formulario
                </v-btn>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  @click="validate"
                >
                  Nuevo producto
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>

        </v-form>
        <!-- <v-btn color="success" @click="nuevoProducto" > Nuevo producto </v-btn> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data:function(){
      return {
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'El Nombre es Requerido',
          v => (v && v.length <= 50) || 'Name must be less than 50 characters'
        ],
        numeroMuestra: 0,
        muestraRules: [
          v => v > 0 || 'Debe ser un numero mayor que 0!',
          v => v <= 100 || 'El numero no puede ser mayor que 100'
        ],
        numeroLote: "",
      }
    },
    components: {
    },
    methods:{
      validate () {
        if (this.$refs.form.validate()) {
          this.nuevoProducto()
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      nuevoProducto: function(){
        let newP = { 
          Nombre : this.name, 
          numeroLote: this.numeroLote,
          numMuestra: this.numeroMuestra
        };
        this.$store.dispatch("guardarProducto", newP)
        this.$router.push({name: 'cuestionario'});
      }
    }
  }
</script>

<style scoped>
.form--style{
  background-color:#EEEEEE;
  /* box-shadow: 3px 3px 2px #87AFC1; */
  border-radius: 10px ;
}
</style>

