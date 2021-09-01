import { createVuexModule } from 'vuex-typed-modules';
import { City, degreesUnity, Forecast, Temperatures, Wind } from '~/models';
import { mainKey } from '~/api/keys';
import axios from 'axios';
export interface IWeatherState {
  currentCity: City | null;
  unity: degreesUnity;
  temperatures: Temperatures | null;
  wind: Wind | null;
  forecasts: Forecast[] | null;
}

const state: IWeatherState = {
  currentCity: null,
  unity: 'C',
  temperatures: null,
  wind: null,
  forecasts: null,
};

export const [WeatherModule, useWeatherModule] = createVuexModule({
  name: 'weatherModule',
  state,
  mutations: {
    updateCurrentCity(state, newCity: City) {
      state.currentCity = newCity;
      const newTemperatures: Temperatures = {
        min: newCity.main.feels_like,
        max: newCity.main.temp_min,
        feeled: newCity.main.temp_max,
      };

      const newWind: Wind = {
        deg: newCity.wind.deg,
        gust: newCity.wind.gust,
        speed: newCity.wind.speed,
      };

      state.temperatures = newTemperatures;
      state.wind = newWind;
    },
    updateCurrentDegreeUnity(state, newUnity: degreesUnity) {
      state.unity = newUnity;
    },
  },
  actions: {
    async getWeather(state, searchValue) {
      try {
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&?&APPID=${mainKey}&lang=fr&units=metric`
          )
          .then((results) => {
            console.log('update');
            WeatherModule.updateState({ currentCity: results.data });
          })
          .catch((e) => {
            WeatherModule.updateState({ currentCity: null });
          });
      } finally {
        await axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&?&APPID=${mainKey}&lang=fr&units=metric`
          )
          .then((results) => {
            WeatherModule.updateState({ forecasts: results.data.list });
          })
          .catch((e) => {
            console.log(e);
            WeatherModule.updateState({ forecasts: null });
          });
      }
    },
  },
});
