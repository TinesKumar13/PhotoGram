import {applyMiddleware, createStore,compose} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'





const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunk))


    )

export default store