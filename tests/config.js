require.config({
  baseUrl: '',
  paths: {
    "jquery": "bower_components/jquery/dist/jquery",
    'highcharts': 'bower_components/highcharts/highcharts'
  },
  shim: {
    jquery: {
      exports: "$"
    },
    highcharts: {
        exports: 'Highcharts',
        deps: [ "jquery"] 
    },
  }
});