import * as C from './constant'

const initState = {
  swipeImages: [],
  categories: [],
  commendData: [],
}

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case  C.SWIPER_DATA:
      newState.swipeImages = action.payload
      return newState
    case  C.CATEGORIES_DATA:
      newState.categories = action.payload
      return newState
    case  C.COMMEND_DATA:
      newState.commendData = action.payload
      return newState

    default:
      return state
  }
}
