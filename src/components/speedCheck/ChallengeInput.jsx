import React, { Component } from "react";
const initialState = {
  entry: "",
  isDisabled: false,
  start: null,
  end: null,
};
class ChallengeInput extends Component {
  challenge = this.props.challenge.toLowerCase();
  state = initialState;
  keyMap = [];
  changeHandler = (e) => {
    let { start } = this.state;
    if (start === null) {
      start = new Date().getTime();
    }
    if (e.target.value === " ") {
      this.resetState();
    } else if (this.challenge.length + 1 <= e.target.value.length) {
      this.stopEndCheck();
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
        start,
      });
    }
  };

  resetState = () => {
    this.setState(initialState);
  };

  stopEndCheck = () => {
    let end = new Date().getTime();
    const { entry, start } = this.state;
    const result = this.checkEntry(entry, end, start, Math.random());
    this.props.setResult(result);
    this.setState({
      ...this.state,
      isDisabled: true,
      end,
    });
  };

  keyDownHandler = (e) => {
    this.keyMap[e.keyCode] = e.type === "keydown";
    if (this.keyMap[17] && this.keyMap[13]) {
      this.stopEndCheck();
    }
  };

  checkEntry = (entry, end, start, id) => {
    let sum = 0;
    const challengeArray = this.challenge.toLowerCase().split(" ");
    const entryArray = entry.toLowerCase().split(" ");
    challengeArray.forEach((challengeWord, index) => {
      for (
        let wordLetter = 0;
        wordLetter < challengeWord.length;
        wordLetter++
      ) {
        if (
          entryArray[index] &&
          challengeWord[wordLetter] === entryArray[index][wordLetter]
        ) {
          sum = sum + 1;
        }
      }
    });
    sum = sum + entryArray.length - 1;
    console.log(sum);
    let accuracy = (sum * 100) / this.challenge.length;
    let duration = (end - start) / 1000;
    let wordsPerMinute = (sum * 60) / (6 * duration);

    const result = {
      id,
      duration: duration.toFixed(2),
      accuracy: accuracy.toFixed(2),
      wordsPerMinute: wordsPerMinute.toFixed(2),
      wordsLength: challengeArray.length,
    };

    const localStorageCheck = JSON.parse(localStorage.getItem("scores"));
    const newLocalStorage = [...localStorageCheck, result];
    localStorage.setItem("scores", JSON.stringify(newLocalStorage));

    return result;
  };

  keyUphandler = () => {
    this.keyMap = [];
  };
  componentDidMount() {
    const localStorageCheck = JSON.parse(localStorage.getItem("scores"));
    if (!localStorageCheck) {
      localStorage.setItem("scores", JSON.stringify([]));
    }

    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUphandler);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
    document.removeEventListener("keyup", this.keyUphandler);
  }
  render() {
    const { entry, isDisabled } = this.state;
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          name="entry"
          value={entry}
          disabled={isDisabled}
          onChange={this.changeHandler}
          className="form-control"
          placeholder="Metni giriniz"
          autoComplete="off"
        />
        <div className="input-group-append">
          <button
            className="btn btn-info"
            onClick={this.resetState}
            type="button"
            id="reset"
          >
            Reset
          </button>
          <button className="btn btn-danger" type="button">
            {`${this.challenge.length - entry.length} / ${
              this.challenge.length
            }`}
          </button>
        </div>
      </div>
    );
  }
}

export default ChallengeInput;
