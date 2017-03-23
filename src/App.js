/**
 * Learn MobX
 * Entry File
 * Written by Sam Reaves
 * March 22, 2017
 * https://github.com/samreaves/learn-mobx.git
 */

import React from 'react';
import { observer } from 'mobx-react';
import ReactDOM from 'react-dom';
import TemperatureView from './Temperature/TemperatureView';
import TemperatureInput from './Temperature/TemperatureInput';
import TemperaturesStore from './Temperature/TemperaturesStore';
import './styles.css';


const App = observer(({ temperatures }) => {

  return (
    <div>
      <TemperatureInput temperatures={temperatures} />
      <ul>
        {temperatures.map((t) => {
          return <TemperatureView key={t.id} temperature={t} />;
        })}
      </ul>
    </div>
  );
});

ReactDOM.render(<App temperatures={TemperaturesStore} />, document.getElementById('app'));
