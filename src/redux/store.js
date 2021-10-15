
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers"; //the rootReducer
import rootSaga from "./sagas/"
import randomUserReducer from './reducers/randomUserSlice'


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer:{
        randomUser: randomUserReducer,
    },
    middleware: [sagaMiddleware],
    middleware: (getdefaultMiddleware) => getdefaultMiddleware({thunk: false}).concat(sagaMiddleware),
})
// const store = compose(
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )(createStore)(reducers);

sagaMiddleware.run(rootSaga);

export default store;


