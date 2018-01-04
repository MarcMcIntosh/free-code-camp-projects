/* eslint global-require: 0 */
// Use this for a build proxied behind nginx
// import express from 'express';
// import helmet from 'helmet';
// import compression from 'compression';
import render from './render';
/* change to router */
/* leave the top leavel config in the main index.jsx file */

const server = clientStats => render({ clientStats });

export default server;
