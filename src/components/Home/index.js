import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { APP_LOAD } from "../../constants/actionTypes";

// CSS Styles
import "../../styles/variables.css";
import "../../styles/nav.css";
import "../../styles/styles.css";
import "../../styles/responsive.css";

// Select box.
import Select from "./Select";

const mapStateToProps = state => ({
	...state.common
});

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch({ type: APP_LOAD })
});

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			results: [],
			originQuery: '',
			destQuery: ''
		};
		this.onSelectOrigin = this.onSelectOrigin.bind(this);
		this.onChangeOrigin = this.onChangeOrigin.bind(this);
		this.onSelectDest = this.onSelectDest.bind(this);
		this.onChangeDest = this.onChangeDest.bind(this);
	}

	/**
	 * Invoked after selecting the port in the origin dropdown.
	 * @param {object} port
	 */
	onSelectOrigin(port) {
		this.setState({
			originQuery: port.name
		});
	}

	/**
	 * Invoked when typing in the origin search box.
	 * @param {string} value
	 */
	onChangeOrigin(value) {
		this.setState({
			originQuery: value
		});
	}

	/**
	 * Invoked after selecting the port in the destination dropdown.
	 * @param {object} port
	 */
	onSelectDest(port) {
		this.setState({
			destQuery: port.name
		});
	}

	/**
	 * Invoked when typing in the destination search box.
	 * @param {string} value
	 */
	onChangeDest(value) {
		this.setState({
			destQuery: value
		});
	}

	componentDidMount() {
		this.props.onLoad();
		this.getPorts(); // Call API and bind the response to the select boxes.
	}

	/**
	 * Get response and bind the results to the select boxes.
	 */
	getPorts() {
		axios
			.get('https://gist.githubusercontent.com/BalasubramaniM/77f168801859f51c7f7b6fb4cbf3d43a/raw')
			.then(({ data }) => {
				this.setState({
					results: data.ports
				});
			});
	}

	render() {
		let { results, originQuery, destQuery } = this.state;
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
									<Select
										className="input search"
										placeholder="Type here..."
										value={originQuery}
										options={results}
										onSelect={this.onSelectOrigin}
										onChange={this.onChangeOrigin} />
								</div>
								<div className='flex-item'>
									<p className='selectbox-title'>DESTINATION PORT</p>
									<Select
										className="input search"
										placeholder="Type here..."
										value={destQuery}
										options={results}
										onSelect={this.onSelectDest}
										onChange={this.onChangeDest} />
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
