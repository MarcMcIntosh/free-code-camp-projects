import React from 'react';
import { renderToString } from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import routes from '../common/routes';
import Container from '../common/Container';

const App = props => (<Container><StaticRouter {...props}>{renderRoutes(routes)}</StaticRouter></Container>);

export default ({ clientStats }) => (req, res) => {
  const staticContext = {};
  /* not req url include query strings */
  const app = renderToString(<App location={req.path} context={staticContext} />);

  const chunkNames = flushChunkNames();

  const {
    js,
    styles,
    cssHash,
    // scripts, stylesheets,
  } = flushChunks(clientStats, { chunkNames });

  /*
    console.log('PATH', req.path, '\n');
    console.log('URL', req.url);
    console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames);
    console.log('SCRIPTS SERVED', scripts);
    console.log('STYLESHEETS SERVED', stylesheets);
  */

  const html = `<!DOCTYPE html>
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
      <div id="root">${app}</div>
      ${cssHash}
      ${js}
    </body>
  </html>`;

  return res.status(200).send(html);
};
