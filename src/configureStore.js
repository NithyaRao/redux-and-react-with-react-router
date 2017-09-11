import reducers from './reducers'
import { createStore } from 'redux'

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState
  )
}

export default configureStore
