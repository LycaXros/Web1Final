<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 md6 offset-sm3>
                <v-card>
                    <v-responsive :aspect-ratio="16/9">
                        <v-img :src="this.background" >
                            <v-container  fluid  >
                                <v-layout row wrap > 
                                    <v-flex xs12> &nbsp; </v-flex>
                                    <v-flex xs12> &nbsp; </v-flex>
                                    <v-flex xs12> &nbsp; </v-flex>
                                </v-layout>
                                
                                <v-layout row wrap > 
                                    <v-flex xs12 md12 align-center justify-center offset-xs4  > 
                                        <span class=" font-weight-bold subheading"> {{this.$route.params.title}} </span>
                                    </v-flex>

                                    <v-flex xs6 md3 offset-xs3>
                                        Nombre Producto
                                    </v-flex>
                                    <v-flex xs3 md6>
                                        : {{producto.nombre}}
                                    </v-flex>

                                    <v-flex xs6 md3 offset-xs3>
                                        Número de Lote 
                                    </v-flex>
                                    <v-flex  xs3 md6 >
                                        : {{producto.lote}}
                                    </v-flex>

                                    <v-flex  xs6 md3 offset-xs3>
                                        Número de Muestra
                                    </v-flex>
                                    <v-flex  xs3 md5>
                                        : {{producto.muestra}}
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap > 
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                </v-layout>
                                
                                <v-layout row wrap > 
                                    <v-flex  xs12 md12 offset-xs2>
                                        <v-layout row align-end fill-height>
                                            <v-flex>
                                                {{producto.today}}
                                            </v-flex>
                                            <v-flex offset-xs4>
                                                Jesus Dicent 2018-1523
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                        <v-card-actions>
                            <v-container fluid grid-list-xl>
                                <v-layout justify-space-around>
                                    <v-flex xs2>
                                        <v-btn flat color="red" to="/cuestionario">Ir atras</v-btn>
                                    </v-flex>
                                    <v-flex xs2>
                                        <v-btn flat color="success" @click="toPrint">Imprimir</v-btn>   
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-actions>
                    </v-responsive>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name:'Certificado',
    data () {
        return {
            background: require('@/assets/Certificado.jpg'),
            producto: {}
        }
    },
    methods: {
        toPrint () {
            window.print();
        }
    },
    created () {
        let temp = this.$store.state.producto;
        let date = new Date();
        let month = date.getMonth() == 11 ? date.getMonth() + 1: date.getMonth();

        var formatDate = date.getDate()+"/"+month+"/" + date.getFullYear();
        this.producto = {
            nombre : temp.Nombre,
            lote : temp.numeroLote,
            muestra : temp.numMuestra,
            today : formatDate
        }
    }
}
</script>
<style scoped>
.BackGround{
    background-image: url('../assets/Certificado.jpg');
    height: 500px;
    width: 500px;
}
</style>
