const chartElement = document.querySelector("#myChart");

let data = []

// TODO: Get data from cookies
// Format for data:
// {
//   x: 1,
//   y: 4
// }
// x represents the day of the month (1-30)
// y represents the mood (1-5)

/*
for (let i = 1; i < 31; i++) {
    data.push({
        x: i,
        y: Math.ceil(Math.random() * 5),
    })
}
*/
values = [1,5,1,5,1,5]
for (let i = 0; i < values.length; i++) {
    data.push({
        x: i,
        y: values[i]
    })
}


console.log(calculateAverageDifference(data))

function checkForDepression(data_array) {
    return (data_array.every((data_point) => {
        return data_point.y <= 3
    }))
}

function calculateAverageDifference(data_array) {
    let sum = 0
    for (let i = 0; i < data.length - 1; i++) {
        sum += Math.abs(data_array[i].y - data_array[i + 1].y)
    }
    return sum / (data_array.length - 1)
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
                max: 5,
            }
        }
    }
});

