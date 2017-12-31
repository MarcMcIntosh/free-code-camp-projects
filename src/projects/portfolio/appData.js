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


const apps = {
  tribute: {
    title: 'Tribute Page',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tribute-page',
    url: '/tribute-page',
    media: woodhouse,
  },
  barChart: {
    title: 'Visualize Data with a Bar Chart',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart',
    url: '/bar-chart',
    media: barChart,
  },
  calculator: {
    title: 'Build a JavaScript Calculator',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator',
    url: '/calculator',
    media: calculator,
  },
  dataGlobe: {
    url: '/data-globe',
    challenge: 'https://www.freecodecamp.com/challenges/map-data-across-the-globe',
    title: 'Map Data Across the Globe',
    media: dataGlobe,
  },
  dungeonCrawler: {
    url: '/dungeon-crawler',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-roguelike-dungeon-crawler-game',
    title: 'Build a rogue-like dungeon crawler game',
    media: dungeonCrawler,
  },
  forceDirected: {
    url: '/force-directed',
    challenge: 'https://www.freecodecamp.com/challenges/show-national-contiguity-with-a-force-directed-graph',
    title: 'Show National Contiguity with a Force Directed Graph',
    media: forceDirected,
  },
  gameOfLife: {
    url: '/game-of-life',
    challenge: 'https://www.freecodecamp.com/challenges/build-the-game-of-life',
    title: 'Game of Life',
    media: gameOfLife,
  },
  heatMap: {
    url: '/heat-map',
    title: 'Visualize Data with a Heat Map',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map',
    media: heatMap,
  },
  leaderBoard: {
    url: '/leader-board',
    title: 'Build a Camper Leaderboard',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-camper-leaderboard',
    media: leaderBoard,
  },
  localWeather: {
    url: '/local-weather',
    title: 'Show the Local Weather',
    challenge: 'https://www.freecodecamp.com/challenges/show-the-local-weather',
    media: localWeather,
  },
  markdownPreviewer: {
    url: '/markdown-previewer',
    title: 'Build a Markdown Previewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-markdown-previewer',
    media: markdownPreviewer,
  },
  quoteMachine: {
    url: '/quote-machine',
    title: 'Build a Random Quote Machine',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-random-quote-machine',
    media: quoteMachine,
  },
  recipeBox: {
    url: '/recipe-box',
    title: 'Build a Recipe Box',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-recipe-box',
    media: recipeBox,
  },
  scatterplotGraph: {
    url: '/scatterplot-graph',
    title: 'Visualize Data with a Scatterplot Graph',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-scatterplot-graph',
    media: scatterplotGraph,
  },
  simon: {
    url: '/simon-says',
    title: 'Build a Simon Game',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-simon-game',
    media: simonSays,
  },
  ticTacToe: {
    url: '/tic-tac-toe',
    title: 'Build a Tic Tac Toe Game',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game',
    media: ticTacToe,
  },
  twitch: {
    url: '/twitch-streams',
    challenge: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api',
    title: 'Use the Twitchtv JSON API',
    media: twitchTv,
  },
  wikipediaViewer: {
    url: '/wikipedia-viewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer',
    title: 'Build a Wikipedia Viewer',
    media: wikipediaViewer,
  },
  pomodoro: {
    url: '/pomodoro',
    title: 'Build a Pomodoro Clock',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-pomodoro-clock',
    media: pomodoro,
  },
};

export default apps;
