import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

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
            style={{ data: { fill: "teal" } }}
            data={[
            {emotion: 1, value: this.props.score.anger},
            {emotion: 2, value: this.props.score.joy},
            {emotion: 3, value: this.props.score.fear},
            {emotion: 4, value: this.props.score.sadness},
            {emotion: 5, value: this.props.score.surprise}
            ]}
            x="emotion"
            y="value"
          />
        </VictoryChart>
      )
    }
  }


export default BarChart;
