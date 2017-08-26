/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/no-extraneous-dependencies: off */
/* eslint import/no-unresolved: off */

const ABOUT = require('file-loader!./data/task.json');
const IMG = require('file-loader!./images/Season_6_hodor_main.jpg');

export const SRC_URL = 'http://gameofthrones.wikia.com/wiki/Hodor';

export const ABOUT_URL = ABOUT;
export const IMG_URL = IMG;
