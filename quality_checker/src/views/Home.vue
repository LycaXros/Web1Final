<template> 
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <Intro />
      </v-flex>
      <v-flex xs6>
        <dougout :chartdata="dData" :options="chartOptions"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Intro from '../components/Intro.vue'
  import dougout from '../components/DougoutChart.vue'

  export default {
    data(){
      return {
        dData:{
          labels: ["match1", "match2", "match3", "match4", "match5"],
          datasets: [
            {
              data: [100, 50, 25, 70, 40],
               backgroundColor: [
                "#DEB887",
                "#A9A9A9",
                "#DC143C",
                "#F4A460",
                "#2E8B57"
              ],
              borderColor: [
                "#CDA776",
                "#989898",
                "#CB252B",
                "#E39371",
                "#1D7A46"
              ],
              borderWidth: [1, 1, 1, 1, 1]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          title: {
            display: true,
            position: "top",
            text: "Doughnut Chart",
            fontSize: 18,
            fontColor: "#111"
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#333",
              fontSize: 16
            }
          }
        },
      }
    },
    components: {
      Intro,
      dougout
    }
  }
</script>
