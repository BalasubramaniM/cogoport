import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";

class App extends React.Component {
	render() {
		return <Home />;
	}
}

export default connect(
	null,
	null
)(App);
