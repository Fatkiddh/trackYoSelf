import React, { Component } from "react";
import _ from 'lodash';
// import { Row, Col, Input } from "react-materialize";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryGroup } from "victory";
// import moment from 'moment';

class EmotionLineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkAnger: true,
            checkJoy: true,
            checkFear: true,
            checkSadness: true,
            checkSurprise: true,
            data: this.props.tracks
        };
    }

    componentDidMount() {
        console.log("props OG", this.props.tracks);
    };

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(prevProps.tracks, this.props.tracks)) {
            console.log('hi');
            this.setState({
                data: this.props.tracks
            });
            console.log("state: ", this.state.data);
            console.log("props ", this.props.tracks);
        }
    }

    handleInputChange = event => {
        const { name, checked } = event.target;
        this.setState({
            [name]: !checked
        })
    };

    // getFormattedDate = date => {
    //     let newDate = "";
    //     newDate = date.getDate();
    //     return newDate;
    // };

    render() {
        return (
            <VictoryChart
                colorScale={"qualitative"}
                theme={VictoryTheme.material}
                height={350}
                width={800}
                domainPadding={{ top: 50, bottom: 50, left: 50, right: 50 }}
                scale={{ x: "time" }}
            // containerComponent={<VictoryContainer responsive={false}/>}

            >
                <VictoryGroup
                    offset={0}
                // need to add labels and make x axis the same
                >

                    <VictoryLine
                        interpolation="basis"
                        style={{
                            data: { stroke: "green", strokeWidth: 3 },
                            parent: { border: "1px solid #ccc" }
                        }}

                        data={this.props.tracks}
                        // data={[
                        //     { date: 1, value: 1 },
                        //     { date: 2, value: 2 },
                        //     { date: 3, value: 3 },
                        //     { date: 4, value: 4 },
                        //     { date: 5, value: 5 },
                        // ]}

                        // data={[
                        //     { date: 1, value: this.props.tracks.score.anger[0] },
                        //     { date: 2, value: this.props.tracks.score.anger[1] },
                        //     { date: 3, value: this.props.tracks.score.anger[2] },
                        //     { date: 4, value: this.props.tracks.score.anger[3] },
                        //     { date: 5, value: this.props.tracks.score.anger[4] },
                        // ]}
        
                        // x={(d) => moment(d.date)}
                        x="date"
                        y="score.joy"
                    />

                    {/* <VictoryLine
                        interpolation="basis"
                        style={{
                            data: { stroke: "indigo", strokeWidth: 3 },
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
                        interpolation="basis"
                        style={{
                            data: { stroke: "orange", strokeWidth: 3 },
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
                        interpolation="basis"
                        style={{
                            data: { stroke: "teal", strokeWidth: 3 },
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
                        interpolation="basis"
                        style={{
                            data: { stroke: "pink", strokeWidth: 3 },
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
                        ]} */}
                    {/* /> */}
                </VictoryGroup>
            </VictoryChart>
        )
    }
}

export default EmotionLineChart;