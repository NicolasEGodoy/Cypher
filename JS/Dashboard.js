
// Gráfico de Desempenho das Máquinas
var ctx2 = document.getElementById('grafico-desempenho').getContext('2d');
var chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Desempenho',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Gráfico de Tempo Médio entre Falhas
var ctx3 = document.getElementById('grafico-tempo-falhas').getContext('2d');
var chart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Máquina 1', 'Máquina 2', 'Máquina 3', 'Máquina 4', 'Máquina 5'],
        datasets: [{
            label: 'Tempo Médio entre',
            data: [45, 32, 56, 28, 39],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Gráfico de Disponibilidade dos Equipamentos
var ctx4 = document.getElementById('grafico-disponibilidade').getContext('2d');
var chart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Equipamento 1', 'Equipamento 2', 'Equipamento 3', 'Equipamento 4', 'Equipamento 5'],
        datasets: [{
            label: 'Disponibilidade (%)',
            data: [85, 70, 90, 75, 80],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            labels: {
                // Use a classe personalizada aqui
                className: 'custom-legend',
                font: {
                    color: 'white' // Altera a cor do texto da legenda para branco
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Gráfico de Manutenções Preventivas/Corretivas
var ctx5 = document.getElementById('grafico-manut-preventivas').getContext('2d');
var chart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Preventivas', 'Corretivas'],
        datasets: [{
            label: 'Quantidade',
            data: [12, 10],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Gráfico de Energia Consumida
var ctx4 = document.getElementById('grafico-tempo-resposta').getContext('2d');
var chart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Abertas', 'Pendentes', 'Atrasadas', 'Concluídas'],
        datasets: [{
            label: 'Disponibilidade (%)',
            data: [8, 7, 9, 7, 8],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            labels: {
                // Use a classe personalizada aqui
                className: 'custom-legend',
                font: {
                    color: 'white' // Altera a cor do texto da legenda para branco
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Gráfico de Temperatura
var ctx = document.getElementById('grafico-temperatura').getContext('2d');
var temperatureChart = new Chart(ctx, {
    type: 'scatter', // Tipo de gráfico (Dispersão)
    data: {
        datasets: [{
            label: 'Temperatura do Sensor (°C)',
            data: [
                { x: 1, y: 22 },  // 1º Horário, Temperatura 22°C
                { x: 2, y: 23 },  // 2º Horário, Temperatura 23°C
                { x: 3, y: 21 },  // 3º Horário, Temperatura 21°C
                { x: 4, y: 24 },  // 4º Horário, Temperatura 24°C
                { x: 5, y: 25 }   // 5º Horário, Temperatura 25°C
            ],
            backgroundColor: 'rgba(75, 192, 192, 1)', // Cor dos pontos
            borderColor: 'rgba(75, 192, 192, 0.2)', // Cor da borda
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Hora (Unidade Arbitrária)'
                }
            },
            y: {
                min: 20, // Definir o limite mínimo para o eixo Y (temperatura)
                max: 30, // Definir o limite máximo para o eixo Y (temperatura)
                title: {
                    display: true,
                    text: 'Temperatura (°C)'
                }
            }
        }
    }
});


const labels = ['2025-02-01', '2025-02-02', '2025-02-03', '2025-02-04'];
const temperaturaData = [75, 80, 78, 85];
const pressaoData = [30, 32, 33, 31];

// Gráfico de Temperatura
const temperaturaChart = new Chart(document.getElementById('temperaturaChart'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Temperatura (°C)',
            data: temperaturaData,
            borderColor: '#FF5733',
            fill: false,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Pressão
const pressaoChart = new Chart(document.getElementById('pressaoChart'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Pressão (Bar)',
            data: pressaoData,
            borderColor: '#33B5FF',
            fill: false,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});




const statusLabels = ['Funcionando', 'Falhando', 'Calibração'];
const statusData = [50, 10, 5];

// Gráfico para Status dos Sensores
const sensorStatusChart = new Chart(document.getElementById('sensorStatusChart'), {
    type: 'bar',
    data: {
        labels: statusLabels,
        datasets: [{
            label: 'Status dos Sensores',
            data: statusData,
            backgroundColor: ['#40769B', '#dc3545', '#ffc107'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    }
});

const estoqueData = [50, 30, 70, 40];
const statusEstoque = [100, 200, 300];

// Gráfico de barras para produtos em estoque
new Chart(document.getElementById('estoqueBarChart'), {
    type: 'bar',
    data: {
        labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
        datasets: [{
            data: estoqueData,
            backgroundColor: '#28a745',
        }]
    }
});

// Gráfico de pizza para status do estoque
new Chart(document.getElementById('estoquePieChart'), {
    type: 'bar',
    data: {
        labels: ['Em Estoque', 'Fora de Estoque', 'Reposição'],
        datasets: [{
            data: statusEstoque,
            backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        }]
    }
});

