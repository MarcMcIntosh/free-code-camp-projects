/* eslint import/no-unresolved: off */
import assets from '../../../../dist/public/manifest.json';

const createAppScript = (src = 'app') => {
  const app = `${src}.js`;
  const url = `/assets/${assets[app]}`;
  return '<script type="text/javascript" charset="utf-8" src="' + url + '"></script>';
};

const createStylesheets = (src = 'app') => {
  const app = `${src}.css`;
  const url = `/assets/${assets[app]}`;
  return `<link rel="stylesheet" href="${url}" />`;
};

export { createAppScript, createStylesheets };
