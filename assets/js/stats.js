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
            '#0c2d72',  // azul profundo quase marinho
            '#49a5f5', // azul claro médio (mais escuro que o anterior)
            '#1275c9', // azul padrão
            '#7cc6ff', // azul mais saturado
            '#0077b6' // azul escuro vibrante
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
        ['Golang', 90, 'color: #7cc6ff'],
        ['HTML', 85, 'color: #49a5f5'],
        ['CSS', 75, 'color: #1275c9'],
        ['Banco de dados', 80, 'color:rgb(1, 85, 131)'],
        ['JavaScript', 40, 'color: #0c2d72']
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
