import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createRootReducer from './reducers'

const middlewares = [thunk];

let windowObject = null;

if (typeof(window) !== "undefined") {
  windowObject = window;
}

const composeEnhancers = (windowObject!== null && process.env.NODE_ENV === 'development' && windowObject.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, createRootReducer())

const configureStore = (preloadedState = {}) =>{
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
    );
    
    const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore;