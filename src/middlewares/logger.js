export default store => next => action => {
  console.log('old', store.getState())
  next(action)
  console.log('new', store.getState())
}