/**
 * Learn MobX
 * Temperature View Component File
 * Written by Sam Reaves
 * March 22, 2017
 * https://github.com/samreaves/learn-mobx.git
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TemperatureView extends Component {

  render() {

    const t = this.props.temperature;

    return (
      <li>
        <button onClick={() => t.decrementTemperature()}>-</button>
        {t.temperature}
        <button onClick={() => t.incrementTemperature()}>+</button>
      </li>
    );
  }
}

export default TemperatureView;
