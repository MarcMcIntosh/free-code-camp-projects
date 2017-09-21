// import React from 'react';
import { App, About, Gallary } from '../app/pages';
import { TributePage } from '../projects/tribute-page';
import appUrls from './app-urls';

import BarChart from '../projects/bar-chart';

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
      },
      {
        path: appUrls.barChart.url,
        component: BarChart,
      },
    ],
  },
];

export default routes;
