import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import barChart from '../../projects/bar-chart/reducer';
import calculator from '../../projects/calculator/reducer';
import dataGlobe from '../../projects/data-globe/reducer';
import dungeonCrawler from '../../projects/dungeon-crawler/reducer';
import forceDirected from '../../projects/force-directed/reducer';
import gameOfLife from '../../projects/game-of-life/reducer';
import heatMap from '../../projects/heat-map/reducer';
import leaderBoard from '../../projects/leader-board/reducer';
import localWeather from '../../projects/local-weather/reducer';
import markdownPreviewer from '../../projects/markdown-previewer/reducer';
import pomodoroClock from '../../projects/pomodoro/reducer';
import { reducer as portfolio } from '../../projects/portfolio';

import quoteMachine from '../../projects/quote-machine/reducer';
import recipeBox from '../../projects/recipe-box/reducer';
import scatterPlotGraph from '../../projects/scatterplot-graph/reducer';
import simon from '../../projects/simon/reducer';
import ticTacToe from '../../projects/tic-tac-toe/reducer';
import tributePage from '../../projects/tribute-page/reducer';
import twitchTv from '../../projects/twitch-tv/reducer';
import wikipediaViewer from '../../projects/wikipedia-viewer/reducer';


const reducer = combineReducers({
  barChart,
  calculator,
  dataGlobe,
  dungeonCrawler,
  forceDirected,
  gameOfLife,
  heatMap,
  leaderBoard,
  localWeather,
  markdownPreviewer,
  pomodoroClock,
  portfolio,
  quoteMachine,
  recipeBox,
  form,
  scatterPlotGraph,
  simon,
  ticTacToe,
  tributePage,
  twitchTv,
  wikipediaViewer,
});

export default reducer;
export { default as initialState } from './initialState';
