// import React from 'react';
import About from '../app/pages/About';
import renderRoute from './renderRoute';
// import appUrls from './app-urls';

/* Done with classnames context */
import BarChart from '../projects/bar-chart';
// import Calculator from '../projects/calculator';
// import DataGlobe from '../projects/data-globe';
// import DungeonCrawler from '../projects/dungeon-crawler';
// import ForceDirected from '../projects/force-directed';
// import GameOfLife from '../projects/game-of-life';
// import HeatMap from '../projects/heat-map';
// import LeaderBoard from '../projects/leader-board';
// import LocalWeather from '../projects/local-weather';
// import MarkdownPreviewer from '../projects/markdown-previewer';
// import Pomodoro from '../projects/pomodoro';
import Portfolio from '../projects/portfolio';
// import QuoteMachine from '../projects/quote-machine';
// import RecipeBox from '../projects/recipe-box';
// import ScatterplotGraph from '../projects/scatterplot-graph';
// import Simon from '../projects/simon';
// import TicTacToe from '../projects/tic-tac-toe';
// import TributePage from '../projects/tribute-page';
// import TwitchTv from '../projects/twitch-tv';
// import WikipediaViewer from '../projects/wikipedia-viewer';

import appData from '../projects/portfolio/appData';

const appUrls = Object.entries(appData).map(([k, { url }]) => ({ [k]: url })).reduce((a, b) => ({ ...a, ...b }), {});

const routes = [
  {
    component: renderRoute,
    routes: [
      { path: '/', exact: true, component: Portfolio },
      { path: '/about', component: About },
      { path: appUrls.barChart, component: BarChart },
      /* {
        path: appUrls.calculator.url, component: Calculator,
      },  {
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
        path: appUrls.leaderboard.url, component: LeaderBoard,
      }, {
        path: appUrls.localWeather.url, component: LocalWeather,
      }, {
        path: appUrls.markdownPreviewer.url, component: MarkdownPreviewer,
      }, {
        path: appUrls.pomodoro.url, component: Pomodoro,
      }, {
        path: appUrls.quoteMachine.url, component: QuoteMachine,
      }, {
        path: appUrls.recipeBox.url, component: RecipeBox,
      }, {
        path: appUrls.scatterplotGraph.url, component: ScatterplotGraph,
      }, {
        path: appUrls.simon.url, component: Simon,
      }, {
        path: appUrls.ticTacToe.url, component: TicTacToe,
      }, {
        path: appUrls.tribute.url, component: TributePage,
      }, {
        path: appUrls.twitch.url, component: TwitchTv,
      }, {
        path: appUrls.wikipediaViewer.url, component: WikipediaViewer,
      }, */
    ],
  },
];

export default routes;
