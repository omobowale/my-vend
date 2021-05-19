import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { requestApi } from '../../../utils/api';

class SelectBank extends Component {
  state = {
    banks: []
  };

  componentDidMount = async () => {
    const { data } = await requestApi('get', 'resources/banks');
    this.setState({ banks: data });
  };

  renderBanks = () => {
    const { banks } = this.state;
    if (banks.length < 1) {
      return (
        <>
          <label> {this.props.label} </label>
          <select>
            <option value="" defaultValue disabled>
              None Selected
            </option>
          </select>
        </>
      );
    } else {
      return (
        <>
          <label> {this.props.label} </label>
          <select
            onChange={this.props.onChange}
            value={this.props.value}
            name={this.props.name}
            id={this.props.id}
          >
            {banks.map(bank => (
              <option value={bank.id} key={bank.id}>
                {' '}
                {bank.name}{' '}
              </option>
            ))}
          </select>
        </>
      );
    }
  };

  render() {
    return this.renderBanks();
  }
}

SelectBank.propTypes = {
  onChange: PropTypes.func
};

export default SelectBank;
