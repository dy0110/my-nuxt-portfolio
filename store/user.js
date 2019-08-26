// NOTE 自分のGitHubユーザー情報に関する処理
export const state = () => ({
  userData: null
})

export const mutations = {
  setGithubUserData(state, userData) {
    state.userData = userData
  }
}

export const getters = {
  getGithubUserData: (state) => {
    return state.userData
  }
}

export const actions = {
  async setGithubUserData({ commit, state }) {
    if (state.userData === null) {
      const userData = await this.$axios.$get(
        `https://api.github.com/users/dy0110`
      )
      console.log(userData)
      commit('setGithubUserData', userData)
    }
  }
}
