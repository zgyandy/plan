import * as types from './types'
export default {
  setPage: (state, payload) => {
    state.pageNow = payload
  },
  [types.TEST]: (state, payload) => {
    state.test = payload
  }
}
