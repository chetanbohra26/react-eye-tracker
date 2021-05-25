import React, { Component } from "react";

import "./App.css";

class App extends Component {
	state = {
		x: 0,
		y: 0,
		eyeLeft: React.createRef(),
		eyeRight: React.createRef(),
		eyeBall: React.createRef(),
		eyeBallLX: 0,
		eyeBallLY: 0,
		eyeBallRX: 0,
		eyeBallRY: 0,
		flag: false,
	};
	componentDidMount() {
		/*
		const { eyeLeft, eyeBall } = this.state;
		console.log("left", eyeLeft.current.getBoundingClientRect());
		console.log("ball", eyeBall.current.getBoundingClientRect());
		const { height, width, left, right, top, bottom } =
			eyeBall.current.getBoundingClientRect();
		const eyeBallLX = (left + right) / 2;
		const eyeBallLY = (top + bottom) / 2;
		this.setState({
			eyeBallHeight: height,
			eyeBallWidth: width,
			eyeBallLX,
			eyeBallLY,
		});
		*/
	}
	handleEye = () => {
		const { eyeLeft } = this.state;
		console.log(eyeLeft.current.getBoundingClientRect());
		this.setState({ flag: !this.state.flag });
	};
	handleMouseMove = (e) => {
		/*
		const x = e.screenX;
		const y = e.screenY;
		//const x = e.nativeEvent.offsetX;
		//const y = e.nativeEvent.offsetY;
		const { x: prevX, y: prevY } = this.state;
		if (x === prevX && y === prevY) return;
		console.log(x, y);
		this.setState({ x, y });
		*/
	};
	render() {
		return (
			<div className="main-container">
				<h1 className="main-nav">Hey</h1>
				<button onClick={this.handleEye}>Pick</button>
				<div
					className="main-content"
					onMouseMove={this.handleMouseMove}
				>
					<div className="person-box">
						<div className="person-head">
							<div className="person-forehead"></div>
							<div className="person-midface">
								<div
									className="face-eye"
									ref={this.state.eyeBall}
								>
									<div
										className={
											"eye-ball" +
											(this.state.flag
												? " left"
												: " right")
										}
										ref={this.state.eyeLeft}
									></div>
								</div>
								<div className="face-eye">
									<div
										className={
											"eye-ball" +
											(this.state.flag
												? " left"
												: " right")
										}
										ref={this.state.eyeRight}
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
