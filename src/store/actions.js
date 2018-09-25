import * as types from './types'
export default {
  TEST: ({commit}, payload) => {
    commit(types.TEST, payload)
  }
}
