import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage/index.native'
import { createStore } from 'redux';
import {AllReducers} from './ReduxConfig'

const config = {
    key: 'root',
    storage
}
  
const reducer = persistCombineReducers(config, AllReducers)

export function configureStore () {
    // ...
    let store = createStore(reducer)
    let persistor = persistStore(store)

    return { persistor, store }
}