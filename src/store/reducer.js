import { combineReducers } from 'redux'
import homeReducer from '../containers/home/store/reducer'
import cityReducer from '../containers/city/store/reducer'
import loginReducer from '../containers/login/store/reducer'

const reducer = combineReducers({
  home: homeReducer,
  city: cityReducer,
  login: loginReducer,

})

export default reducer
