/* eslint import/no-unresolved: off */
import assets from '../../../../dist/public/manifest.json';

const createAppScript = (src = 'app') => {
  const app = `${src}.js`;
  const url = `/assets/${assets[app]}`;
  return '<script type="text/javascript" charset="utf-8" src="' + url + '"></script>';
};

const createStylesheets = () => `
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" />
<link rel="stylesheet" href="/assets/${assets['app.css']}" />
`;

export { createAppScript, createStylesheets };
