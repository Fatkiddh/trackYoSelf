import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryGroup } from 'victory';

class EmotionLineChart extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { data: this.getData() };
    //   }
    
    //   componentDidMount() {
    //     this.setStateInterval = window.setInterval(() => {
    //       this.setState({ data: this.getData() });
    //     }, 3000);
    //   }
    
    //   componentWillUnmount() {
    //     window.clearInterval(this.setStateInterval);
    //   }
    
    //   getData() {
    //     const num = Math.floor(10 * Math.random() + 5);
    //     const points = new Array(num).fill(1);
    //     return points.map((point, index) => {
    //       return { x: index + 1, y: Math.random() };
    //     });
    //   }
      

    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                height={350}
                // width={700}
                padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
                // containerComponent={<VictoryContainer responsive={false}/>}

            >
                <VictoryGroup offset={0}
                    colorScale={"qualitative"}
                    // need to add labels and make x asix the same
                    // add scale
                    // domain={{ y: [0, 2] }}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: "05-01", y: 0.17 },
                            { x: "05-02", y: 0.25 },
                            { x: "05-03", y: 0.24 },
                            { x: "05-04", y: 0.15 },
                            { x: "05-05", y: 0.19 }
                        ]}
                    />

                    <VictoryLine
                        style={{
                            data: { stroke: "#4256ca" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: "05-01", y: 0.37 },
                            { x: "05-02", y: 0.28 },
                            { x: "05-03", y: 0.14 },
                            { x: "05-04", y: 0.65 },
                            { x: "05-05", y: 0.30 }
                        ]}
                    />
                </VictoryGroup>
            </VictoryChart>
        )
    }
}
export default EmotionLineChart;