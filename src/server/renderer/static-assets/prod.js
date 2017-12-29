/* eslint import/no-extraneous-dependencies: off, import/no-unresolved: off, import/no-webpack-loader-syntax: off */
import favicon from 'file-loader!./space_invader.png';
import assets from '../../../../dist/public/manifest.json';

const createAppScript = (src = 'app') => {
  const app = `${src}.js`;
  const url = `/assets/${assets[app]}`;
  return '<script type="text/javascript" charset="utf-8" src="' + url + '"></script>';
};

const createStylesheets = (src = 'app') => {
  const app = `${src}.css`;
  const url = `/assets/${assets[app]}`;
  return [
    `<link rel="stylesheet" href="${url}" />`,
    `<link rel="icon" type="image/png" href="${favicon} />`,
  ].join('\r\n');
};

export { createAppScript, createStylesheets };
