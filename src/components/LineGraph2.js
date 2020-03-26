import React from "react";
import Chart from "react-apexcharts";

export default class Bookings2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: [
                    [1327359600000,30.95],
                    [1327446000000,31.34],
                    [1327532400000,31.18],
                    [1327618800000,31.05],
                    [1327878000000,31.00],
                    [1327964400000,30.95],
                    [1328050800000,31.24],
                    [1328137200000,31.29],
                    [1328223600000,31.85],
                    [1328482800000,31.86]
                ]
            }],
            chart: {
                type: 'area',
                height: 350
            },
            annotations: {
                yaxis: [{
                    y: 30,
                    borderColor: '#999',
                    label: {
                        show: true,
                        text: 'Support',
                        style: {
                            color: "#fff",
                            background: '#00E396'
                        }
                    }
                }],
                xaxis: [{
                    x: new Date('14 Nov 2012').getTime(),
                    borderColor: '#999',
                    yAxisIndex: 0,
                    label: {
                        show: true,
                        text: 'Rally',
                        style: {
                            color: "#fff",
                            background: '#775DD0'
                        }
                    }
                }]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            }
        }
    }

    render() {
        return (
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width={this.props.width}
                />
              </div>
            </div>
          </div>
        );
      }
}