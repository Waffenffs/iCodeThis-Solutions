const ctx = document.getElementById('myChart')

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
        data: [100, 59, 120, 160, 110, 55, 40],
        backgroundColor: [
            '#393864',
        ],
        borderWidth: 1
    },
        {
        data: [65, 62, 100, 81, 80, 80, 100],
        backgroundColor: [
            '#b4365a',
        ],
        borderWidth: 1
        }],
};

const chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    } 
})