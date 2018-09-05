import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div onClick={() => console.log("div onClick")}>
          <button
            style={{ fontSize: 40 }}
            onClick={() => console.log("button onClick")}
          >
            Event Bubbling(Default)
          </button>
        </div>
        <hr />
        <div onClickCapture={() => console.log("div onClickCapture")}>
          <button
            style={{ fontSize: 40 }}
            onClick={() => console.log("button onClick")}
          >
            Event Capturing
          </button>
        </div>
      </div>
    );
  }
}

export default App;
