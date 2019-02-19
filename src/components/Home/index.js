import React from "react";
import { connect } from "react-redux";
import { SEARCH_ORIGIN, SEARCH_DESTINATION, APP_LOAD } from "../../constants/actionTypes";

import "../../styles/variables.css";
import "../../styles/nav.css";
import "../../styles/styles.css";
import "../../styles/responsive.css";
import agent from "../../agent";

const mapStateToProps = state => ({
	...state.common
});

const mapDispatchToProps = dispatch => ({
	onChangeOrigin: value => dispatch({ type: SEARCH_ORIGIN, value }),
	onChangeDestination: value => dispatch({ type: SEARCH_DESTINATION, value }),
	onLoad: (payload) => dispatch({ type: APP_LOAD, payload })
});

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeOrigin = this.onChangeOrigin.bind(this);
	}

	componentDidMount() {
		console.log(true)
		// this.props.onLoad(agent.Home.getAllPorts);
	}

	onChangeOrigin(event) {
		this.props.onChangeOrigin(event.target.value);
	}

	onChangeDestination(event) {
		this.props.onChangeDestination(event.target.value);
	}

	render() {
		return (
			<React.Fragment>
				<nav>
					<div className='logo' />
				</nav>
				<section>
					<div className="container">
						<div>
							<p className="title">
								Experience complete freight rate visibility.
								</p>
							<p className='subtitle'>
								Compare freight rates instantly across any port pair with a detailed cost breakup.
								</p>
							<div className='grid-container'>
								<div className='flex-item'>
									<p className='selectbox-title'>ORIGIN PORT</p>
									<input
										type="text"
										className="input search"
										placeholder="Type here..."
										onKeyUp={this.onSearch}
										value={this.props.search}
										onKeyPress={this.onEnter}
										onChange={this.onChangeInput}
									/>
								</div>
								<div className='flex-item'>
									<p className='selectbox-title'>DESTINATION PORT</p>
									<input
										type="text"
										className="input search"
										placeholder="Type here..."
										onKeyUp={this.onSearch}
										value={this.props.search}
										onKeyPress={this.onEnter}
										onChange={this.onChangeInput}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
