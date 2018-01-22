import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as barChart } from '../../projects/bar-chart';
import { reducer as calculator } from '../../projects/calculator';
import { reducer as dataGlobe } from '../../projects/data-globe';
import { reducer as dungeonCrawler } from '../../projects/dungeon-crawler';
import { reducer as forceDirected } from '../../projects/force-directed';
import { reducer as gameOfLife } from '../../projects/game-of-life';
import { reducer as heatMap } from '../../projects/heat-map';
import { reducer as leaderBoard } from '../../projects/leader-board';
import { reducer as localWeather } from '../../projects/local-weather';
import { reducer as markdownPreviewer } from '../../projects/markdown-previewer';
import { reducer as pomodoroClock } from '../../projects/pomodoro';
import { reducer as portfolio } from '../../projects/portfolio';
import { reducer as quoteMachine } from '../../projects/quote-machine';
import { reducer as recipeBox } from '../../projects/recipe-box';
import { reducer as scatterPlotGraph } from '../../projects/scatterplot-graph';
import { reducer as simon } from '../../projects/simon';
import { reducer as ticTacToe } from '../../projects/tic-tac-toe';
import { reducer as tributePage } from '../../projects/tribute-page';
import { reducer as twitchTv } from '../../projects/twitch-tv';
import { reducer as wikipediaViewer } from '../../projects/wikipedia-viewer';
import { reducer as fileSize } from '../../projects/file-size';
import { reducer as imageSearch } from '../../projects/image-search';
import { reducer as urlShortener } from '../../projects/url-shortener';

const reducer = combineReducers({
  barChart,
  calculator,
  dataGlobe,
  dungeonCrawler,
  fileSize,
  forceDirected,
  gameOfLife,
  heatMap,
  imageSearch,
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
  urlShortener,
  wikipediaViewer,
});

export default reducer;
export { default as initialState } from './initialState';
