/**
 * Learn MobX
 * Temperature Input Component File
 * Written by Sam Reaves
 * March 22, 2017
 * https://github.com/samreaves/learn-mobx.git
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
import Temperature from './Temperature';

@observer
class TemperatureInput extends Component {

  @observable input = '';

  @action onChange = (e) => {
    this.input = e.target.value;
  }

  @action onSubmit = () => {
    this.props.temperatures.push(new Temperature(Number(this.input)));

    this.input = '';
  }

  render() {
    return (
      <div>
        <label htmlFor='add-temperature'>Destination</label>
        <input
          id='add-temperature'
          onChange={this.onChange}
          value={this.input}
        />
        <button onClick={this.onSubmit}>Add Temperature</button>
      </div>
    );
  }
}

export default TemperatureInput;
