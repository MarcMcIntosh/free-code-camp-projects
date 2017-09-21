import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';

/* New */
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { MuiThemeProvider } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

import staticAssets from './static-assets';
import theme from '../../common/theme';

const sheetsRegistry = new SheetsRegistry();
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

const createApp = props => renderToString(<JssProvider registry={sheetsRegistry} jss={jss}><MuiThemeProvider theme={theme} sheetsManager={new Map()}><StaticRouter {...props} /></MuiThemeProvider></JssProvider>);

const buildPage = ({ componentHTML, headAssets }) => `<!DOCTYPE html>
  <html class="mdc-typography">
    <head>
      ${headAssets.title.toString()}    ${headAssets.meta.toString()}    ${headAssets.link.toString()}    ${staticAssets.createStylesheets()}
    </head>
  <body>
    <style id="jss-server-side">${sheetsRegistry.toString()}</style>
    <div id="app">${componentHTML}</div>
    ${staticAssets.createAppScript()}
  </body>
</html>`;

export default (props) => {
  const componentHTML = createApp(props);
  const headAssets = Helmet.renderStatic();
  return buildPage({ componentHTML, headAssets });
};
