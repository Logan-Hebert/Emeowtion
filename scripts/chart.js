const chartElement = document.querySelector("#myChart");

let data = []

// Format for data:
// {
//   x: 1,
//   y: 4
// }

for (let i = 1; i < 31; i++) {
    data.push({
        x: i,
        y: Math.ceil(Math.random() * 5),
    })
}

console.log(data)

new Chart(chartElement, {
    type: 'scatter', // Can be 'line', 'pie', 'doughnut', etc.
    data: {
        datasets: [{
            label: 'Moods',
            data: data,
            backgroundColor: 'rgb(255, 99, 132)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                type: 'linear',
                beginAtZero: true,
            }
        }
    }
});

