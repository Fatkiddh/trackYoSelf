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
                        interpolation="natural"
                        style={{
                            data: { stroke: "green", strokeWidth: 5 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: new Date(2018, 5, 1), y: Math.random() },
                            { x: new Date(2018, 5, 2), y: Math.random() },
                            { x: new Date(2018, 5, 3), y: Math.random() },
                            { x: new Date(2018, 5, 4), y: Math.random() },
                            { x: new Date(2018, 5, 5), y: Math.random() },
                            { x: new Date(2018, 5, 6), y: Math.random() },
                            { x: new Date(2018, 5, 7), y: Math.random() },
                            { x: new Date(2018, 5, 8), y: Math.random() },
                            { x: new Date(2018, 5, 9), y: Math.random() },
                            { x: new Date(2018, 5, 10), y: Math.random() },
                            { x: new Date(2018, 5, 11), y: Math.random() },
                            { x: new Date(2018, 5, 12), y: Math.random() },
                            { x: new Date(2018, 5, 13), y: Math.random() },
                            { x: new Date(2018, 5, 14), y: Math.random() },
                            { x: new Date(2018, 5, 15), y: Math.random() },
                            { x: new Date(2018, 5, 16), y: Math.random() },
                            { x: new Date(2018, 5, 17), y: Math.random() },
                            { x: new Date(2018, 5, 18), y: Math.random() },
                            { x: new Date(2018, 5, 19), y: Math.random() },
                            { x: new Date(2018, 5, 20), y: Math.random() },
                            { x: new Date(2018, 5, 21), y: Math.random() },
                            { x: new Date(2018, 5, 22), y: Math.random() },
                            { x: new Date(2018, 5, 23), y: Math.random() },
                            { x: new Date(2018, 5, 24), y: Math.random() },
                            { x: new Date(2018, 5, 25), y: Math.random() },
                            { x: new Date(2018, 5, 26), y: Math.random() },
                            { x: new Date(2018, 5, 27), y: Math.random() },
                            { x: new Date(2018, 5, 28), y: Math.random() },
                            { x: new Date(2018, 5, 29), y: Math.random() },
                            { x: new Date(2018, 5, 30), y: Math.random() }
                        ]}
                    />

                    <VictoryLine
                        interpolation="natural"
                        style={{
                            data: { stroke: "indigo", strokeWidth: 5 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: new Date(2018, 5, 1), y: Math.random() },
                            { x: new Date(2018, 5, 2), y: Math.random() },
                            { x: new Date(2018, 5, 3), y: Math.random() },
                            { x: new Date(2018, 5, 4), y: Math.random() },
                            { x: new Date(2018, 5, 5), y: Math.random() },
                            { x: new Date(2018, 5, 6), y: Math.random() },
                            { x: new Date(2018, 5, 7), y: Math.random() },
                            { x: new Date(2018, 5, 8), y: Math.random() },
                            { x: new Date(2018, 5, 9), y: Math.random() },
                            { x: new Date(2018, 5, 10), y: Math.random() },
                            { x: new Date(2018, 5, 11), y: Math.random() },
                            { x: new Date(2018, 5, 12), y: Math.random() },
                            { x: new Date(2018, 5, 13), y: Math.random() },
                            { x: new Date(2018, 5, 14), y: Math.random() },
                            { x: new Date(2018, 5, 15), y: Math.random() },
                            { x: new Date(2018, 5, 16), y: Math.random() },
                            { x: new Date(2018, 5, 17), y: Math.random() },
                            { x: new Date(2018, 5, 18), y: Math.random() },
                            { x: new Date(2018, 5, 19), y: Math.random() },
                            { x: new Date(2018, 5, 20), y: Math.random() },
                            { x: new Date(2018, 5, 21), y: Math.random() },
                            { x: new Date(2018, 5, 22), y: Math.random() },
                            { x: new Date(2018, 5, 23), y: Math.random() },
                            { x: new Date(2018, 5, 24), y: Math.random() },
                            { x: new Date(2018, 5, 25), y: Math.random() },
                            { x: new Date(2018, 5, 26), y: Math.random() },
                            { x: new Date(2018, 5, 27), y: Math.random() },
                            { x: new Date(2018, 5, 28), y: Math.random() },
                            { x: new Date(2018, 5, 29), y: Math.random() },
                            { x: new Date(2018, 5, 30), y: Math.random() }
                        ]}
                    />

                    <VictoryLine
                        interpolation="natural"
                        style={{
                            data: { stroke: "orange", strokeWidth: 5 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: new Date(2018, 5, 1), y: Math.random() },
                            { x: new Date(2018, 5, 2), y: Math.random() },
                            { x: new Date(2018, 5, 3), y: Math.random() },
                            { x: new Date(2018, 5, 4), y: Math.random() },
                            { x: new Date(2018, 5, 5), y: Math.random() },
                            { x: new Date(2018, 5, 6), y: Math.random() },
                            { x: new Date(2018, 5, 7), y: Math.random() },
                            { x: new Date(2018, 5, 8), y: Math.random() },
                            { x: new Date(2018, 5, 9), y: Math.random() },
                            { x: new Date(2018, 5, 10), y: Math.random() },
                            { x: new Date(2018, 5, 11), y: Math.random() },
                            { x: new Date(2018, 5, 12), y: Math.random() },
                            { x: new Date(2018, 5, 13), y: Math.random() },
                            { x: new Date(2018, 5, 14), y: Math.random() },
                            { x: new Date(2018, 5, 15), y: Math.random() },
                            { x: new Date(2018, 5, 16), y: Math.random() },
                            { x: new Date(2018, 5, 17), y: Math.random() },
                            { x: new Date(2018, 5, 18), y: Math.random() },
                            { x: new Date(2018, 5, 19), y: Math.random() },
                            { x: new Date(2018, 5, 20), y: Math.random() },
                            { x: new Date(2018, 5, 21), y: Math.random() },
                            { x: new Date(2018, 5, 22), y: Math.random() },
                            { x: new Date(2018, 5, 23), y: Math.random() },
                            { x: new Date(2018, 5, 24), y: Math.random() },
                            { x: new Date(2018, 5, 25), y: Math.random() },
                            { x: new Date(2018, 5, 26), y: Math.random() },
                            { x: new Date(2018, 5, 27), y: Math.random() },
                            { x: new Date(2018, 5, 28), y: Math.random() },
                            { x: new Date(2018, 5, 29), y: Math.random() },
                            { x: new Date(2018, 5, 30), y: Math.random() }
                        ]}
                    />

                    <VictoryLine
                        interpolation="natural"
                        style={{
                            data: { stroke: "teal", strokeWidth: 5 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: new Date(2018, 5, 1), y: Math.random() },
                            { x: new Date(2018, 5, 2), y: Math.random() },
                            { x: new Date(2018, 5, 3), y: Math.random() },
                            { x: new Date(2018, 5, 4), y: Math.random() },
                            { x: new Date(2018, 5, 5), y: Math.random() },
                            { x: new Date(2018, 5, 6), y: Math.random() },
                            { x: new Date(2018, 5, 7), y: Math.random() },
                            { x: new Date(2018, 5, 8), y: Math.random() },
                            { x: new Date(2018, 5, 9), y: Math.random() },
                            { x: new Date(2018, 5, 10), y: Math.random() },
                            { x: new Date(2018, 5, 11), y: Math.random() },
                            { x: new Date(2018, 5, 12), y: Math.random() },
                            { x: new Date(2018, 5, 13), y: Math.random() },
                            { x: new Date(2018, 5, 14), y: Math.random() },
                            { x: new Date(2018, 5, 15), y: Math.random() },
                            { x: new Date(2018, 5, 16), y: Math.random() },
                            { x: new Date(2018, 5, 17), y: Math.random() },
                            { x: new Date(2018, 5, 18), y: Math.random() },
                            { x: new Date(2018, 5, 19), y: Math.random() },
                            { x: new Date(2018, 5, 20), y: Math.random() },
                            { x: new Date(2018, 5, 21), y: Math.random() },
                            { x: new Date(2018, 5, 22), y: Math.random() },
                            { x: new Date(2018, 5, 23), y: Math.random() },
                            { x: new Date(2018, 5, 24), y: Math.random() },
                            { x: new Date(2018, 5, 25), y: Math.random() },
                            { x: new Date(2018, 5, 26), y: Math.random() },
                            { x: new Date(2018, 5, 27), y: Math.random() },
                            { x: new Date(2018, 5, 28), y: Math.random() },
                            { x: new Date(2018, 5, 29), y: Math.random() },
                            { x: new Date(2018, 5, 30), y: Math.random() }
                        ]}
                    />

                    <VictoryLine
                        interpolation="natural"
                        style={{
                            data: { stroke: "pink", strokeWidth: 5 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: new Date(2018, 5, 1), y: Math.random() },
                            { x: new Date(2018, 5, 2), y: Math.random() },
                            { x: new Date(2018, 5, 3), y: Math.random() },
                            { x: new Date(2018, 5, 4), y: Math.random() },
                            { x: new Date(2018, 5, 5), y: Math.random() },
                            { x: new Date(2018, 5, 6), y: Math.random() },
                            { x: new Date(2018, 5, 7), y: Math.random() },
                            { x: new Date(2018, 5, 8), y: Math.random() },
                            { x: new Date(2018, 5, 9), y: Math.random() },
                            { x: new Date(2018, 5, 10), y: Math.random() },
                            { x: new Date(2018, 5, 11), y: Math.random() },
                            { x: new Date(2018, 5, 12), y: Math.random() },
                            { x: new Date(2018, 5, 13), y: Math.random() },
                            { x: new Date(2018, 5, 14), y: Math.random() },
                            { x: new Date(2018, 5, 15), y: Math.random() },
                            { x: new Date(2018, 5, 16), y: Math.random() },
                            { x: new Date(2018, 5, 17), y: Math.random() },
                            { x: new Date(2018, 5, 18), y: Math.random() },
                            { x: new Date(2018, 5, 19), y: Math.random() },
                            { x: new Date(2018, 5, 20), y: Math.random() },
                            { x: new Date(2018, 5, 21), y: Math.random() },
                            { x: new Date(2018, 5, 22), y: Math.random() },
                            { x: new Date(2018, 5, 23), y: Math.random() },
                            { x: new Date(2018, 5, 24), y: Math.random() },
                            { x: new Date(2018, 5, 25), y: Math.random() },
                            { x: new Date(2018, 5, 26), y: Math.random() },
                            { x: new Date(2018, 5, 27), y: Math.random() },
                            { x: new Date(2018, 5, 28), y: Math.random() },
                            { x: new Date(2018, 5, 29), y: Math.random() },
                            { x: new Date(2018, 5, 30), y: Math.random() }
                        ]}
                    />
                </VictoryGroup>
            </VictoryChart>
        )
    }
}
export default EmotionLineChart;
