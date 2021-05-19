import React, { Component } from 'react';

class SelectFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.selected
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value }, () => {
      this.props.handleChange(this.props.query, this.state.value);
    });
  };

  render() {
    return (
      <>
        <label htmlFor={this.props.id}> {this.props.name} </label>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          className="sort-filter"
          id={this.props.id}
        >
          {this.props.options.map((option, index) => {
            return (
              <option value={option.value} key={index}>
                {option.name}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}

export default SelectFilter;
