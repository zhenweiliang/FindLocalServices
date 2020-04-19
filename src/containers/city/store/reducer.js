import * as C from './constant'

const initState = {
  currentCity: 'Brisbane',

}

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case C.CHANGE_CITY:
      newState.currentCity = action.payload
      return newState

    default:
      return state
  }
}
