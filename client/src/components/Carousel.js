import React from "react";
import { Carousel, Icon } from "react-materialize";

const style = {
  fontSize: "20px",
  width: "300px",
  margin: "0 auto"
};
export default () => (
  <Carousel
    className="center"
    options={{ fullWidth: true, indicators: true }}
    images={[]}>
    <div className="light-blue lighten-4">
      <br />
      <br />
      <br />
      <Icon large className="center">
        favorite_border
      </Icon>
      <p style={style}>
        Keep track of how you're feeling. Record significant events or every day
        occurrences in your life.
      </p>
    </div>
    <div className="cyan lighten-4">
      <br />
      <br />
      <Icon large className="center">
        timeline
      </Icon>
      <p style={style}>
        Automatic sentiment analysis on your tracks will score emotions based on
        the text in your track. See how your mood changes over time.
      </p>
    </div>
    <div className="teal lighten-4">
      <br />
      <br />
      <Icon large className="center">
        spa
      </Icon>
      <p style={style}>
        Sentiment analysis provided by the Indico.io API. Scores 5 emotions:
        anger, joy, fear, sadness, and surprise.
      </p>
    </div>
  </Carousel>
);
