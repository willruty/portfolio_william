google.charts.load('current', {
    packages: ['corechart', 'bar']
});

google.charts.setOnLoadCallback(drawPieChart);

function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['Linguagem', 'Uso'],
        ['Golang', 31.72],
        ['JavaScript', 7.48],
        ['HTML', 28.83],
        ['CSS', 20.41],
        ['Java', 11.56]
    ]);

    var options = {
        title: 'Linguagens mais usadas',
        titleTextStyle: {
            color: '#fff', // Cor do título
            fontSize: 15,  // Tamanho da fonte do título
            bold: true     // Título em negrito
        },
        slices: {
            0: { offset: 0 },
            1: { offset: 0 },
            2: { offset: 0 },
            3: { offset: 0 },
            4: { offset: 0 }
        },
        sliceVisibilityThreshold: 0, // Mostra todas as fatias sem autoesconder
        legend: { position: 'right', textStyle: { color: '#fff' } },
        pieSliceText: 'percentage',
        is3D: false,
        backgroundColor: '#0D1117',
        legendTextStyle: {
            color: '#fff', // Cor das legendas
            fontSize: 13
        },
        chartArea: {
            left: '15%',
            top: '20%',
            width: '80%',
            height: '80%'
        },
        backgroundColor: 'transparent',
        colors: [
            '#0d47a1',  // azul profundo quase marinho
            '#64b5f6', // azul claro médio (mais escuro que o anterior)
            '#42a5f5', // azul padrão
            '#2196f3', // azul mais saturado
            '#1976d2' // azul escuro vibrante
        ]
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

// Função para desenhar o gráfico de barras horizontais
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {
    var data = google.visualization.arrayToDataTable([
        ['Ferramenta', 'Nível de Conhecimento', { role: 'style' }],
        ['Golang', 90, 'color: #e3f2fd'],
        ['HTML', 85, 'color: #90caf9'],
        ['CSS', 75, 'color: #1e88e5'],
        ['Banco de dados', 80, 'color: #42a5f5'],
        ['JavaScript', 40, 'color: #0d47a1']
    ]);

    var options = {
        title: 'Nível de Conhecimento das Ferramentas',
        titleTextStyle: {
            color: '#fff', // Cor do título
            fontSize: 18,  // Tamanho da fonte do título
            bold: true     // Título em negrito
        },
        hAxis: {
            title: 'Nível de conhecimento (%)',
            minValue: 0,
            textStyle: {
                color: '#fff', // Cor da fonte no eixo X
                fontSize: 14
            },
            titleTextStyle: {
                color: '#fff', // Cor do título do eixo X
                fontSize: 16
            }
        },
        vAxis: {
            title: 'Ferramentas',
            textStyle: {
                color: '#fff', // Cor da fonte no eixo Y
                fontSize: 14
            },
            titleTextStyle: {
                color: '#fff', // Cor do título do eixo Y
                fontSize: 16
            }
        },
        chartArea: {
            width: '50%',
            height: '80%'
        },
        backgroundColor: '#0D1117',
        legendTextStyle: {
            color: '#fff' // Cor das legendas
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('barchart'));
    chart.draw(data, options);
}
