import React from 'react';
import { renderToString } from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import App from './App';

export default ({ clientStats }) => (req, res) => {
  const staticContext = {};
  const app = renderToString(<App location={req.url} context={staticContext} />);

  const chunkNames = flushChunkNames();

  const { js, styles, cssHash, scripts, stylesheets } = flushChunks(clientStats, { chunkNames });

  console.log('PATH', req.path);
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames);
  console.log('SCRIPTS SERVED', scripts);
  console.log('STYLESHEETS SERVED', stylesheets);

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
      <div id="root">${app}</div>
      ${cssHash}
      ${js}
    </body>
  </html>`;

  res.status(200).send(html);
};
