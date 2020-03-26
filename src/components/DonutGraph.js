import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {},
        series: props.series,
        labels: props.labels
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
              type="donut"
            />
          </div>
        </div>
      </div>
    );
  }
}
