$(function () {
    const lineLabels = ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7'];
    const lineSaleData = [2500, 600, 8900, 9800, 900, 1200, 6000];
    const lineAppointData = [2000, 4500, 7200, 7200, 2000, 3000, 7000];

    const pieLabels = ['鈴木', '山本', '佐藤', '阿部'];
    const pieData = [25, 25, 10, 40];

    const barLabels = ['2019/4', '2019/5', '2019/6', '2019/7'];
    const barMyData = [60000, 80000, 10000, 30000];
    const barMyNextData = [20000, 30000, 150000, 90000];

    const radarLabels = ['Java', 'C#', 'C', 'C++', 'Javascript', 'Python', 'Go'];
    const radarMyData = [12, 100, 98, 75, 80, 30, 18];
    const radarMyNextData = [60, 29, 50, 50, 20, 3, 10];

    const lineCtx = $('Canvas#myLineChart');
    const pieCtx = $('Canvas#myPieChart');
    const barCtx = $('Canvas#myBarChart');
    const radarCtx = $('Canvas#myRadarChart');

    const colorRed = 'rgba(231,76,60,1.0)';
    const colorBlue = 'rgba(52,152,219,1.0)';
    const colorYellow = '#f1c40f'; // カラーコードでも設定可能
    const colorGreen = '#2ecc71';


    // 折れ線グラフを設定する
    const myLineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: lineLabels,
            datasets: [{
                label: '売上',
                data: lineSaleData,
                borderColor: colorGreen,
                backgroundColor: colorGreen,
                fill: false// 塗りつぶしなし
            }, {
                label: '指名売上',
                data: lineAppointData,
                borderColor: colorYellow,
                backgroundColor: colorYellow,
                fill: false// 塗りつぶしなし
            }]
        },
        options: {
            title: {
                display: true,
                text: '会社売上（10/1～10/7）',
                fontSize: 30
            },
            elements: {
                line: {
                    tension: 0 // ベジェ曲線を無効にする
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + '円';
                        }
                    }
                }]
            }
        }
    });

    // 円グラフを設定する
    const myPieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: pieLabels,
            datasets: [{
                backgroundColor: [
                    colorGreen,
                    colorBlue,
                    colorRed,
                    colorYellow
                ],
                data: pieData
            }]
        },
        options: {
            title: {
                display: true,
                text: '個人別売上比率(10月)',
                fontSize: 30
            }
        }
    });

    // 棒グラフを設定する
    const myBarChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: barLabels,
            datasets: [{
                label: '高橋',
                data: barMyData,
                backgroundColor: colorRed
            }, {
                label: '伊藤',
                data: barMyNextData,
                backgroundColor: colorBlue
            }]
        },
        options: {
            title: {
                display: true,
                text: '月別売上(2019/4～2019/7)',
                fontSize: 30
            },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value, index, values) {
                            return value + '円';
                        }
                    }
                }]
            }
        }
    });

    // レーダーチャートを設定する
    const myRadarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: radarLabels,
            datasets: [{
                label: '田中',
                data: radarMyData,
                backgroundColor: colorRed,
                borderColor: colorRed,
                fill: false// 塗りつぶしなし
            }, {
                label: '橋本',
                data: radarMyNextData,
                backgroundColor: colorGreen,
                borderColor: colorGreen,
                fill: false// 塗りつぶしなし
            }]
        },
        options: {
            title: {
                display: true,
                text: '言語別能力値',
                fontSize: 30
            },
            // Chart.js v2.8.0で発生しているレーダーチャートの値が表示されない不具合を修正
            // v2.7.3以前を使用するれば不具合は発生しない
            tooltips: {
                enabled: true,
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.datasets[tooltipItem.datasetIndex].label + ' : ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    }
                }
            }
        }
    });
});