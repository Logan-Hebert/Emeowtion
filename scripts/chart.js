// I don't like typing semicolons, in case you were wondering. (- Python & Ruby user)

const chartElement = document.querySelector("#myChart");
const moodHistory = JSON.parse(getCookie("moodHistory")) || [];
console.log(moodHistory);
const text = document.querySelector("#chartText");


/*
for (let i = 1; i < 31; i++) {
    data.push({
        x: i,
        y: Math.ceil(Math.random() * 5),
    })
}

values = [2,5,1,4,1,3]
for (let i = 0; i < values.length; i++) {
    data.push({
        x: i,
        y: values[i]
    })
}
*/

const formattedData = moodHistory.map(entry => ({
    x: entry.day,
    y: parseInt(entry.mood)
}));


if (calculateAverageDifference(formattedData) >= 3) {
    text.textContent = "It looks like your mood is fluctuating a lot. Try to build daily habits and routines, especially with your sleep schedule, to help stabilize your mood."
}

if (calculateAverageMood(formattedData) <= 2.5) {
    text.textContent = "It seems that you've been feeling pretty bad on average. Try to prioritize a healthy lifestyle; in particular, try to get some movement in throughout the day. Even a short walk outside can greatly improve your day!"
}

if (checkForDepression(formattedData)) {
    text.textContent = "You seem to be down a lot recently. Try organizing something fun with your friends soon!"
}


function checkForDepression(data_array) {
    return (data_array.every((data_point) => {
        return data_point.y <= 3
    }))
}

function calculateAverageDifference(data_array) {
    let sum = 0
    for (let i = 0; i < data_array.length - 1; i++) {
        sum += Math.abs(data_array[i].y - data_array[i + 1].y)
    }
    return sum / (data_array.length - 1)
}

function calculateAverageMood(data_array) {
    return data_array.reduce((accumulator, currentValue) => accumulator + currentValue.y, 0) / data_array.length
}



labels = []
for (let i = 1; i < 31; i++) {
    labels.push(i);
}
formattedData.sort((a, b) => {
    return a.x - b.x;
})
new_data = formattedData.map((point) => {
    return point.y;
});


// Create the actual chart
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

