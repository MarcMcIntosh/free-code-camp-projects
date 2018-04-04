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
import imageSearch from './assets/image-search.png';
import urlShortener from './assets/url-shortener.png';
import headerParser from './assets/header-parser.png';
import timestamp from './assets/timestamp.png';
import votingApp from './assets/voting-app.png';

const GAME = ['game'];
const D3 = ['d3', 'data-visualisations'];
const FRONTEND = ['client', 'front-end'];
const REACT = ['react', 'redux'];
const API = ['api'];
const SERVER = ['server-side', 'micro-service'];
const FULL_STACK = ['full stack'];

const apps = {
  barChart: {
    title: 'Bar Chart',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart',
    url: '/bar-chart',
    media: barChart,
    tags: [].concat(D3, 'bar chart'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/bar-chart',
  },
  calculator: {
    title: 'Calculator',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator',
    url: '/calculator',
    media: calculator,
    tags: [].concat(FRONTEND, 'calculator'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/calculator',
  },
  dataGlobe: {
    url: '/data-globe',
    challenge: 'https://www.freecodecamp.com/challenges/map-data-across-the-globe',
    title: 'Map Data Across the Globe',
    media: dataGlobe,
    tags: [].concat(D3, 'heat map', 'map', 'geo'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/data-globe',
  },
  dungeonCrawler: {
    url: '/dungeon-crawler',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-roguelike-dungeon-crawler-game',
    title: 'Rogue-like dungeon crawler game',
    media: dungeonCrawler,
    tags: [].concat(GAME, REACT),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/dungeon-crawler',
  },
  fileSize: {
    url: '/file-size',
    challenge: 'https://www.freecodecamp.com/challenges/file-metadata-microservice',
    title: 'File Metadata Microservice',
    media: fileSize,
    tags: [].concat(API, SERVER, 'file size'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/file-size',
  },
  forceDirected: {
    url: '/force-directed',
    challenge: 'https://www.freecodecamp.com/challenges/show-national-contiguity-with-a-force-directed-graph',
    title: 'National contiguity',
    media: forceDirected,
    tags: [].concat(D3, 'force directed', 'chart', 'flags'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/force-directed',
  },
  gameOfLife: {
    url: '/game-of-life',
    challenge: 'https://www.freecodecamp.com/challenges/build-the-game-of-life',
    title: 'Game of Life',
    media: gameOfLife,
    tags: [].concat(REACT, GAME, 'game of life'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/game-of-life',
  },
  headerParser: {
    url: '/header-parser',
    challenge: 'https://www.freecodecamp.com/challenges/request-header-parser-microservice',
    title: 'Request Header Parser',
    media: headerParser,
    tags: [].concat(SERVER, API, 'headers'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/header-parser',
  },
  heatMap: {
    url: '/heat-map',
    title: 'Heat Map',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map',
    media: heatMap,
    tags: [].concat(D3, 'heat map', 'graph'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/heat-map',
  },
  imageSearch: {
    url: '/image-search',
    title: 'Image search',
    challenge: 'https://www.freecodecamp.com/challenges/image-search-abstraction-layer',
    media: imageSearch,
    tags: [].concat(API, SERVER, 'image search'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/image-search',
  },
  leaderBoard: {
    url: '/leader-board',
    title: 'Forum Leaderboard',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-camper-leaderboard',
    media: leaderBoard,
    tags: [].concat(REACT, API, FRONTEND, 'leader board'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/leader-board',
  },
  localWeather: {
    url: '/local-weather',
    title: 'Local Weather',
    challenge: 'https://www.freecodecamp.com/challenges/show-the-local-weather',
    media: localWeather,
    tags: [].concat(API, FRONTEND, 'weather'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/local-weather',
  },
  markdownPreviewer: {
    url: '/markdown-previewer',
    title: 'Markdown Previewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-markdown-previewer',
    media: markdownPreviewer,
    tags: [].concat(REACT, 'markdown', 'editor'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/markdown-previewer',
  },
  pomodoro: {
    url: '/pomodoro',
    title: 'Pomodoro Clock',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-pomodoro-clock',
    media: pomodoro,
    tags: [].concat(FRONTEND, 'clock'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/pomodoro',
  },
  quoteMachine: {
    url: '/quote-machine',
    title: 'Random Quote Machine',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-random-quote-machine',
    media: quoteMachine,
    tags: [].concat(FRONTEND, 'quotes'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/quote-machine',
  },
  recipeBox: {
    url: '/recipe-box',
    title: 'Recipe Box',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-recipe-box',
    media: recipeBox,
    tags: [].concat(REACT, FRONTEND, 'persist', 'memory', 'recipe'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/recipe-box',
  },
  scatterplotGraph: {
    url: '/scatterplot-graph',
    title: 'Alpe d\'Huez Scatterplot Graph',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-scatterplot-graph',
    media: scatterplotGraph,
    tags: [].concat(D3, 'scatterplot', 'graph'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/scatterplot-graph',
  },
  simon: {
    url: '/simon-says',
    title: 'Simon says',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-simon-game',
    media: simonSays,
    tags: [].concat(GAME, 'simon says', 'ai'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/simon',
  },
  ticTacToe: {
    url: '/tic-tac-toe',
    title: 'Tic Tac Toe',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game',
    media: ticTacToe,
    tags: [].concat(GAME, 'minimax', 'ai', 'knots and crosses'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/tic-tac-toe',
  },
  timestamp: {
    url: '/timestamp',
    title: 'Timestamp Microservice',
    challenge: 'https://www.freecodecamp.com/challenges/timestamp-microservice',
    media: timestamp,
    tags: [].concat(SERVER, API, 'timestamp'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/timestamp',
  },
  tribute: {
    title: 'Tribute Page',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tribute-page',
    url: '/tribute-page',
    media: woodhouse,
    tags: [].concat(FRONTEND, 'tribute page'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/tribute-page',
  },
  twitch: {
    url: '/twitch-streams',
    challenge: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api',
    title: 'Twitch-tv info',
    media: twitchTv,
    tags: [].concat(FRONTEND, API, 'twitch tv'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/twitch-tv',
  },
  urlShortener: {
    url: '/url-shortener',
    challenge: 'https://www.freecodecamp.com/challenges/url-shortener-microservice',
    title: 'URL Shortener Microservice',
    media: urlShortener,
    tags: [].concat(SERVER, API, 'url shortener'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/url-shortener',
  },
  votingApp: {
    url: '/voting-app',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-voting-app',
    title: 'Polling App',
    media: votingApp,
    tags: [].concat(FULL_STACK, 'polling', 'voting', 'questions'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/voting-app',
  },
  wikipediaViewer: {
    url: '/wikipedia-viewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer',
    title: 'Wikipedia Finder',
    media: wikipediaViewer,
    tags: [].concat(FRONTEND, 'wikipedia'),
    repository: 'https://github.com/MarcMcIntosh/free-code-camp-projects/src/projects/wikipedia-viewer',
  },
};

export default apps;
