define(function() {
	chartConfigs = {
        title: {
            text: '',
            x: 0
        },
        subtitle: {
            text: '',
            x: 0
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: []
    }
	return chartConfigs;
});