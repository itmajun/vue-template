const state = {
  name: ''
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
}

const actions = {
  async test({ commit, state }) {
    commit('SET_NAME')
    console.log(state)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}