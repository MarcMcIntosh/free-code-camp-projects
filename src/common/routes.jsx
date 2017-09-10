// import React from 'react';
import { App, About, Gallary } from '../app/pages';
import { TributePage, AboutTributePage } from '../projects/tribute-page';
import appUrls from './app-urls';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Gallary,
      },
      { path: '/about', component: About },
      {
        path: appUrls.tribute.url,
        component: TributePage,
        routes: [
          {
            path: appUrls.tribute.about,
            component: AboutTributePage,
          },
        ],
      },
    ],
  },
];

export default routes;
