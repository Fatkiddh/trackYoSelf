import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
{emotion: 1, fill: "red", value: .2},
{emotion: 2, fill: "green", value: .5},
{emotion: 3, fill: "gold", value: .3},
{emotion: 4, fill: "blue", value: .7},
{emotion: 5, fill: "pink", value: .9}
];

class BarChart extends Component {

    render() {
      return (
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={["Anger", "Joy", "Fear", "Sadness", "Surprise"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar
            data={data}
            x="emotion"
            y="value"
          />
        </VictoryChart>
      )
    }
  }


export default BarChart;
