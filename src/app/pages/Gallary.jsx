/* eslint-disable */
import React from 'react';
import Preview from '../components/Preview';
import appUrls from '../../common/app-urls';
import placeholder from '../images/4-3.jpg';

/* done */
import barchart from '../images/localhost-8080-bar-chart.png';
import calculator from '../images/localhost-8080-calculator.png';
import dataglobe from '../images/localhost-8080-data-globe.png';
import dungeon from '../images/localhost-8080-dungeon-crawler.png';
import forcedirect from '../images/localhost-8080-force-directed.png';
import recipebox from '../images/localhost-8080-recipe-box.png';
import gameoflife from '../images/localhost-8080-game-of-life.png';
import heatmap from '../images/localhost-8080-heat-map.png';
import leaderboard from '../images/localhost-8080-leader-board.png';
import localWeather from '../images/localhost-8080-local-weather.png';
import markdownPreviewer from '../images/localhost-8080-markdown-previewer.png';
import pomodoro from '../images/localhost-8080-pomodoro.png';
import quote from '../images/localhost-8080-quote-machine.png'
import scatterplot from '../images/localhost-8080-scatterplot-graph.png';
import simon from '../images/localhost-8080-simon-says.png';
import tictacttoe from '../images/localhost-8080-tic-tac-toe.png';
import tribute from '../images/Woodhouse.png';
import twitch from '../images/localhost-8080-twitch-tv.png';
import wikipedia from '../images/localhost-8080-wikipedia-viewer.png';

// to do

/*  apiUrls[keys]
'tribute',
  'barChart',
  'calculator',
  'dataGlobe',
  'dungeonCrawler',
  'forceDirected',
  'gameOfLife',
  'heatMap',
  'leaderboard',
  'localWeather',
  'markdownPreviewer',
  'quoteMachine',
  'recipeBox',
  'scatterplotGraph',
  'simon',
  'ticTacToe',
  'twitch',
  'wikipediaViewer',
  'pomodoro' ]

 */

const Gallary = () => (<div className="preview">

  {/* front end */}
  <Preview title={appUrls.calculator.title} url={appUrls.calculator.url} challenge={appUrls.calculator.challenge} media={calculator} />

  <Preview title={appUrls.localWeather.title} url={appUrls.localWeather.url} challenge={appUrls.localWeather.challenge} media={localWeather} />

  <Preview title={appUrls.pomodoro.title} url={appUrls.pomodoro.url} challenge={appUrls.pomodoro.challenge} media={pomodoro} />

  <Preview title={appUrls.quoteMachine.title} url={appUrls.quoteMachine.url} challenge={appUrls.quoteMachine.challenge} media={quote} />

  <Preview title={appUrls.simon.title} url={appUrls.simon.url} challenge={appUrls.simon.challenge} media={simon} />

  <Preview title={appUrls.ticTacToe.title} url={appUrls.ticTacToe.url} challenge={appUrls.ticTacToe.challenge} media={tictacttoe} />

  <Preview title={appUrls.tribute.title} url={appUrls.tribute.url} challenge={appUrls.tribute.challenge} media={tribute} />

  <Preview title={appUrls.twitch.title} url={appUrls.twitch.url} challenge={appUrls.twitch.challenge} media={twitch} />

  <Preview title={appUrls.wikipediaViewer.title} url={appUrls.wikipediaViewer.url} challenge={appUrls.wikipediaViewer.challenge} media={wikipedia} />

  {/* d3 */}  {/* no images yet */}
  <Preview title={appUrls.barChart.title} url={appUrls.barChart.url} challenge={appUrls.barChart.challenge} media={barchart} />

  <Preview title={appUrls.dataGlobe.title} url={appUrls.dataGlobe.url} challenge={appUrls.dataGlobe.challenge} media={dataglobe} />

  <Preview title={appUrls.forceDirected.title} url={appUrls.forceDirected.url} challenge={appUrls.forceDirected.challenge} media={forcedirect} />

  <Preview title={appUrls.heatMap.title} url={appUrls.heatMap.url} challenge={appUrls.heatMap.challenge} media={heatmap} />

  <Preview title={appUrls.scatterplotGraph.title} url={appUrls.scatterplotGraph.url} challenge={appUrls.scatterplotGraph.challenge} media={scatterplot} />

  {/* React */}
  <Preview title={appUrls.dungeonCrawler.title} url={appUrls.dungeonCrawler.url} challenge={appUrls.dungeonCrawler.challenge} media={dungeon} />

  <Preview title={appUrls.gameOfLife.title} url={appUrls.gameOfLife.url} challenge={appUrls.gameOfLife.challenge} media={gameoflife} />

  <Preview title={appUrls.leaderBoard.title} url={appUrls.leaderBoard.url} challenge={appUrls.leaderBoard.challenge} media={leaderboard} />

  <Preview title={appUrls.markdownPreviewer.title} url={appUrls.markdownPreviewer.url} challenge={appUrls.markdownPreviewer.challenge} media={markdownPreviewer} />

  <Preview title={appUrls.recipeBox.title} url={appUrls.recipeBox.url} challenge={appUrls.recipeBox.challenge} media={recipebox} />

  {/* api */}
  {/* full stack */}

{/*
  appUrls.dataGlobe,
  appUrls.dungeonCrawler,
  'forceDirected',
  'gameOfLife',
  'heatMap',
  'leaderboard',
  'localWeather',
  'markdownPreviewer',
  'quoteMachine',
  'recipeBox',
  'scatterplotGraph',
  'simon',
  'ticTacToe',
  'twitch',
  'wikipediaViewer',
  'pomodoro'
*/}
</div>);

export default Gallary;
