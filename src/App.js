import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    eyeLeft: React.createRef(),
    eyeRight: React.createRef(),
    eyeBall: React.createRef(),
    lx: 0,
    ly: 0,
    rx: 0,
    ry: 0,
    eyeBallLX: 0,
    eyeBallLY: 0,
    eyeBallRX: 0,
    eyeBallRY: 0,
    lCircle: [],
    rCircle: [],
  };
  componentDidMount() {
    this.eyeCheck();
    window.addEventListener("resize", this.eyeCheck);
  }

  eyeCheck = () => {
    this.eyeCheckLeft();
    this.eyeCheckRight();
  };

  eyeCheckLeft = () => {
    const { eyeLeft } = this.state;
    const { top, bottom, left, right } =
      eyeLeft.current.getBoundingClientRect();
    const ly = (top + bottom) / 2;
    const lx = (left + right) / 2;

    //console.log("left", lx, ly);

    this.setState({ lx, ly });
  };
  eyeCheckRight = () => {
    const { eyeRight } = this.state;
    const { top, bottom, left, right } =
      eyeRight.current.getBoundingClientRect();
    const ry = (top + bottom) / 2;
    const rx = (left + right) / 2;

    //console.log("right", rx, ry);

    this.setState({ rx, ry });
  };

  handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    //const x = e.nativeEvent.offsetX;
    //const y = e.nativeEvent.offsetY;
    const { x: prevX, y: prevY } = this.state;
    if (x === prevX && y === prevY) return;

    const { lx, ly } = this.state;
    //console.log(x, y, lx, ly);
    const eyeBallLX = lx > x ? "-1.5rem" : "1.5rem";
    const eyeBallLY = ly > y ? "-1.5rem" : "1.5rem";

    const { rx, ry } = this.state;
    const eyeBallRX = rx > x ? "-1.5rem" : "1.5rem";
    const eyeBallRY = ry > y ? "-1.5rem" : "1.5rem";

    this.setState({ eyeBallLX, eyeBallLY, eyeBallRX, eyeBallRY });
  };
  render() {
    return (
      <div className="main-container">
        {/*

			  <div className="testItems">
          <div
            style={{
				position: "fixed",
				left: this.state.lx,
				top: this.state.ly,
				padding: 0.5,
				border: "1px solid black",
            }}
			></div>
        </div>
		*/}
        <h1 className="main-nav">Hey</h1>
        <div className="main-content" onMouseMove={this.handleMouseMove}>
          <div className="person-box">
            <div className="person-head">
              <div className="person-forehead"></div>
              <div className="person-midface">
                <div className="face-eye">
                  <div
                    className="eye-ball"
                    ref={this.state.eyeLeft}
                    style={{
                      left: this.state.eyeBallLX,
                      top: this.state.eyeBallLY,
                    }}
                  ></div>
                </div>
                <div className="face-eye">
                  <div
                    className="eye-ball"
                    ref={this.state.eyeRight}
                    style={{
                      left: this.state.eyeBallRX,
                      top: this.state.eyeBallRY,
                    }}
                  ></div>
                </div>
              </div>
              <div className="person-lowface">
                <div className="face-mouth"></div>
              </div>
            </div>
            <div className="person-shoulder"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
