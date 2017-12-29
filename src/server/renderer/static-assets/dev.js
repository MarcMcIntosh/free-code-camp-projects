/* eslint import/no-extraneous-dependencies: off, import/no-unresolved: off, import/no-webpack-loader-syntax: off */
import favicon from 'file-loader!./space_invader.png';

function createAppScript(src = '/app') {
  return '<script type="text/javascript" charset="utf-8" src="' + src + '.js"></script>';
}

const createStylesheets = () => `<link rel="icon" type="image/png" href="${favicon}" />`;

export { createAppScript, createStylesheets };
