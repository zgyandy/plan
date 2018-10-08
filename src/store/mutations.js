import * as types from './types'
export default {
  setPage: (state, payload) => {
    state.pageNow = payload
  },
  [types.TEST]: (state, payload) => {
    if (payload) {
      state.test++
    } else {
      if (state.test > 0) {
        state.test--
      }
    }
  }
}
