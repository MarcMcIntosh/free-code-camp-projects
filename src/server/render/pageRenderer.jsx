import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';

import staticAssets from './static-assets';

const createApp = props => renderToString(<StaticRouter {...props} />);

const buildPage = ({ componentHTML, headAssets }) => `<!DOCTYPE html>
  <html class="mdc-typography">
    <head>
      ${headAssets.title.toString()}    ${headAssets.meta.toString()}    ${headAssets.link.toString()}    ${staticAssets.createStylesheets()}
    </head>
  <body>
    <div id="app">${componentHTML}</div>
    ${staticAssets.createAppScript()}
  </body>
</html>`;

export default (props) => {
  const componentHTML = createApp(props);
  const headAssets = Helmet.renderStatic();
  return buildPage({ componentHTML, headAssets });
};
