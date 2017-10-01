// import React from 'react';
import { App, About, Gallary } from '../app/pages';
import TributePage from '../projects/tribute-page';
import appUrls from './app-urls';

import BarChart from '../projects/bar-chart';
import Calculator from '../projects/calculator';
import DataGlobe from '../projects/data-globe';
import DungeonCrawler from '../projects/dungeon-crawler';
import ForceDirected from '../projects/force-directed';

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
      {
        path: appUrls.calculator.url,
        component: Calculator,
      },
      {
        path: appUrls.dataGlobe.url,
        component: DataGlobe,
      },
      {
        path: appUrls.dungeonCrawler.url,
        component: DungeonCrawler,
      },
      {
        path: appUrls.forceDirected.url,
        component: ForceDirected,
      },
    ],
  },
];

export default routes;
