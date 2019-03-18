<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Doughnut,
    mixins: [reactiveProp],
    name: "DougChart",
    props: ['chartdata'],
    mounted () {
    this.renderChart(this.chartdata, this.chartOptions)
    },
    data(){
        return {
            chartOptions: {
                responsive: true,
                title: {
                    display: false,
                    position: "bottom",
                    text: "",
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
 }
}
</script>

<style>
</style>