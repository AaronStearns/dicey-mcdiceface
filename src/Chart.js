export const barChartData = {
    data: {
                    labels: ["1", ],
                    // "2", "3", "4", "5", "6"
                    datasets: [{
                        label: 'Number Of Rolls',
                        data: [4],
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

}

export default barChartData;