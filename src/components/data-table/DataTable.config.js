const chartOptions = {
    //TODO get series from API
    series: [{
        name: 'total',
        data: [94, 80, 94, 80, 94, 80, 94]
    }, {
        name: 'pipline',
        data: [72, 60, 84, 60, 74, 60, 78]
    }],
    chart: {
        fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        height: 245,
        type: 'area',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: false,
        },
    },
    colors: ["#3a57e8", "#4bc7d2"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    yaxis: {
        max: 99,
        min: 54,
        show: true,
        labels: {
            show: true,
            minWidth: 19,
            maxWidth: 19,
            style: {
                colors: "#8A92A6",
            },
            offsetX: -5,
        },
    },
    legend: {
        show: false,
    },
    xaxis: {
        labels: {
            minHeight: 22,
            maxHeight: 22,
            show: true,
            style: {
                colors: "#8A92A6",
            },
        },
        lines: {
            show: false
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"]
    },
    grid: {
        show: false,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: .4,
            opacityTo: .1,
            stops: [0, 50, 80],
            colors: ["#3a57e8", "#4bc7d2"]
        }
    },
    tooltip: {
        enabled: true,
    },
};

export { chartOptions }
