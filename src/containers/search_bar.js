import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // prevent default action (submit and refresh)
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={event => this.onFormSubmit(event)}
      >
        <input
          placeholder="Get a 5 days forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={event => this.onInputChange(event)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
