import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div onClick={() => console.log("div onClick")}>
          <button onClick={() => console.log("button onClick")}>button</button>
        </div>
        <hr />
        <div onClickCapture={() => console.log("div onClickCapture")}>
          <button onClick={() => console.log("button onClick")}>
            Event Capturing
          </button>
        </div>
      </div>
    );
  }
}

export default App;
