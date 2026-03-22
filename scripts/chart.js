const chartElement = document.querySelector("#myChart");

let data = []

// Format for data:
// {
//   x: 1,
//   y: 4
// }
// x represents the day of the month (1-30)
// y represents the mood (1-5)

for (let i = 1; i < 31; i++) {
    data.push({
        x: i,
        y: Math.ceil(Math.random() * 3),
    })
}

console.log(checkForDepression(data))

function checkForDepression(data_array) {
    return (data_array.every((data_point) => {
        return data_point.y <= 3
    }))
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
                ticks: {
                    stepSize: 1,
                },
                min: 0,
                max: 5,
            }
        }
    }
});

