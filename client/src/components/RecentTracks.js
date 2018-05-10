import React from "react";
import { Collapsible, CollapsibleItem, Row, Col } from "react-materialize";
import EditTrack from "./EditTrack";
import BarChart from "../components/EmotionBarChart";

const RecentTrack = props => (
  <Row>
    <Col s={12} m={10} className="push-m1">
      <Collapsible accordion>
        {props.tracks.map(track => (
          <CollapsibleItem
            key={track._id}
            header={track.title}
            icon="arrow_drop_down_circle">
            <Row>
              <Col s={12} m={7}>
                <p>{track.entry}</p>
              </Col>
              <Col s={12} m={5}>
                <Row className="center-align">
                  <EditTrack
                    title={track.title}
                    entry={track.entry}
                    id={track._id}
                  />
                </Row>
                <Row>
                  <BarChart score={track.score} />
                </Row>
              </Col>
            </Row>
          </CollapsibleItem>
        ))}
      </Collapsible>
    </Col>
  </Row>
);

export default RecentTrack;
