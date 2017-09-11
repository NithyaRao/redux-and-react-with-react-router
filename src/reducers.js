import { combineReducers } from 'redux'
import todos from './todosReducer'
import visibilityFilter from './visibilityFilter'

const reducers = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
})

export default reducers
