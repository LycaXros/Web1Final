<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="grey lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" :to="item.routeTo">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
        <v-spacer> </v-spacer>
        <template v-if="isCreated">  
            <v-btn flat @click="backToInit">Volver al Inicio</v-btn>
        </template>
        </v-toolbar>
    </span>
</template>



<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Procesos de Calidad',
            drawer: false,
            items: [
                { title: 'Home ', routeTo : '/' },
                { title: 'About', routeTo : 'about' },
                // { title: 'Join', routeTo : '' }
            ]
        };
    },
    computed:{
        isCreated(){
            console.log(this.$store.state.producto );
            return this.$store.state.producto != null 
        }
    },
    methods:{
        backToInit: function(){
            this.$store.dispatch("eliminarProducto");
            this.$router.push({name: 'home'})
        }
    }
};
</script>