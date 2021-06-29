import React, { Component } from "react";

import Info from "./Info";
import ChallengeInput from "./ChallengeInput";
import Score from "./Score";
import { Context } from "../../Contexts/Context";
const initialState = {
  result: null,
};
class SpeedCheck extends Component {
  state = initialState;

  setResult = (result) => {
    this.setState({
      result,
    });
  };
  render() {
    const { result } = this.state;
    return (
      <Context.Consumer>
        {(context) => {
          const { currentChallange } = context.state;
          console.log(currentChallange.text)
          return (
            <div>
              <div>
                <Info challenge={currentChallange.text} />
                <hr />
                <ChallengeInput
                  challenge={currentChallange.text}
                  setResult={this.setResult}
                />
                <hr />
              </div>
              {result !== null ? <Score score={this.state.result} /> : null}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default SpeedCheck;
