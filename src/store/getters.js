export default {
  testFilter: (state) => {
    return (typeof state.test === 'number' ? state.test : 12)
  }
}
