import { IGlobalState, IState, IAlert } from '@/interfaces';
import { Module } from 'vuex';

export const globalModule: Module<IGlobalState, IState> = {
  namespaced: true,
  state: {
    isLoading: false,
    showAlert: false,
    isDelete: false,
    alert: {
      type: '',
      message: '',
    },
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    },
    SET_ALERT(state, payload) {
      state.showAlert = payload;
    },
    SET_STATUS_ALERT(state, payload: IAlert) {
      state.alert.message = payload.message;
      state.alert.type = payload.type;
    },
    SET_IS_DELETE(state, payload: boolean) {
      state.isDelete = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload: IAlert) {
      commit('SET_LOADING', payload);
    },
    setAlert({ commit }, payload) {
      commit('SET_ALERT', payload);
    },
    setStatusAlert({ commit }, payload: IAlert) {
      commit('SET_STATUS_ALERT', payload);
    },
    setDelete({ commit }, payload: boolean) {
      commit('SET_IS_DELETE', payload);
    },
  },
};
