// import React from 'react';
import { App, About, Gallary } from '../app/pages';
import { TributePage, AboutTributePage } from '../projects/tribute-page';
import appUrls from './app-urls';

import BarChart from '../projects/bar-chart/test';

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
      {
        path: appUrls.barChart.url,
        component: BarChart,
      },
    ],
  },
];

export default routes;
