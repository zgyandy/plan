export default {
  testFilter: (state) => {
    return state.test >= 100 ? '' + state.test : state.test >= 10 ? '0' + state.test : '00' + state.test
  }
}
