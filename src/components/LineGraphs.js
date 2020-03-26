import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          height: 'auto'
        },
        xaxis: {
          type: 'datetime',
        }
      },
      series: [
        {
          name:'low',
          data: props.data.low
        },
        {
          name:'high',
          data: props.data.high
        },
        {
          name:'close',
          data: props.data.close
        },
        {
          name:'open',
          data: props.data.open
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width={this.props.width}
            />
          </div>
        </div>
      </div>
    );
  }
}
