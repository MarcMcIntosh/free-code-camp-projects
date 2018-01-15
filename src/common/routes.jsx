import About from '../app/pages/About';
import renderRoute from './renderRoute';
import BarChart from '../projects/bar-chart';
import Calculator from '../projects/calculator';
import DataGlobe from '../projects/data-globe';
import DungeonCrawler from '../projects/dungeon-crawler';
import ForceDirected from '../projects/force-directed';
import GameOfLife from '../projects/game-of-life';
import HeatMap from '../projects/heat-map';
import LeaderBoard from '../projects/leader-board';
import LocalWeather from '../projects/local-weather';
import MarkdownPreviewer from '../projects/markdown-previewer';
import Pomodoro from '../projects/pomodoro';
import Portfolio from '../projects/portfolio';
import QuoteMachine from '../projects/quote-machine';
import RecipeBox from '../projects/recipe-box';
import ScatterplotGraph from '../projects/scatterplot-graph';
import Simon from '../projects/simon';
import TicTacToe from '../projects/tic-tac-toe';
import TributePage from '../projects/tribute-page';
import TwitchTv from '../projects/twitch-tv';
import WikipediaViewer from '../projects/wikipedia-viewer';
import appData from '../projects/portfolio/appData';
import NotFound from '../app/pages/NotFound';
import FileSize from '../projects/file-size';

const appUrls = Object.entries(appData).map(([k, { url }]) => ({ [k]: url })).reduce((a, b) => ({ ...a, ...b }), {});

const routes = [
  {
    component: renderRoute,
    routes: [
      { path: '/', exact: true, component: Portfolio },
      { path: '/about', component: About },
      { path: appUrls.barChart, component: BarChart },
      { path: appUrls.calculator, component: Calculator },
      { path: appUrls.dataGlobe, component: DataGlobe },
      { path: appUrls.dungeonCrawler, component: DungeonCrawler },
      { path: appUrls.fileSize, component: FileSize },
      { path: appUrls.forceDirected, component: ForceDirected },
      { path: appUrls.gameOfLife, component: GameOfLife },
      { path: appUrls.heatMap, component: HeatMap },
      { path: appUrls.leaderBoard, component: LeaderBoard },
      { path: appUrls.localWeather, component: LocalWeather },
      { path: appUrls.markdownPreviewer, component: MarkdownPreviewer },
      { path: appUrls.pomodoro, component: Pomodoro },
      { path: appUrls.quoteMachine, component: QuoteMachine },
      { path: appUrls.recipeBox, component: RecipeBox },
      { path: appUrls.scatterplotGraph, component: ScatterplotGraph },
      { path: appUrls.simon, component: Simon },
      { path: appUrls.ticTacToe, component: TicTacToe },
      { path: appUrls.tribute, component: TributePage },
      { path: appUrls.twitch, component: TwitchTv },
      { path: appUrls.wikipediaViewer, component: WikipediaViewer },
      { component: NotFound },
    ],
  },
];

export default routes;
