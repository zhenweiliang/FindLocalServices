import Axios from 'axios'
import * as C from './constant'

export const actionCreator = (type, payload = null) => ({ type, payload })

export const getSwiperData = () => {
  return (dispatch) => {
    Axios.post('/swiper')
      .then((data) => {
        dispatch({ type: C.SWIPER_DATA, payload: data.data })
      })
      .catch((err) => {throw err })
  }
}

export const getCategoriesData = () => {
  return (dispatch) => {
    Axios.post('/Categories')
      .then((data) => {
        dispatch({ type: C.CATEGORIES_DATA, payload: data.data })
      })
      .catch((err) => {throw err })
  }
}

export const getCommendData = () => {
  return (dispatch) => {
    Axios.post('/commend')
      .then((data) => {
        dispatch({ type: C.COMMEND_DATA, payload: data.data })
      })
      .catch((err) => {throw err })
  }
}
