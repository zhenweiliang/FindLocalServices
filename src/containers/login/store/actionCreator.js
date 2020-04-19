import Axios from 'axios'
import * as C from './constant'

export const actionCreator = (type, payload = null) => ({ type, payload })

export const handleLogin = (username, password) => {
  return (dispatch) => {
    Axios.post('/login', { username, password })
      .then((data) => {
        dispatch({
          type: C.HANDLE_LOGIN,
          payload: { loginStatus: data.data, errMsg: 'Wrong Password,use 123/123' },
        })
      })
      .catch((err) => {throw err })

  }

}
