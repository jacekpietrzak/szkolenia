import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import PrivateRouteChild from './routes/PrivateRouteChild';
import PrivateRouteChildCool from './routes/PrivateRouteChildCool';

let persistor = persistStore(store);

//https://www.freecodecamp.org/news/whats-new-in-react-18/

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
          </Route>

          <Route
            path="/home2"
            element={
              <PrivateRouteChild>
                <Home />
              </PrivateRouteChild>
            }
          />

          <Route
            path="/home3"
            element={
              <PrivateRouteChildCool>
                <Home />
              </PrivateRouteChildCool>
            }
          />

          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();