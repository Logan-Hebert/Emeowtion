const chartElement = document.querySelector("#myChart");

let data = []

// TODO: Get data from cookies
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

labels = []
for (let i = 1; i < 31; i++) {
    labels.push(i);
}

new_data = data.map((point) => {
    return point.y;
});



new Chart(chartElement, {
    type: 'line', // Can be 'line', 'pie', 'doughnut', etc.
    data: {
        labels: labels,
        datasets: [{
            label: "Moods",
            data: new_data,
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            tension: .3,
            backgroundColor: (context) => {
                const chart = context.chart
                const {ctx, chartArea} = chart

                if (!chartArea) {
                    return null;
                }

                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                gradient.addColorStop(0, 'rgba(255, 99, 132, 0)')
                gradient.addColorStop(1, 'rgba(255, 99, 132, 0.5)')

                return gradient;
            },
        }]
    },

    options: {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 1,
            },
            y: {
                type: 'linear',
                ticks: {
                    stepSize: 1,
                },
                min: 0,
            }
        }
    }
});

