// import React from 'react';
/* eslint-disable */
import { App, About, Gallary } from '../app/pages';

import appUrls from './app-urls';
/* Done */
// with classnames context
import RecipeBox from '../projects/recipe-box';
// with out classnames context 
import TributePage from '../projects/tribute-page';
import Calculator from '../projects/calculator';


/* to do */
/*
import BarChart from '../projects/bar-chart';
import DataGlobe from '../projects/data-globe';
import DungeonCrawler from '../projects/dungeon-crawler';
import ForceDirected from '../projects/force-directed';
import GameOfLife from '../projects/game-of-life';
import HeatMap from '../projects/heat-map';
import Leaderboard from '../projects/leaderboard';
import LocalWeather from '../projects/local-weather';
import MarkdownPreviewer from '../projects/markdown-previewer';
import QuoteMachine from '../projects/quote-machine';
import ScatterplotGraph from '../projects/scatterplot-graph';
import Simon from '../projects/simon';
import TicTacToe from '../projects/tic-tac-toe';
import Twitch from '../projects/twitch';
import WikipediaViewer from '../projects/wikipedia-viewer';
import Pomodoro from '../projects/pomodoro';
*/

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Gallary,
      }, {
        path: '/about', component: About,
      }, {
        path: appUrls.calculator.url, component: Calculator,
      }, /* {
        path: appUrls.tribute.url, component: TributePage,
      }, {
        path: appUrls.barChart.url, component: BarChart,
      }, {
        path: appUrls.dataGlobe.url, component: DataGlobe,
      }, {
        path: appUrls.dungeonCrawler.url, component: DungeonCrawler,
      }, {
        path: appUrls.forceDirected.url, component: ForceDirected,
      }, {
        path: appUrls.gameOfLife.url, component: GameOfLife,
      }, {
        path: appUrls.heatMap.url, component: HeatMap,
      }, {
        path: appUrls.leaderboard.url, component: Leaderboard,
      }, {
        path: appUrls.localWeather.url, component: LocalWeather,
      }, {
        path: appUrls.markdownPreviewer.url, component: MarkdownPreviewer,
      }, {
        path: appUrls.quoteMachine.url, component: QuoteMachine,
      }, {
        path: appUrls.scatterplotGraph.url, component: ScatterplotGraph,
      }, {
        path: appUrls.simon.url, component: Simon,
      }, {
        path: appUrls.ticTacToe.url, component: TicTacToe,
      }, {
        path: appUrls.twitch.url, component: Twitch,
      }, {
        path: appUrls.wikipediaViewer.url, component: WikipediaViewer,
      }, {
        path: appUrls.pomodoro.url, component: Pomodoro,
      },*/
      {
        path: appUrls.recipeBox.url, component: RecipeBox,
      },
    ],
  },
];

export default routes;
