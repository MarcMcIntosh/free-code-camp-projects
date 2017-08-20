import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import {
  // RouterContext,
  StaticRouter,
} from 'react-router';
import Helmet from 'react-helmet';
import staticAssets from './static-assets';

const createApp = (store, props) => renderToString(<Provider store={store}><StaticRouter {...props} /></Provider>);

const buildPage = ({ componentHTML, initialState, headAssets, src }) => `<!DOCTYPE html><html><head>
  ${headAssets.title.toString()}
  ${headAssets.meta.toString()}
  ${headAssets.link.toString()}
  ${staticAssets.createStylesheets()}
</head><body>
  <div id="app">${componentHTML}</div>
  <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
  ${staticAssets.createAppScript(src)}
</body></html>`;

/* usage
* store is a redux store,
* props is the application
* src is the application script
*/
export default (store, props) => {
  const { basename } = props;
  const initialState = store.getState();
  const componentHTML = createApp(store, props);
  const headAssets = Helmet.renderStatic();
  return buildPage({ componentHTML, initialState, headAssets, basename });
};
