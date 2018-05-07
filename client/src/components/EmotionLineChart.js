import React, { Component } from "react";
import { Row, Col, Input } from "react-materialize";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryGroup } from "victory";

class EmotionLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAnger: true,
      checkJoy: true,
      checkFear: true,
      checkSadness: true,
      checkSurprise: true
    };
  }

  //   componentDidMount() {}

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
  handleInputChange = event => {
    const { name, checked } = event.target;
    this.setState({
        [name]: !checked
    })
  };

  render() {
    return (
      <Row>
        <Col s={12} m={11}>
          <VictoryChart
            theme={VictoryTheme.material}
            height={350}
            width={800}
            padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
            scale={{ x: "time" }}
            // containerComponent={<VictoryContainer responsive={false}/>}
          >
            <VictoryGroup
              offset={0}
              colorScale={"qualitative"}
              // need to add labels and make x asix the same
              domain={{ y: [0, 1] }}
              range={{ x: [0, 30]}}
              >
              {this.state.checkAnger ? (
                <VictoryLine
                  interpolation="basis"
                  style={{
                    data: { stroke: "green", strokeWidth: 3 },
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
              ) : null}

              {this.state.checkJoy ? (
                <VictoryLine
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
              ) : null}


              {this.state.checkFear ? (
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
              ) : null}

              {this.state.checkSadness ? (
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
              ) : null}

              {this.state.checkSurprise ? (
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
                  ]}
                />
              ) : null}
            </VictoryGroup>
          </VictoryChart>
        </Col>
        <Col s={12} m={1}>
          <form>
            <Input
              name="checkAnger"
              type="checkbox"
              value="anger"
              label="Anger"
              className="filled-in"
              checked={this.state.checkAnger}
              onClick={this.handleInputChange}
            />
            <Input
              name="checkFear"
              type="checkbox"
              value="joy"
              label="Joy"
              className="filled-in"
              checked={this.state.checkFear}
              onClick={this.handleInputChange}
            />
            <Input
              name="checkJoy"
              type="checkbox"
              value="fear"
              label="Fear"
              className="filled-in"
              checked={this.state.checkJoy}
              onClick={this.handleInputChange}
            />
            <Input
              name="checkSadness"
              type="checkbox"
              value="sadness"
              label="Sadness"
              className="filled-in"
              checked={this.state.checkSadness}
              onClick={this.handleInputChange}
            />
            <Input
              name="checkSurprise"
              type="checkbox"
              value="surprise"
              label="Surprise"
              className="filled-in"
              checked={this.state.checkSurprise}
              onClick={this.handleInputChange}
            />
          </form>
        </Col>
      </Row>
    );
  }
}

export default EmotionLineChart;
