export default handlers => (state, action) => {
  const correctHandler = handlers[action.type]

  if (correctHandler === undefined) {
    return state
  } else {
    return correctHandler(state, action)
  }
}
