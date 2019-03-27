<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-responsive :aspect-ratio="16/9">
                        <v-img
                        :src="this.background" >
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
        this.producto = {
            d : temp.Nombre
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
