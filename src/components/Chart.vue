<template>

</template>

<script>

import Chart from 'chart.js';

// console.log("Chart component: " + stuff[0])

export default {
    name: "Chart",
    props: ["stuff"],
    data() {
        return {
            counter: 3
        }
    },
   methods: {
        counterFunc() {
        this.$nextTick(function () {
            return this.counter
        });
        }
    },
//     methods: {
//         createChart(chartId, chartData) {
//             const ctx = document.getElementById(chartId);
//             const myChart = new Chart(ctx, {
//             type: chartData.type,
//             data: chartData.data,
//             options: chartData.options,
//             });
//         }
//     },
    computed: {
        // a computed getter
        incrementCounter: function () {
        // `this` points to the vm instance
        return this.counter
        }
    },

    mounted() {
        
            var chart = this.$refs.chart;
            // var ctx = chart.getContext("2d");
            var myChart = new Chart(chart, {
                type: 'bar',
                data: {
                    labels: ["1", ],
                    // "2", "3", "4", "5", "6"
                    datasets: [{
                        label: 'Number Of Rolls',
                        data: [this.counterFunc()],
                        // 2, 1, 5, 2, 3
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            // 'rgba(54, 162, 235, 0.7)',
                            // 'rgba(255, 206, 86, 0.7)',
                            // 'rgba(75, 192, 192, 0.7)',
                            // 'rgba(153, 102, 255, 0.7)',
                            // 'rgba(255, 159, 64, 0.7)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 5,
                                stepSize: 1
                            }
                        }]
                    }
                }
            });
        }
}
</script>

<style scoped>

#chart {
    width: 500px;
}

</style>