import * as C from './constant'

const initState = {
  loginStatus: false,
  errMsg: '',

}

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case C.HANDLE_LOGIN:
      newState.loginStatus = action.payload.loginStatus
      newState.errMsg = action.payload.errMsg
      return newState

    default:
      return state
  }
}
