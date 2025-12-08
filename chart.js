// Get the canvas context
const ctx = document.getElementById("growthChart").getContext("2d");

// Create the line chart
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [{
            label: "Global Cybersecurity Job Growth",
            data: [20, 30, 45, 60, 80, 110],
            borderWidth: 3,
            borderColor: "blue",
            backgroundColor: "lightblue",
            fill: false,
            tension: 0.3 // smooth curve
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: "Global Cybersecurity Job Growth (2018-2023)"
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
