// handy regex ls -1 | sed 's/.*/"&",/'
// ls -1 | sed 's/.*/from "\.\/assets\/&",/'
// camel case with sed 's/.png$//;s/-\([a-z]\)/\U\1/g'
// and together they make
// paste -d " "  <( ls -1 | sed 's/^/import /;s/.png$//;s/-\([a-z]\)/\U\1/g') <( ls -1 | sed 's/.*/from "\.\/assets\/&";/')
// fix qoutes with | sed "y/\"/'/";
// one-line
// paste -d " "  <( ls -1 | sed 's/^/import /;s/.png$//;s/-\([a-z]\)/\U\1/g') <( ls -1 | sed 's/.*/from "\.\/assets\/&";/') | sed "y/\"/'/";

import barChart from './assets/bar-chart.png';
import calculator from './assets/calculator.png';
import dataGlobe from './assets/data-globe.png';
import dungeonCrawler from './assets/dungeon-crawler.png';
import fileSize from './assets/file-size.png';
import forceDirected from './assets/force-directed.png';
import gameOfLife from './assets/game-of-life.png';
import heatMap from './assets/heat-map.png';
import leaderBoard from './assets/leader-board.png';
import localWeather from './assets/local-weather.png';
import markdownPreviewer from './assets/markdown-previewer.png';
import pomodoro from './assets/pomodoro.png';
import quoteMachine from './assets/quote-machine.png';
import recipeBox from './assets/recipe-box.png';
import scatterplotGraph from './assets/scatterplot-graph.png';
import simonSays from './assets/simon-says.png';
import ticTacToe from './assets/tic-tac-toe.png';
import twitchTv from './assets/twitch-tv.png';
import wikipediaViewer from './assets/wikipedia-viewer.png';
import woodhouse from './assets/Woodhouse.png';


const GAME = ['game'];
const D3 = ['d3', 'data-visualisations'];
const FRONTEND = ['client', 'front-end'];
const REACT = ['react', 'redux'];
const API = ['api'];
const SERVER = ['server-side'];

const apps = {
  barChart: {
    title: 'Bar Chart',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart',
    url: '/bar-chart',
    media: barChart,
    tags: [].concat(D3, 'bar chart'),
  },
  calculator: {
    title: 'Calculator',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator',
    url: '/calculator',
    media: calculator,
    tags: [].concat(FRONTEND, 'calculator'),
  },
  dataGlobe: {
    url: '/data-globe',
    challenge: 'https://www.freecodecamp.com/challenges/map-data-across-the-globe',
    title: 'Map Data Across the Globe',
    media: dataGlobe,
    tags: [].concat(D3, 'heat map', 'map', 'geo'),
  },
  dungeonCrawler: {
    url: '/dungeon-crawler',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-roguelike-dungeon-crawler-game',
    title: 'Rogue-like dungeon crawler game',
    media: dungeonCrawler,
    tags: [].concat(GAME, REACT),
  },
  fileSize: {
    url: '/file-size',
    challenge: 'https://www.freecodecamp.com/challenges/file-metadata-microservice',
    title: 'File Metadata Microservice',
    media: fileSize,
    tags: [].concat(API, SERVER, 'file size'),
  },
  forceDirected: {
    url: '/force-directed',
    challenge: 'https://www.freecodecamp.com/challenges/show-national-contiguity-with-a-force-directed-graph',
    title: 'National contiguity',
    media: forceDirected,
    tags: [].concat(D3, 'force directed', 'chart', 'flags'),
  },
  gameOfLife: {
    url: '/game-of-life',
    challenge: 'https://www.freecodecamp.com/challenges/build-the-game-of-life',
    title: 'Game of Life',
    media: gameOfLife,
    tags: [].concat(REACT, GAME, 'game of life'),
  },
  heatMap: {
    url: '/heat-map',
    title: 'Heat Map',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map',
    media: heatMap,
    tags: [].concat(D3, 'heat map', 'graph'),
  },
  imageSearch: {
    url: '/image-search',
    title: 'Image search',
    challenge: 'https://www.freecodecamp.com/challenges/image-search-abstraction-layer',
    media: '',
    tags: [].concat(API, SERVER, 'image search'),
  },
  leaderBoard: {
    url: '/leader-board',
    title: 'Forum Leaderboard',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-camper-leaderboard',
    media: leaderBoard,
    tags: [].concat(REACT, API, FRONTEND, 'leader board'),
  },
  localWeather: {
    url: '/local-weather',
    title: 'Local Weather',
    challenge: 'https://www.freecodecamp.com/challenges/show-the-local-weather',
    media: localWeather,
    tags: [].concat(API, FRONTEND, 'weather'),
  },
  markdownPreviewer: {
    url: '/markdown-previewer',
    title: 'Markdown Previewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-markdown-previewer',
    media: markdownPreviewer,
    tags: [].concat(REACT, 'markdown', 'editor'),
  },
  pomodoro: {
    url: '/pomodoro',
    title: 'Pomodoro Clock',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-pomodoro-clock',
    media: pomodoro,
    tags: [].concat(FRONTEND, 'clock'),
  },
  quoteMachine: {
    url: '/quote-machine',
    title: 'Random Quote Machine',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-random-quote-machine',
    media: quoteMachine,
    tags: [].concat(FRONTEND, 'quotes'),
  },
  recipeBox: {
    url: '/recipe-box',
    title: 'Recipe Box',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-recipe-box',
    media: recipeBox,
    tags: [].concat(REACT, FRONTEND, 'persist', 'memory', 'recipe'),
  },
  scatterplotGraph: {
    url: '/scatterplot-graph',
    title: 'Alpe d\'Huez Scatterplot Graph',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-scatterplot-graph',
    media: scatterplotGraph,
    tags: [].concat(D3, 'scatterplot', 'graph'),
  },
  simon: {
    url: '/simon-says',
    title: 'Simon says',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-simon-game',
    media: simonSays,
    tags: [].concat(GAME, 'simon says', 'ai'),
  },
  ticTacToe: {
    url: '/tic-tac-toe',
    title: 'Tic Tac Toe',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game',
    media: ticTacToe,
    tags: [].concat(GAME, 'minimax', 'ai', 'knots and crosses'),
  },
  tribute: {
    title: 'Tribute Page',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tribute-page',
    url: '/tribute-page',
    media: woodhouse,
    tags: [].concat(FRONTEND, 'tribute page'),
  },
  twitch: {
    url: '/twitch-streams',
    challenge: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api',
    title: 'Twitch-tv info',
    media: twitchTv,
    tags: [].concat(FRONTEND, API, 'twitch tv'),
  },
  wikipediaViewer: {
    url: '/wikipedia-viewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer',
    title: 'Wikipedia Finder',
    media: wikipediaViewer,
    tags: [].concat(FRONTEND, 'wikipedia'),
  },
};

export default apps;
