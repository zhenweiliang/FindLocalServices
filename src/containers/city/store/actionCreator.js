import Axios from 'axios'
import * as C from './constant'

export const actionCreator = (type, payload = null) => ({ type, payload })
