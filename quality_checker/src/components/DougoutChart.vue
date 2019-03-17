<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  name: "DougChart",
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>