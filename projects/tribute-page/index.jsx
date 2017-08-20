import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
// import { ConnectedRouter } from 'react-router-redux';
import Routes from './src/Routes';

export default (<Provider store={store}><Routes /></Provider>);
export { Routes, store };
