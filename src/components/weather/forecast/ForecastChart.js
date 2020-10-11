import React, { useContext} from "react";
import Chart from "react-apexcharts";
import { WeatherContext } from "../../lib/WeatherContext";

const TEMP_DIFFERENCE = -273.15;

function ForecastChart(props) {

        const {appState} = useContext(WeatherContext);
        const forecastData = appState.WeatherData[1];

        var xAxisLabels = [];
        var xAxisTempValues = [];

        for ( let i = 0; i < props.loopLength; i++ ) {
            
            let item = forecastData.list[i];
            
            xAxisTempValues.push(Math.round(item.main.temp + (TEMP_DIFFERENCE)));

            let timeString = item.dt_txt.substr(11, 5);
            xAxisLabels.push(timeString);
        }

        var seriesData = {
            name: "Temperature",
            data: xAxisTempValues };
  
            var xaxis = {
                type: 'category',
                categories: xAxisLabels,
                labels: {
                    style: {
                        colors: [],
                        fontSize: '14px',
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    offsetX: 0,
                    offsetY: 0
                },
            };
  
        var gridData = { show: false };
        
        var chartData = { toolbar: { show: false } };
        var colors = ['#FFD632'];
        var markers = {
            show: false
        };
        var options = { 
            'chart' : chartData , 
            'markers' : markers, 
            'colors': colors, 
            'xaxis' : xaxis,
            'yaxis' : {tooltip: {
                enabled: false,
                offsetY: 0,
                style: {
                  fontSize: 0,
                  fontFamily: 0,
                },
            }},
            'grid' : gridData,
            'fill':  {
                'colors' : ['#FFF5CC', '#FFF5CC'],
                'type': ['solid'],
            },
            'dataLabels': {
                enabled: true,
                position: 'top',
                formatter: function(val, opt) {
                    return val + '°C';
                },
                style: {
                    colors: ['black']
                },
                offsetX: 0,
                cssClass: 'apexcharts-xaxis-values',
            },
            'annotations': {
                show: false
            }
              
        };
        var series = [];
        series.push(seriesData);
        
        return (
            <>
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="area" 
                        height="200"
                    />
                </div>
            </> 
        )
}

export default ForecastChart;