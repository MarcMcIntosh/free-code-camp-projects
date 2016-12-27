import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import {
  // RouterContext,
  StaticRouter,
} from 'react-router';
import Helmet from 'react-helmet';
import staticAssets from './static-assets';

// const createApp = (store, props) => renderToString(<Provider store={store}><RouterContext {...props} /></Provider>);

const createApp = (store, props) => renderToString(<Provider store={store}><StaticRouter {...props} /></Provider>);

const buildPage = ({ componentHTML, initialState, headAssets }) => {
  console.log('You don\'t need t add INITIAL_STATE');
  return `<!DOCTYPE html>
<html>
  <head>
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    ${staticAssets.createStylesheets()}
  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
    ${staticAssets.createAppScript()}
  </body>
</html>`;
};

export default (store, props) => {
  const initialState = store.getState();
  const componentHTML = createApp(store, props);
  const headAssets = Helmet.renderStatic();
  return buildPage({ componentHTML, initialState, headAssets });
};