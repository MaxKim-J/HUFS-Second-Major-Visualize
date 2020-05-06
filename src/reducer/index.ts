import { combineReducers } from 'redux'
import data from './data'

const rootReducer = combineReducers({
  data,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
