import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from "redux-saga"

import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { sagaWatcher } from "./api/sagas";
import { HelmetProvider } from "react-helmet-async";
import { hydrateRoot } from "react-dom/client";


const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(saga),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithOpts = () => (
    <HelmetProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </HelmetProvider>
)

if (rootElement.hasChildNodes()){
    hydrateRoot(rootElement, <React.StrictMode><AppWithOpts/></React.StrictMode>)
} else {
    root.render(<React.StrictMode><AppWithOpts/></React.StrictMode>)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();