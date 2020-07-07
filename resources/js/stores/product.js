import $axios from '../api';

const state = () => ({
  products: [],
  page: 1
});

const mutations = {
  ASSIGN_DATA (state, payload) {
    state.products = payload;
  },
  SET_PAGE (state, payload) {
    state.page = payload;
  }
}

const actions = {
  getProducts ({ commit, state }, payload) {
    let search = typeof payload != 'undefined' ? payload : '';

    return new Promise((resolve, reject) => {
      $axios.get(`/product?page=${state.page}&q=${search}`).then(response => {
        commit('ASSIGN_DATA', response.data);
        resolve(response.data);
      });
    });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}