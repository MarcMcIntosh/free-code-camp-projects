import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import routes from '../common/routes';
import Container from '../common/Container';

/* chnage this to initialState later */
import store from '../common/store';
import favicon from '../common/assets/favicon.png';

const preloadedState = serialize(store.getState());

function main(req, res) {
  const app = renderToString(<Container>
    <StaticRouter location={req.url}>
      {renderRoutes(routes)}
    </StaticRouter>
  </Container>);

  const html = `
    <!DOCTYPE html>
    <html lang="en-GB">
      <head>
        <link rel="icon" type="image/png" href="${favicon}" />
      </head>
    <body>
      <div id="app">${app}</div>
      <script> window.__PRELOADED_STATE__ = ${preloadedState} </script>
      <script type="text/javascript" charset="utf-8" src="/app.js"></script>
    </body>
  </html>`;

  res.status(200).send(html);
}

export default main;
