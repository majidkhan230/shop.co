import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productReducer } from './reducers/productReducer';
import { createStore } from 'redux';



const persistConfig = {
    key: 'root',
    storage,
  }


   
const persistedReducer = persistReducer(persistConfig, productReducer)
 

export  let store = createStore(persistedReducer)
export let persistor = persistStore(store)


console.log(store.getState())   