import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from './App';
import staticAssets from './static-assets';

/* chnage this to initialState later */
import store from '../../common/store';

const preloadedState = serialize(store.getState());

function main(req, res) {
  const staticContext = {};
  const app = renderToString(<App location={req.url} context={staticContext} />);
  const styles = staticAssets.createStylesheets();
  const scripts = staticAssets.createAppScript();
  const html = `
    <!DOCTYPE html>
    <html lang="en-GB">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Free-code-camp projects" />
        <meta name="author" content="Marc McIntosh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Marc's project" />
        <title>Marc's projects</title>
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
