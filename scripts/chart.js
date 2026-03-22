const chartElement = document.querySelector("#myChart");
const moodHistory = JSON.parse(getCookie("moodHistory")) || [];
console.log(moodHistory);

// Format for data:
// {
//   x: 1,
//   y: 4
// }
// x represents the day of the month (1-30)
// y represents the mood (1-5)

//for (let i = 1; i < 31; i++) {
//    data.push({
//        x: i,
//        y: Math.ceil(Math.random() * 3),
//    })
//}

const formattedData = moodHistory.map(entry => ({
    x: entry.day,
    y: parseInt(entry.mood)
}));

function checkForDepression(data_array) {
    if (data_array.length === 0) return false;
    return data_array.every((point) => point.y <= 3);
}

console.log("Is depressed:", checkForDepression(formattedData));


new Chart(chartElement, {
    type: 'line', // Can be 'line', 'pie', 'doughnut', etc.
    data: {
        datasets: [{
            label: 'Moods',
            data: formattedData,
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

