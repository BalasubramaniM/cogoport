import React from 'react';
import PropTypes from 'prop-types';

/**
 * Suggestion box.
 * @param {object} props
 */
const Suggestions = (props) => {

    /**
     * Invoked when selecting the list item in the dropdown (suggestion box).
     * @param {event} event
     */
    const onSelect = (event) => {
        let portId = Number(event.currentTarget.getAttribute('id'));
        props.onSelect(portId);
    }
    return (
        <ul className='ports-list'>
            {
                props.results.map(value => (
                    <li id={value.id} onClick={onSelect} key={value.id}>
                        {value.name}
                    </li>
                ))
            }
        </ul>
    )
}

/**
 * Select box.
 */
class Select extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showSuggestion: false,
            results: []
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    componentDidUpdate() {
        const { results } = this.state;
        if (results.length === 0 && this.props.options.length > 0) {
            this.setState({
                results: this.props.options
            })
        }
    }

    /**
     * Handle click outside of the suggestion box to close.
     * @param {event} event
     */
    handleClickOutside(event) {
        if (this.container && !this.container.contains(event.target)) {
            this.setState({
                showSuggestion: false
            });
        }
    }

    /**
     * Select box onChange event.
     * Invoked when the input is being typed in the search bar.
     * @param {event} event
     */
    onChange(event) {
        let query = event.target.value;
        this.props.onChange(query);
        let queryResults = this.props.options.filter(value => {
            return value.name.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({
            results: queryResults
        });
    }

    /**
     * Select box onSelect event.
     * Invoked when the list item is selected.
     * @param {String} portId
     */
    onSelect(portId) {
        const results = this.props.options;
        let port = results.filter(val => val.id === portId);
        if (port.length > 0) {
            this.props.onSelect(...port);
            this.setState({
                showSuggestion: false
            });
        }
    }

    /**
     * Select box onClick event.
     * Invoked when the search box is clicked.
     * @param {event} event
     */
    onClick(event) {
        this.setState({
            showSuggestion: true
        });
    }

    render() {

        // Suggestion div rendering.
        let { showSuggestion, results } = this.state;
        let suggestion = "";
        if (showSuggestion) {
            suggestion = <Suggestions onSelect={this.onSelect} results={results} />;
        }

        return (
            <React.Fragment>
                <input
                    type="text"
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onClick={this.onClick}
                    onChange={this.onChange}
                />
                <div className='suggestion-div' ref={container => this.container = container}>
                    {suggestion}
                </div>
            </React.Fragment>
        )
    }
}

/**
 * Properties and it's types for the Select box.
 */
Select.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Select;