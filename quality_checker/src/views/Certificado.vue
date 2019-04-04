<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs8 md8 class="boxPrincipal" offset-xs2>
                <v-card>
                    <v-responsive :aspect-ratio="16/10.0">
                        <v-img :src="this.background" style="">
                            <v-container  fluid  >
                                <v-layout row wrap class="dataBox "> 
                                    <v-flex xs12 md12 align-center justify-center offset-xs4 style="padding-bottom:5%" > 
                                        <h2 style="font-family: 'Cinzel', serif;" > {{this.$route.params.title}} </h2>
                                    </v-flex>
                                    <v-flex xs6 md3 offset-xs3 class="specialFont">
                                        Nombre Producto
                                    </v-flex>
                                    <v-flex xs3 md6  class="specialFont">
                                        : {{producto.nombre}}
                                    </v-flex>

                                    <v-flex xs6 md3 offset-xs3 class="specialFont">
                                        Número de Lote 
                                    </v-flex>
                                    <v-flex  xs3 md6  class="specialFont">
                                        : {{producto.lote}}
                                    </v-flex>

                                    <v-flex  xs6 md3 offset-xs3 class="specialFont">
                                        Número de Muestra
                                    </v-flex>
                                    <v-flex  xs3 md5 class="specialFont">
                                        : {{producto.muestra}}
                                    </v-flex>
                                </v-layout>
                                <!--
                                <v-layout row wrap > 
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                    <v-flex xs6 md12> &nbsp; </v-flex>
                                </v-layout>
                                -->
                                <v-layout row wrap class="dataBox specialFont"> 
                                    <v-flex  xs12 md12 offset-xs2 class="specialFont">
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
@import url('https://fonts.googleapis.com/css?family=Cinzel:900|Kaushan+Script|Tangerine');
.BackGround{
    background-image: url('../assets/Certificado.jpg');
    height: 500px;
    width: 500px;
}
.dataBox{
    padding-top: 15%;
    padding-bottom: 15%;
}
.specialFont{
    font-size: 140%;
    font-family: 'Kaushan Script', cursive;
}
.boxPrincipal{
    padding: 0 10%
}
</style>
