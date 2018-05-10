import React, { Component } from "react";
import { Row, Col, Input } from "react-materialize";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryGroup } from "victory";
import API from "./../utils/API";

class EmotionLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAnger: false,
      checkJoy: false,
      checkFear: false,
      checkSadness: false,
      checkSurprise: false,
      tracks: [],
      joyData: [],
      angerData: [],
      fearData: [],
      sadnessData: [],
      surpriseData: []
    };
  }

  populateJoyData = trackArray => {
    let array = [];
    for (let i = 0; i < trackArray.length; i++) {
      let obj = {
        x: i,
        y: trackArray[i].score.joy
      };
      array.push(obj);
    }

    return array;
  };

  populateAngerData = trackArray => {
    let array = [];
    for (let i = 0; i < trackArray.length; i++) {
      let obj = {
        x: i,
        y: trackArray[i].score.anger
      };
      array.push(obj);
    }

    return array;
  };

  populateFearData = trackArray => {
    let array = [];
    for (let i = 0; i < trackArray.length; i++) {
      let obj = {
        x: i,
        y: trackArray[i].score.fear
      };
      array.push(obj);
    }

    return array;
  };

  populateSadnessData = trackArray => {
    let array = [];
    for (let i = 0; i < trackArray.length; i++) {
      let obj = {
        x: i,
        y: trackArray[i].score.sadness
      };
      array.push(obj);
    }

    return array;
  };

  populateSurpriseData = trackArray => {
    let array = [];
    for (let i = 0; i < trackArray.length; i++) {
      let obj = {
        x: i,
        y: trackArray[i].score.surprise
      };
      array.push(obj);
    }

    return array;
  };

  componentDidMount() {
    API.getTracks()
      .then(res => {
        this.setState({ tracks: res.data });
        this.setState({ joyData: this.populateJoyData(this.state.tracks) });
        this.setState({ angerData: this.populateAngerData(this.state.tracks) });
        this.setState({ fearData: this.populateFearData(this.state.tracks) });
        this.setState({
          sadnessData: this.populateSadnessData(this.state.tracks)
        });
        this.setState({
          surpriseData: this.populateSurpriseData(this.state.tracks)
        });
      })
      .catch(err => console.log("error"));
  }

  handleInputChange = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: !checked
    });
  };

  render() {
    return (
      <Row>
        <Col s={12} m={11} style={{ background: "#e6f2ff" }}>
          <VictoryChart
            theme={VictoryTheme.material}
            height={350}
            width={800}
            padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
            scale={{ x: "linear" }}>
            {/* // containerComponent={<VictoryContainer responsive={false} />} */}
            <VictoryGroup
              offset={0}
              colorScale={"qualitative"}
              domain={
                { y: [0, 1] } // need to add labels and make x asix the same
              }
              range={{ x: [0, 30] }}>
              {!this.state.checkAnger ? (
                <VictoryLine
                  interpolation="basis"
                  style={{
                    data: { stroke: "red", strokeWidth: 2 },
                    parent: { border: "1px solid #ccc" }
                  }}
                  data={this.state.angerData}
                />
              ) : null}

              {!this.state.checkJoy ? (
                <VictoryLine
                  interpolation="basis"
                  style={{
                    data: { stroke: "#00ace6", strokeWidth: 2 },
                    parent: { border: "1px solid #ccc" }
                  }}
                  data={this.state.joyData}
                />
              ) : null}

              {!this.state.checkFear ? (
                <VictoryLine
                  interpolation="basis"
                  style={{
                    data: { stroke: "#ff8000", strokeWidth: 2 },
                    parent: { border: "1px solid #ccc" }
                  }}
                  data={this.state.fearData}
                />
              ) : null}

              {!this.state.checkSadness ? (
                <VictoryLine
                  interpolation="basis"
                  style={{
                    data: { stroke: "#000066", strokeWidth: 2 },
                    parent: { border: "1px solid #ccc" }
                  }}
                  data={this.state.sadnessData}
                />
              ) : null}

              {!this.state.checkSurprise ? (
                <VictoryLine
                  interpolation="basis"
                  style={{
                    data: { stroke: "#33cc33", strokeWidth: 2 },
                    parent: { border: "1px solid #ccc" }
                  }}
                  data={this.state.surpriseData}
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
              label={<span style={{ color: "#ff0000" }}>Anger</span>}
              className="filled-in red"
              checked={!this.state.checkAnger}
              onChange={this.handleInputChange}
            />
            <Input
              name="checkJoy"
              type="checkbox"
              value="joy"
              label={<span style={{ color: "#00ace6" }}>Joy</span>}
              className="filled-in"
              checked={!this.state.checkJoy}
              onChange={this.handleInputChange}
            />
            <Input
              name="checkFear"
              type="checkbox"
              value="fear"
              label={<span style={{ color: "#ff8000" }}>Fear</span>}
              className="filled-in"
              checked={!this.state.checkFear}
              onChange={this.handleInputChange}
            />
            <Input
              name="checkSadness"
              type="checkbox"
              value="sadness"
              label={<span style={{ color: "#000066" }}>Sadness</span>}
              className="filled-in"
              checked={!this.state.checkSadness}
              onChange={this.handleInputChange}
            />
            <Input
              name="checkSurprise"
              type="checkbox"
              value="surprise"
              label={<span style={{ color: "#33cc33"}}>Surprise</span>}
              className="filled-in"
              style={{ color: "#33cc33" }}
              checked={!this.state.checkSurprise}
              onChange={this.handleInputChange}
            />
          </form>
        </Col>
      </Row>
    );
  }
}

export default EmotionLineChart;
