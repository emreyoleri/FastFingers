import React, { Component } from "react";

import Info from "./Info";
import ChallengeInput from "./ChallengeInput";
import Score from "./Score";
const initialState = {
  result: null,
};
class SpeedCheck extends Component {
 
  challenge =
    "Emre Yoleri";
  state = initialState;

  setResult = (result) => {
    this.setState({
      result,
    });
  };
  render() {
    const { result } = this.state;
    return (
      <React.Fragment>
        <Info challenge={this.challenge} />
        <hr />
        <ChallengeInput challenge={this.challenge} setResult={this.setResult} />
        <hr />
        {result !== null ? <Score score={this.state.result} /> : null}
      </React.Fragment>
    );
  }
}
export default SpeedCheck;
