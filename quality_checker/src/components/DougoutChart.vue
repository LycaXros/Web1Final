<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Doughnut,
    mixins: [reactiveProp],
    name: "DougChart",
    props: ['chartData'],
    data: function() {
        return {
            options: {
                responsive: true,
                title: {
                    display: false,
                    position: "bottom",
                    text: "Pendejo",
                    fontSize: 18,
                    fontColor: "white"
                },
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        fontColor: "white",
                        fontSize: 16
                    }
                }
            },
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    },

}
</script>

<style>
</style>