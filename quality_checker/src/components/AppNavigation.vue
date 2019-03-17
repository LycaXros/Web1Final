<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
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
        <v-btn flat  class="hidden-sm-and-down">Menu</v-btn>
        <v-spacer> </v-spacer>
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
                { title: 'About', routeTo : 'about' },
                { title: 'Home ', routeTo : '/' },
                { title: 'Join', routeTo : '' }
            ]
        };
    }
};
</script>