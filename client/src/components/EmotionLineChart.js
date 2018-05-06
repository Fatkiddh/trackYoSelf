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
                colorScale={"qualitative"}
                theme={VictoryTheme.material}
                height={350}
                width={800}
                domainPadding={{ top: 50, bottom: 50, left: 50, right: 50 }}
                scale={{ x: "time"}}
                // containerComponent={<VictoryContainer responsive={false}/>}

            >
                <VictoryGroup 
                offset={0}
                    // need to add labels and make x axis the same
                    // add scale
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: new Date(2018, 5, 1), y: 0.17 },
                            { x: new Date(2018, 5, 2), y: 0.25 },
                            { x: new Date(2018, 5, 3), y: 0.24 },
                            { x: new Date(2018, 5, 4), y: 0.15 },
                            { x: new Date(2018, 5, 5), y: 0.19 },
                            { x: new Date(2018, 5, 6), y: 0.17 },
                            { x: new Date(2018, 5, 7), y: 0.25 },
                            { x: new Date(2018, 5, 8), y: 0.24 },
                            { x: new Date(2018, 5, 9), y: 0.15 },
                            { x: new Date(2018, 5, 10), y: 0.19 },
                            { x: new Date(2018, 5, 11), y: 0.17 },
                            { x: new Date(2018, 5, 12), y: 0.25 },
                            { x: new Date(2018, 5, 13), y: 0.24 },
                            { x: new Date(2018, 5, 14), y: 0.15 },
                            { x: new Date(2018, 5, 15), y: 0.19 },
                            { x: new Date(2018, 5, 16), y: 0.17 },
                            { x: new Date(2018, 5, 17), y: 0.25 },
                            { x: new Date(2018, 5, 18), y: 0.24 },
                            { x: new Date(2018, 5, 19), y: 0.15 },
                            { x: new Date(2018, 5, 20), y: 0.19 },
                            { x: new Date(2018, 5, 21), y: 0.17 },
                            { x: new Date(2018, 5, 22), y: 0.25 },
                            { x: new Date(2018, 5, 23), y: 0.24 },
                            { x: new Date(2018, 5, 24), y: 0.15 },
                            { x: new Date(2018, 5, 25), y: 0.19 },
                            { x: new Date(2018, 5, 26), y: 0.17 },
                            { x: new Date(2018, 5, 27), y: 0.25 },
                            { x: new Date(2018, 5, 28), y: 0.24 },
                            { x: new Date(2018, 5, 29), y: 0.15 },
                            { x: new Date(2018, 5, 30), y: 0.19 }
                        ]}
                    />

                    <VictoryLine
                        style={{
                            data: { stroke: "#4256ca" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: new Date(2018, 5, 1), y: 0.37 },
                            { x: new Date(2018, 5, 2), y: 0.28 },
                            { x: new Date(2018, 5, 3), y: 0.14 },
                            { x: new Date(2018, 5, 4), y: 0.65 },
                            { x: new Date(2018, 5, 5), y: 0.30 },
                            { x: new Date(2018, 5, 6), y: 0.37 },
                            { x: new Date(2018, 5, 7), y: 0.28 },
                            { x: new Date(2018, 5, 8), y: 0.14 },
                            { x: new Date(2018, 5, 9), y: 0.65 },
                            { x: new Date(2018, 5, 10), y: 0.30 },
                            { x: new Date(2018, 5, 11), y: 0.37 },
                            { x: new Date(2018, 5, 12), y: 0.28 },
                            { x: new Date(2018, 5, 13), y: 0.14 },
                            { x: new Date(2018, 5, 14), y: 0.65 },
                            { x: new Date(2018, 5, 15), y: 0.30 },
                            { x: new Date(2018, 5, 16), y: 0.37 },
                            { x: new Date(2018, 5, 17), y: 0.28 },
                            { x: new Date(2018, 5, 18), y: 0.14 },
                            { x: new Date(2018, 5, 19), y: 0.65 },
                            { x: new Date(2018, 5, 20), y: 0.30 },
                            { x: new Date(2018, 5, 21), y: 0.37 },
                            { x: new Date(2018, 5, 22), y: 0.28 },
                            { x: new Date(2018, 5, 23), y: 0.14 },
                            { x: new Date(2018, 5, 24), y: 0.65 },
                            { x: new Date(2018, 5, 25), y: 0.30 },
                            { x: new Date(2018, 5, 26), y: 0.37 },
                            { x: new Date(2018, 5, 27), y: 0.28 },
                            { x: new Date(2018, 5, 28), y: 0.14 },
                            { x: new Date(2018, 5, 29), y: 0.65 },
                            { x: new Date(2018, 5, 30), y: 0.30 }
                        ]}
                    />
                </VictoryGroup>
            </VictoryChart>
        )
    }
}
export default EmotionLineChart;