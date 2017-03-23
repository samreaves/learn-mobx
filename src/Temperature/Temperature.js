/**
 * Learn MobX
 * Temperature Class File
 * Written by Sam Reaves
 * March 22, 2017
 * https://github.com/samreaves/learn-mobx.git
 */

import { action, computed, observable } from 'mobx';

export default class Temperature {
  id = Math.random();
  @observable unit = 'C';
  @observable temperatureCelsius = 25;
  @observable location = 'Amsterdam, NL';

  constructor(temperatureCelsius) {
    this.temperatureCelsius = temperatureCelsius;
  }

  @computed get temperatureKelvin() {
    return this.temperatureCelsius + 273.15;
  }

  @computed get temperatureFahrenheit() {
    return this.temperatureCelsius * (9 / 5) + 32;
  }

  @computed get temperature() {
    switch (this.unit) {
      case 'K':
        return `${this.temperatureKelvin}°K`;
      case 'C':
        return `${this.temperatureCelsius}°C`;
      case 'F':
        return `${this.temperatureFahrenheit}°F`;
      default:
        return;
    }
  }

  @action setCelsius = (degrees) => {
    this.temperatureCelsius = degrees;
  }

  @action incrementTemperature = () => {
    this.setCelsius(Number(this.temperatureCelsius + 1));
  }

  @action decrementTemperature = () => {
    this.setCelsius(Number(this.temperatureCelsius - 1));
  }
}
