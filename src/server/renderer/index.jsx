import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from './App';
import staticAssets from './static-assets';

/* chnage this to initialState later */
import store from '../../common/store';

const preloadedState = serialize(store.getState());

function main(req, res) {
  const app = renderToString(<App location={req.url} />);
  const styles = staticAssets.createStylesheets();
  const scripts = staticAssets.createAppScript();
  const html = `
    <!DOCTYPE html>
    <html lang="en-GB">
      <head>
        ${styles}
      </head>
    <body>
      <div id="app">${app}</div>
      <script> window.__PRELOADED_STATE__ = ${preloadedState} </script>
      ${scripts}
    </body>
  </html>`;

  res.status(200).send(html);
}

export default main;
