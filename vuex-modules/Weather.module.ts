import { createVuexDynamicModule, createVuexModule } from 'vuex-typed-modules';
import { City, degreesUnity } from '~/models';

export interface IWeatherState {
  currentCity: City | null;
  degreesUnity: degreesUnity;
}

const state: IWeatherState = {
  currentCity: null,
  degreesUnity: 'F',
};

export const [WeatherModule, useAlertModule] = createVuexModule({
  name: 'weatherModule',
  state,
  mutations: {
    upadateCurrentCity(state, newCity: City) {
      state.currentCity = newCity;
    },
    updateCurrentDegreeUnity(state, newUnity: degreesUnity) {
      state.degreesUnity = newUnity;
    },
  },
  getters: {
    getCurrentDegreeUnity(state) {
      return state.degreesUnity;
    },
  },
});
