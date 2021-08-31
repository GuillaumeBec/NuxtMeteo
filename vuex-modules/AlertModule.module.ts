import { createVuexModule } from 'vuex-typed-modules';
import { Alert, AlertTypes } from '~/models';

export interface IAlertState {
  alertsList: Alert[];
}

const state: IAlertState = {
  alertsList: [],
};

export const [AlertModule, useAlertModule] = createVuexModule({
  name: 'AlertModule',
  state,
  mutations: {
    createAlert(state, newAlert: Alert) {
      state.alertsList.push(newAlert);
    },
    deleteAlerte(state, alert: Alert) {
      state.alertsList.splice(
        state.alertsList.findIndex((a) => a.order === alert.order),
        1
      );
    },
  },
  actions: {},
  getters: {
    getOrder(state) {
      return state.alertsList.length + 1;
    },
    currentAlert(state) {
      return state.alertsList[state.alertsList.length - 1] || null;
    },
  },
});
