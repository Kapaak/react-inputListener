import logo from "./logo.svg";
import "./App.css";
import React, { useState, Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

/*
1) Create an input field with a change listener which outputs the length of the entered text below
2) Create a new component (=>ValidationComponent) which receives the text length as a prop
3) Inside the ValidationComponent, either output "Text je kratky" or "Text je dlouhy" depending on the text length (e.g. take 5 as a min length)
4) Create another component (=>CharComponent) and style it as an inline box (=> display:inline-block,padding:16px,text-align:center,margin:16px)
5) Render a list of CharComponents where each CharComponent receives a different letter of the entered text as a prop
6) When you click a CharComponent, it should be removed from the entered text
*/

// function App() {
// 	const style = {
// 		display: "flex",
// 		justifyContent: "center",
// 		flexDirection: "column",
// 		width: "80%",
// 		margin: "auto",
// 	};

// 	const [line, setLine] = useState("");

// 	const typeLineHandler = e => {
// 		const value = e.target.value;
// 		// console.log(value);
// 		setLine(value);
// 	};

// 	const removeLineHandler = index => {
// 		const arr = [...line];

// 		const removeIFromArr = arr.filter((el, i) => i !== index);

// 		setLine(removeIFromArr);
// 	};

// 	return (
// 		<div style={style}>
// 			<p>Input some text</p>
// 			<input type="text" onChange={typeLineHandler} />
// 			<p>Počet znaků napsaných je: {line.length}</p>
// 			<ValidationComponent length={line.length} />
// 			<CharComponent line={line} remove={removeLineHandler} />
// 		</div>
// 	);
// }

class App extends Component {
	state = { line: [] };

	typeLineHandler = e => {
		const value = e.target.value;

		this.setState({ line: value });
	};

	removeLineHandler = index => {
		const arr = [...this.state.line];
		const removeIFromArr = arr.filter((el, i) => i !== index).join("");
		this.setState({ line: removeIFromArr });
	};

	render() {
		const style = {
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			width: "80%",
			margin: "auto",
		};

		return (
			<div style={style}>
				<p>Input some text</p>
				<input
					type="text"
					onChange={this.typeLineHandler}
					value={this.state.line}
				/>
				<p>Počet znaků napsaných je: {this.state.line.length}</p>
				<ValidationComponent length={this.state.line.length} />
				<CharComponent line={this.state.line} remove={this.removeLineHandler} />
			</div>
		);
	}
}

export default App;
