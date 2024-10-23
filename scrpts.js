// Dados
const labels = ['1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'];
const data = [40, 45, 50, 55, 55, 50, 45, 35, 30, 25, 20];

// Gráfico de Linha
const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
type: 'line',
data: {
labels: labels,
datasets: [{
label: 'Percentual de Fumantes (%)',
data: data,
borderColor: 'blue',
backgroundColor: 'rgba(0, 0, 255, 0.1)',
borderWidth: 2,
fill: true
}]
},
options: {
responsive: true,
plugins: {
legend: {
display: true,
position: 'top',
}
},
scales: {
y: {
beginAtZero: true,
max: 60
}
}
}
});

// Gráfico de Barras
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
type: 'bar',
data: {
labels: labels,
datasets: [{
label: 'Percentual de Fumantes (%)',
data: data,
backgroundColor: 'skyblue',
borderWidth: 1
}]
},
options: {
responsive: true,
plugins: {
legend: {
display: true,
position: 'top',
}
},
scales: {
y: {
beginAtZero: true,
max: 60
}
}
}
});