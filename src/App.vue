<template>
    <div id="app">
        <div id="content">
            <Header></Header>
    <!-- <Chart></Chart> -->
     <DieRoller></DieRoller> 

    <!-- <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

            <DiceCounters></DiceCounters>
            <canvas ref="chart"></canvas>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import DiceCounters from './components/DiceCounters.vue'
    import DieRoller from './components/DieRoller.vue'
    // import Chart from './components/Chart.vue'

    import Chart from 'chart.js';

    export default {
          name: 'app',
          components: {
            Header,
            DiceCounters,
            DieRoller,
            Chart
          },
        mounted() {
            var chart = this.$refs.chart;
            // var ctx = chart.getContext("2d");
            var myChart = new Chart(chart, {
                type: 'bar',
                data: {
                    labels: ["1", "2", "3", "4", "5", "6"],
                    datasets: [{
                        label: 'Number Of Rolls',
                        data: [3, 2, 1, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)',
                            'rgba(255, 159, 64, 0.7)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 5,
                                stepSize: 1
                            }
                        }]
                    }
                }
            });
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* margin-top: 60px; */
    }
    #content {
        margin: auto;
        width: 500px;
        background-color: #FFFFFF;
        padding: 20px;
    }
</style>



