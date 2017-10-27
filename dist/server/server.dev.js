require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"mdc-card": "mdc-card__mdc-card___29Z1-",
	"mdc-card__primary": "mdc-card__mdc-card__primary___3r91v",
	"mdc-card__title--large": "mdc-card__mdc-card__title--large___1uPcQ",
	"mdc-card__supporting-text": "mdc-card__mdc-card__supporting-text___261-K",
	"mdc-card--theme-dark": "mdc-card__mdc-card--theme-dark___u5lf_",
	"mdc-theme--dark": "mdc-card__mdc-theme--dark___htl4E",
	"mdc-card__actions": "mdc-card__mdc-card__actions___20ljj",
	"mdc-card__action": "mdc-card__mdc-card__action___3duV8",
	"mdc-card__actions--vertical": "mdc-card__mdc-card__actions--vertical___165uM",
	"mdc-card__media": "mdc-card__mdc-card__media___zMpte",
	"mdc-card__media-item": "mdc-card__mdc-card__media-item___2LwiI",
	"mdc-card__media-item--1dot5x": "mdc-card__mdc-card__media-item--1dot5x___eHXd5",
	"mdc-card__media-item--2x": "mdc-card__mdc-card__media-item--2x___3OgYT",
	"mdc-card__media-item--3x": "mdc-card__mdc-card__media-item--3x___1FMyl",
	"mdc-card__title": "mdc-card__mdc-card__title___3FWUG",
	"mdc-card__subtitle": "mdc-card__mdc-card__subtitle___1jv3l",
	"mdc-card__horizontal-block": "mdc-card__mdc-card__horizontal-block___15oHP"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'button',
    props,
    children
  );
};

Button.defaultProps = {
  children: null,
  type: 'button',
  tabIndex: 0
};

exports.default = Button;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(7),
    resolve = _require.resolve;

var ROOT_DIR = process.cwd();

var DIST_DIR = resolve(ROOT_DIR, 'dist');
var DIST_SRV = resolve(DIST_DIR, 'server');
var DIST_PUB = resolve(DIST_DIR, 'public');

var SRC_DIR = resolve(ROOT_DIR, 'src');
var SRC_SRV = resolve(SRC_DIR, 'server');
var SRC_APP = resolve(SRC_DIR, 'app');

var NODE_MODULES_DIR = resolve(ROOT_DIR, 'node_modules');

module.exports = {
  root: ROOT_DIR,
  dist: { public: DIST_PUB, server: DIST_SRV },
  src: { client: SRC_APP, server: SRC_SRV },

  modules: NODE_MODULES_DIR
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recipeAdd = recipeAdd;
var ACKNOWLEDGE_COOKIES = exports.ACKNOWLEDGE_COOKIES = 'ACKNOWLEDGE_COOKIES';
var acknowledgeCokkies = exports.acknowledgeCokkies = function acknowledgeCokkies() {
  return {
    type: ACKNOWLEDGE_COOKIES
  };
};
var RECIPE_ADD = exports.RECIPE_ADD = 'RECIPE_ADD';
var recipes = exports.recipes = function recipes(payload) {
  return {
    type: RECIPE_ADD, payload: payload
  };
};

var TOGGLE_MENU = exports.TOGGLE_MENU = 'TOGGLE_MENU';
var toggleMenu = exports.toggleMenu = function toggleMenu() {
  return { type: TOGGLE_MENU };
};

var ADD_NEW = exports.ADD_NEW = 'ADD_NEW';
var addNew = exports.addNew = function addNew() {
  return {
    type: ADD_NEW
  };
};

function recipeAdd(recipe) {
  return recipes(recipe);
}

var RECIPE_EDIT = exports.RECIPE_EDIT = 'RECIPE_EDIT';
var recipeEdit = exports.recipeEdit = function recipeEdit(payload) {
  return {
    type: RECIPE_EDIT, payload: payload
  };
};

var RECIPE_VIEW = exports.RECIPE_VIEW = 'RECIPE_VIEW';
var recipeView = exports.recipeView = function recipeView(payload) {
  return {
    type: RECIPE_VIEW, payload: payload
  };
};

var RECIPE_DELETE = exports.RECIPE_DELETE = 'RECIPE_DELETE';
var recipeDelete = exports.recipeDelete = function recipeDelete(payload) {
  return { type: RECIPE_DELETE, payload: payload };
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearError = clearError;
exports.handleUserError = handleUserError;
exports.handleUserInput = handleUserInput;

var prefix = function prefix(str) {
  return 'CALCULATOR_' + str;
};

var CALC_ERROR = exports.CALC_ERROR = prefix('ERROR');
var calcError = function calcError(payload) {
  return { type: CALC_ERROR, payload: payload };
};
var SET_ANSWER = exports.SET_ANSWER = prefix('SET_ANSWER');
var setAnswer = function setAnswer(payload) {
  return { type: SET_ANSWER, payload: payload };
};
var SET_DISPLAY = exports.SET_DISPLAY = prefix('SET_DISPLAY');
var setDisplay = function setDisplay(payload) {
  return { type: SET_DISPLAY, payload: payload };
};
// export const SET_ERROR = 'SET_ERROR';


/* eslint no-new-func: "off" */
var solve = function solve(calc) {
  return new Function('return ' + calc)();
};
var append = function append(str, n) {
  return str + n;
};

function clearError() {
  return function (dispatch) {
    return dispatch(calcError({ error: null, errorId: null }));
  };
}

function handleUserError(err) {
  return function (dispatch, getState) {
    var last = getState().errorId;
    /* Curently displaying an error */
    if (last) {
      clearTimeout(last);
    }
    var errorId = setTimeout(function () {
      return dispatch(calcError({
        error: null,
        errorId: null
      }));
    }, 5000);
    dispatch(calcError({ error: err, errorId: errorId }));
  };
}

function handleUserInput(d) {
  return function (dispatch, getState) {
    var state = getState();
    var display = state.display,
        answer = state.answer;

    var n = display.length - 1;
    var last = display[n];
    if (d === 'clear') {
      return dispatch(setDisplay(''));
    } else if (!isNaN(d)) {
      var nxt = append(display, d);
      return dispatch(setDisplay(nxt));
    } else if (d === 'del') {
      var _nxt = display.slice(0, n);
      return dispatch(setDisplay(_nxt));
    } else if (d === '.' && !isNaN(last)) {
      var _nxt2 = append(display, d);
      return dispatch(setDisplay(_nxt2));
    } else if (d === '=' && !isNaN(last)) {
      var solution = solve(display);
      return isNaN(+solution) ? dispatch(handleUserError('Invalid sum')) : dispatch(setAnswer(solution));
    } else if (d === '-' && last !== '-') {
      var _nxt3 = append(display, d);
      return dispatch(setDisplay(_nxt3));
    } else if (d === 'ans' && answer === null) {
      return dispatch(setDisplay(display));
    } else if (d === 'ans' && /\d/.test(answer)) {
      var _nxt4 = append(display, answer);
      return dispatch(setDisplay(_nxt4));
    } else if (d !== answer && d !== last && /\d/.test(last)) {
      var _nxt5 = append(display, d);
      return dispatch(setDisplay(_nxt5));
    } else if (display === answer && /[0-9+-/.*%]/.test(d)) {
      var _nxt6 = append(display, d);
      return dispatch(setDisplay(_nxt6));
    }
    return dispatch(handleUserError('Invalid Input'));
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"mdc-button": "mdc-button__mdc-button___7nMmh",
	"mdc-ripple-upgraded": "mdc-button__mdc-ripple-upgraded___333RP",
	"mdc-ripple-upgraded--background-focused": "mdc-button__mdc-ripple-upgraded--background-focused___zVna-",
	"mdc-ripple-upgraded--background-active-fill": "mdc-button__mdc-ripple-upgraded--background-active-fill___38wjL",
	"mdc-ripple-upgraded--unbounded": "mdc-button__mdc-ripple-upgraded--unbounded___23UaN",
	"mdc-ripple-upgraded--foreground-activation": "mdc-button__mdc-ripple-upgraded--foreground-activation___yqSqd",
	"mdc-ripple-upgraded--foreground-deactivation": "mdc-button__mdc-ripple-upgraded--foreground-deactivation___3LTxp",
	"mdc-button--theme-dark": "mdc-button__mdc-button--theme-dark___3FSmD",
	"mdc-theme--dark": "mdc-button__mdc-theme--dark___1mH5n",
	"mdc-button--raised": "mdc-button__mdc-button--raised___2VSbj",
	"mdc-button--unelevated": "mdc-button__mdc-button--unelevated___3G-6x",
	"mdc-button--compact": "mdc-button__mdc-button--compact___3UMtY",
	"mdc-button--dense": "mdc-button__mdc-button--dense___2Xjpe",
	"mdc-button--primary": "mdc-button__mdc-button--primary___3Rfsr",
	"mdc-button--accent": "mdc-button__mdc-button--accent___1zr-c",
	"mdc-ripple-fg-radius-in": "mdc-button__mdc-ripple-fg-radius-in___3plFO",
	"mdc-ripple-fg-opacity-in": "mdc-button__mdc-ripple-fg-opacity-in___3y-qo",
	"mdc-ripple-fg-opacity-out": "mdc-button__mdc-ripple-fg-opacity-out___3OGrr"
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var apps = {
  tribute: {
    title: 'Tribute Page',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tribute-page',
    url: '/tribute-page'
  },
  barChart: {
    title: 'Visualize Data with a Bar Chart',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart',
    url: '/bar-chart'
  },
  calculator: {
    title: 'Build a JavaScript Calculator',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-javascript-calculator',
    url: '/calculator'
  },
  dataGlobe: {
    url: '/data-globe',
    challenge: 'https://www.freecodecamp.com/challenges/map-data-across-the-globe',
    title: 'Map Data Across the Globe'
  },
  dungeonCrawler: {
    url: '/dungeon-crawler',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-roguelike-dungeon-crawler-game',
    title: 'Build a rogue-like dungeon crawler game'
  },
  forceDirected: {
    url: '/force-directed',
    challenge: 'https://www.freecodecamp.com/challenges/show-national-contiguity-with-a-force-directed-graph',
    title: 'Show National Contiguity with a Force Directed Graph'
  },
  gameOfLife: {
    url: '/game-of-life',
    challenge: 'https://www.freecodecamp.com/challenges/build-the-game-of-life',
    title: 'Game of Life'
  },
  heatMap: {
    url: '/heat-map',
    title: 'Visualize Data with a Heat Map',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map'
  },
  leaderboard: {
    url: '/leaderboard',
    title: 'Build a Camper Leaderboard',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-camper-leaderboard'
  },
  localWeather: {
    url: '/local-weather',
    title: 'Show the Local Weather',
    challenge: 'https://www.freecodecamp.com/challenges/show-the-local-weather'
  },
  markdownPreviewer: {
    url: '/markdown-previewer',
    title: 'Build a Markdown Previewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-markdown-previewer'
  },
  quoteMachine: {
    url: '/quote-machine',
    title: 'Build a Random Quote Machine',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-random-quote-machine'
  },
  recipeBox: {
    url: '/recipe-box',
    title: 'Build a Recipe Box',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-recipe-box'
  },
  scatterplotGraph: {
    url: '/scatterplot-graph',
    title: 'Visualize Data with a Scatterplot Graph',
    challenge: 'https://www.freecodecamp.com/challenges/visualize-data-with-a-scatterplot-graph'
  },
  simon: {
    url: '/simon-says',
    title: 'Build a Simon Game',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-simon-game'
  },
  ticTacToe: {
    url: '/tic-tac-toe',
    title: 'Build a Tic Tac Toe Game',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game'
  },
  twitch: {
    url: '/twitch-streams',
    challenge: 'https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api',
    title: 'Use the Twitchtv JSON API'
  },
  wikipediaViewer: {
    url: '/wikipedia-viewer',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer',
    title: 'Build a Wikipedia Viewer'
  },
  pomodoro: {
    url: '/pomodoro',
    title: 'Build a Pomodoro Clock',
    challenge: 'https://www.freecodecamp.com/challenges/build-a-pomodoro-clock'
  }
};

exports.default = apps;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Done = exports.Menu = exports.Edit = exports.Delete = exports.Confrim = exports.Close = exports.Cancel = exports.Add = undefined;

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

var _Add = __webpack_require__(68);

var _Add2 = _interopRequireDefault(_Add);

var _Cancel = __webpack_require__(69);

var _Cancel2 = _interopRequireDefault(_Cancel);

var _Close = __webpack_require__(70);

var _Close2 = _interopRequireDefault(_Close);

var _Confirm = __webpack_require__(71);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Delete = __webpack_require__(72);

var _Delete2 = _interopRequireDefault(_Delete);

var _Edit = __webpack_require__(73);

var _Edit2 = _interopRequireDefault(_Edit);

var _Menu = __webpack_require__(74);

var _Menu2 = _interopRequireDefault(_Menu);

var _Done = __webpack_require__(75);

var _Done2 = _interopRequireDefault(_Done);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;
exports.Add = _Add2.default;
exports.Cancel = _Cancel2.default;
exports.Close = _Close2.default;
exports.Confrim = _Confirm2.default;
exports.Delete = _Delete2.default;
exports.Edit = _Edit2.default;
exports.Menu = _Menu2.default;
exports.Done = _Done2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var localIdentName = '[name]__[local]___[hash:base64:5]';

module.exports = localIdentName;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(21);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(10);

var _webpack2 = _interopRequireDefault(_webpack);

var _helmet = __webpack_require__(22);

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = __webpack_require__(23);

var _compression2 = _interopRequireDefault(_compression);

var _env = __webpack_require__(24);

var _middleware = __webpack_require__(25);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /* eslint global-require: 0 */


if (_env.ENV === 'development') {
  // enable webpack hot module replacement
  var webpackDevMiddleware = __webpack_require__(86);
  var webpackHotMiddleware = __webpack_require__(87);
  var webpackConfig = __webpack_require__(88);
  var devBrowserConfig = webpackConfig({ browser: true });
  var compiler = (0, _webpack2.default)(devBrowserConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devBrowserConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
} else if (_env.ENV === 'production') {
  app.use((0, _compression2.default)());
  app.use((0, _helmet2.default)());
}

app.use(_express2.default.static(_path2.default.join(process.cwd(), 'dist', 'public')));

app.get('/*', _middleware2.default);

app.listen(process.env.PORT || 8080);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENV = exports.ENV = "development" || 'development';

var isProduction = exports.isProduction = ENV === 'production';
var isDebug = exports.isDebug = ENV === 'development';
var isClient = exports.isClient = typeof window !== 'undefined';

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _reactRouterConfig = __webpack_require__(11);

var _routes = __webpack_require__(26);

var _routes2 = _interopRequireDefault(_routes);

var _pageRenderer = __webpack_require__(81);

var _pageRenderer2 = _interopRequireDefault(_pageRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import createRoutes from '../../common/routes';
function render(req, res) {
  // const history = createMemoryHistory();
  // const routes = createRoutes();
  var context = {};
  var children = (0, _reactRouterConfig.renderRoutes)(_routes2.default);
  var html = (0, _pageRenderer2.default)({
    context: context,
    location: req.url,
    children: children
  });
  res.status(200).send(html);
} // import { StaticRouter } from 'react-router';
// import createMemoryHistory from 'history/createMemoryHistory';

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pages = __webpack_require__(27);

var _tributePage = __webpack_require__(49);

var _tributePage2 = _interopRequireDefault(_tributePage);

var _appUrls = __webpack_require__(15);

var _appUrls2 = _interopRequireDefault(_appUrls);

var _calculator = __webpack_require__(53);

var _calculator2 = _interopRequireDefault(_calculator);

var _recipeBox = __webpack_require__(61);

var _recipeBox2 = _interopRequireDefault(_recipeBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  component: _pages.App,
  routes: [{
    path: '/',
    exact: true,
    component: _pages.Gallary
  }, {
    path: '/about', component: _pages.About
  }, {
    path: _appUrls2.default.calculator.url, component: _calculator2.default
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
    path: _appUrls2.default.recipeBox.url, component: _recipeBox2.default
  }]
}];
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
// import React from 'react';
/* eslint-disable */
exports.default = routes;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(28);

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _About = __webpack_require__(34);

Object.defineProperty(exports, 'About', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_About).default;
  }
});

var _Gallary = __webpack_require__(35);

Object.defineProperty(exports, 'Gallary', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gallary).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Page = __webpack_require__(29);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(30);

var _App2 = _interopRequireDefault(_App);

var _assets = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _jsx(_Page2.default, {
    title: _assets.title,
    meta: _assets.meta,
    link: _assets.link
  }, void 0, _react2.default.createElement(_App2.default, props));
};

exports.default = App;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(12);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var title = _ref.title,
      link = _ref.link,
      meta = _ref.meta,
      children = _ref.children;
  return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
    title: title,
    link: link,
    meta: meta
  }), children);
};

Page.defaultProps = { title: '', link: [], meta: [] };

exports.default = Page;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterConfig = __webpack_require__(11);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import SideBar from '../components/SideBar';
// const App = ({ children }) => (<div>{children}</div>);

var App = function App(_ref) {
  var route = _ref.route;
  return _jsx('div', {
    className: 'container'
  }, void 0, (0, _reactRouterConfig.renderRoutes)(route.routes));
};

exports.default = App;

/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = exports.meta = exports.title = undefined;

var _favicon = __webpack_require__(33);

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metaAssets = function metaAssets() {
  return [{ charset: 'utf-8' },
  // Meta descriptions are commonly used on search engine result pages to display preview snippets for a given page.
  { name: 'description', content: 'Free-code-camp projects' },
  // Setting IE=edge tells Internet Explorer to use the latest engine to render the page and execute Javascript
  { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
  // Using the viewport tag allows you to control the width and scaling of the browser's viewport:
  // - include width=device-width to match the screen's width in device-independent pixels - include initial-scale=1 to establish 1:1 relationship between css pixels and device-independent pixels - ensure your page is accessible by not disabling user scaling.
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  // Disable tap highlight on IE
  { name: 'msapplication-tap-highlight', content: 'no' },
  // Add to homescreen for Chrome on Android
  { name: 'mobile-web-app-capable', content: 'yes' },
  // Add to homescreen for Safari on IOS
  { name: 'apple-mobile-web-app-capable', content: 'yes' }, { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }, { name: 'apple-mobile-web-app-title', content: 'Marc' }];
}; /* Based on the template in Web Starter Kit :
   https://github.com/google/web-starter-kit/blob/master/app/index.html
   */
// import chromeFavicon from '../images/chrome-ninja192-precomposed.png';
// import appleFavicon from '../images/apple-ninja152-precomposed.png';
// import msFavicon from '../images/ms-ninja144-precomposed.png';


var linkAssets = function linkAssets() {
  var links = [{ rel: 'icon', href: _favicon2.default }];
  return links;
};

var title = exports.title = 'Marc\'s projects';
var meta = exports.meta = metaAssets();
var link = exports.link = linkAssets();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-favicon.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('h2', {}, void 0, 'About');

var About = function About() {
  return _ref;
};

exports.default = About;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable */

/* import calculator from 'file-loader!../images/calculator.png';
import localWeather from 'file-loader!../images/local-weather.png';
import tribute from 'file-loader!../images/tribute.png';
import pomodoro from 'file-loader!../images/pomodoro.png';
import quote from 'file-loader!../images/quote.png';
import simon from 'file-loader!../images/simon.png';
import tictacttoe from 'file-loader!../images/tic-tac-toe.png';
import twitch from 'file-loader!../images/twitch.png';
import wikipedia from 'file-loader!../images/wikipedia.png'; */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Preview = __webpack_require__(36);

var _Preview2 = _interopRequireDefault(_Preview);

var _appUrls = __webpack_require__(15);

var _appUrls2 = _interopRequireDefault(_appUrls);

var _ = __webpack_require__(39);

var _2 = _interopRequireDefault(_);

var _calculator = __webpack_require__(40);

var _calculator2 = _interopRequireDefault(_calculator);

var _localWeather = __webpack_require__(41);

var _localWeather2 = _interopRequireDefault(_localWeather);

var _tribute = __webpack_require__(42);

var _tribute2 = _interopRequireDefault(_tribute);

var _pomodoro = __webpack_require__(43);

var _pomodoro2 = _interopRequireDefault(_pomodoro);

var _quote = __webpack_require__(44);

var _quote2 = _interopRequireDefault(_quote);

var _simon = __webpack_require__(45);

var _simon2 = _interopRequireDefault(_simon);

var _ticTacToe = __webpack_require__(46);

var _ticTacToe2 = _interopRequireDefault(_ticTacToe);

var _twitch = __webpack_require__(47);

var _twitch2 = _interopRequireDefault(_twitch);

var _wikipedia = __webpack_require__(48);

var _wikipedia2 = _interopRequireDefault(_wikipedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Gallary = function Gallary() {
  return _jsx('div', {
    className: 'preview'
  }, void 0, _jsx(_Preview2.default, {
    title: _appUrls2.default.calculator.title,
    url: _appUrls2.default.calculator.url,
    challenge: _appUrls2.default.calculator.challenge,
    media: _calculator2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.localWeather.title,
    url: _appUrls2.default.localWeather.url,
    challenge: _appUrls2.default.localWeather.challenge,
    media: _localWeather2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.pomodoro.title,
    url: _appUrls2.default.pomodoro.url,
    challenge: _appUrls2.default.pomodoro.challenge,
    media: _pomodoro2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.quoteMachine.title,
    url: _appUrls2.default.quoteMachine.url,
    challenge: _appUrls2.default.quoteMachine.challenge,
    media: _quote2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.simon.title,
    url: _appUrls2.default.simon.url,
    challenge: _appUrls2.default.simon.challenge,
    media: _simon2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.ticTacToe.title,
    url: _appUrls2.default.ticTacToe.url,
    challenge: _appUrls2.default.ticTacToe.challenge,
    media: _ticTacToe2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.tribute.title,
    url: _appUrls2.default.tribute.url,
    challenge: _appUrls2.default.tribute.challenge,
    media: _tribute2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.twitch.title,
    url: _appUrls2.default.twitch.url,
    challenge: _appUrls2.default.twitch.challenge,
    media: _twitch2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.wikipediaViewer.title,
    url: _appUrls2.default.wikipediaViewer.url,
    challenge: _appUrls2.default.wikipediaViewer.challenge,
    media: _wikipedia2.default
  }), '  ', _jsx(_Preview2.default, {
    title: _appUrls2.default.barChart.title,
    url: _appUrls2.default.barChart.url,
    challenge: _appUrls2.default.barChart.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.dataGlobe.title,
    url: _appUrls2.default.dataGlobe.url,
    challenge: _appUrls2.default.dataGlobe.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.forceDirected.title,
    url: _appUrls2.default.forceDirected.url,
    challenge: _appUrls2.default.forceDirected.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.heatMap.title,
    url: _appUrls2.default.heatMap.url,
    challenge: _appUrls2.default.heatMap.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.scatterplotGraph.title,
    url: _appUrls2.default.scatterplotGraph.url,
    challenge: _appUrls2.default.scatterplotGraph.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.dungeonCrawler.title,
    url: _appUrls2.default.dungeonCrawler.url,
    challenge: _appUrls2.default.dungeonCrawler.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.gameOfLife.title,
    url: _appUrls2.default.gameOfLife.url,
    challenge: _appUrls2.default.gameOfLife.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.leaderboard.title,
    url: _appUrls2.default.leaderboard.url,
    challenge: _appUrls2.default.leaderboard.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.markdownPreviewer.title,
    url: _appUrls2.default.markdownPreviewer.url,
    challenge: _appUrls2.default.markdownPreviewer.challenge,
    media: _2.default
  }), _jsx(_Preview2.default, {
    title: _appUrls2.default.recipeBox.title,
    url: _appUrls2.default.recipeBox.url,
    challenge: _appUrls2.default.recipeBox.challenge,
    media: _2.default
  }));
};

exports.default = Gallary;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(37);

var _propTypes = __webpack_require__(4);

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _preview = __webpack_require__(38);

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = _bind2.default.bind(_preview2.default);

var Preview = function Preview(_ref) {
  var title = _ref.title,
      challenge = _ref.challenge,
      url = _ref.url,
      media = _ref.media;
  return _jsx('div', {
    className: cx('card')
  }, void 0, _jsx('div', {
    className: cx('horizontal-block')
  }, void 0, _jsx('section', {
    className: cx('primary')
  }, void 0, _jsx('h1', {
    className: cx('title')
  }, void 0, title)), _jsx('img', {
    className: cx('media-item'),
    src: media,
    alt: ''
  })), _jsx('div', {
    className: cx('actions')
  }, void 0, _jsx(_reactRouterDom.Link, {
    className: cx('action'),
    to: url
  }, void 0, 'View'), _jsx('a', {
    className: cx('action'),
    href: challenge
  }, void 0, 'About')));
};

exports.default = Preview;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	"container": "preview__container___1VsL1",
	"card": "preview__card___33VYj " + __webpack_require__(1)["mdc-card"] + " preview__container___1VsL1",
	"horizontal-block": "preview__horizontal-block___PrDkA " + __webpack_require__(1)["mdc-card__horizontal-block"] + "",
	"primary": "preview__primary___1TGKq " + __webpack_require__(1)["mdc-card__primary"] + "",
	"title": "preview__title___15Qr- " + __webpack_require__(1)["mdc-card__title"] + " " + __webpack_require__(1)["mdc-card__title--large"] + "",
	"subtitle": "preview__subtitle___1WgDR " + __webpack_require__(1)["mdc-card__subtitle"] + "",
	"media-item": "preview__media-item___1gR1E " + __webpack_require__(1)["mdc-card__media-item"] + "",
	"actions": "preview__actions___kFUX9 " + __webpack_require__(1)["mdc-card__actions"] + "",
	"action": "preview__action___278GE " + __webpack_require__(14)["mdc-button"] + " " + __webpack_require__(14)["mdc-button--compact"] + " " + __webpack_require__(1)["mdc-card__action"] + ""
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-4-3.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-calculator.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-local-weather.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-tribute.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-pomodoro.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-quote.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-simon.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-tic-tac-toe.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-twitch.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-wikipedia.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HodorImg = __webpack_require__(52);

var _ref = _jsx('div', {
  className: 'tribute-page'
}, void 0, _jsx('h1', {
  className: 'tribute-page__heading'
}, void 0, 'Hodor'), _jsx('div', {
  className: 'tribute-page__content'
}, void 0, _jsx('img', {
  className: 'tribute-page__image',
  src: HodorImg,
  role: 'presentation',
  alt: 'Hodor'
}), _jsx('div', {
  className: 'tribute__caption'
}, void 0, _jsx('h3', {}, void 0, 'Valar Morghulis'), _jsx('a', {
  href: 'http://gameofthrones.wikia.com/wiki/Hodor',
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'tribute__link'
}, void 0, 'Game of Thrones'))));

var TributePage = function TributePage() {
  return _ref;
};

exports.default = TributePage;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(51);

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {
	"tribute-page": "_tribute-page__tribute-page___3LaeR",
	"tribute-page__heading": "_tribute-page__tribute-page__heading___duhrt",
	"tribute-page__content": "_tribute-page__tribute-page__content___1v_19",
	"tribute-page__image": "_tribute-page__tribute-page__image___2QKsr",
	"tribute-page__caption": "_tribute-page__tribute-page__caption___lRDsr"
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/projects/tribute-page/src/images/-Season_6_hodor_main.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(54);

var _store2 = _interopRequireDefault(_store);

var _CalculatorButtons = __webpack_require__(56);

var _CalculatorButtons2 = _interopRequireDefault(_CalculatorButtons);

var _Display = __webpack_require__(58);

var _Display2 = _interopRequireDefault(_Display);

var _styles = __webpack_require__(59);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_Display2.default, {
  classnames: _styles2.default
});

var _ref2 = _jsx(_CalculatorButtons2.default, {
  classnames: _styles2.default
});

var Calculator = function (_Component) {
  _inherits(Calculator, _Component);

  function Calculator() {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this));

    _this.store = _store2.default;
    return _this;
  }

  _createClass(Calculator, [{
    key: 'render',
    value: function render() {
      return _jsx(_reactRedux.Provider, {
        store: this.store
      }, void 0, _jsx('div', {
        className: (0, _styles2.default)('calculator')
      }, void 0, _ref, _ref2));
    }
  }]);

  return Calculator;
}(_react.Component);

exports.default = Calculator;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _reduxThunk = __webpack_require__(17);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(55);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = typeof window !== 'undefined' && "development" !== 'production' ? (0, _redux.createStore)(_reducer2.default, (0, _redux.compose)(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), (0, _redux.applyMiddleware)(_reduxThunk2.default)) : (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(8);

var DEFAULT_STATE = {
  display: '',
  answer: null,
  error: '',
  errorId: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SET_DISPLAY:
      return _extends({}, state, { display: action.payload });
    case _actions.SET_ANSWER:
      return _extends({}, state, {
        display: action.payload,
        answer: action.payload
      });
    case _actions.CALC_ERROR:
      return _extends({}, state, {
        error: action.payload.error,
        errorId: action.payload.errorId
      });
    default:
      return state;
  }
}

exports.default = reducer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _Button = __webpack_require__(57);

var _Button2 = _interopRequireDefault(_Button);

var _actions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = function (_Component) {
  _inherits(Buttons, _Component);

  function Buttons(props) {
    _classCallCheck(this, Buttons);

    var _this = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Buttons, [{
    key: 'handleClick',
    value: function handleClick(event) {
      return this.props.onUserInput(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var classnames = this.props.classnames;

      return _jsx('table', {
        className: classnames('buttons')
      }, void 0, _jsx('tbody', {}, void 0, _jsx('tr', {}, void 0, _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 'clear',
        className: classnames('ac'),
        onClick: this.handleClick
      }, void 0, 'AC')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 'del',
        className: classnames('ce'),
        onClick: this.handleClick
      }, void 0, 'CE')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: '%',
        className: classnames('mod'),
        onClick: this.handleClick
      }, void 0, 'Mod')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: '/',
        className: classnames('divide'),
        onClick: this.handleClick
      }, void 0, '\xF7'))), _jsx('tr', {}, void 0, _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 7,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '9')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 8,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '8')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 9,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '7')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: '*',
        className: classnames('times'),
        onClick: this.handleClick
      }, void 0, '\xD7'))), _jsx('tr', {}, void 0, _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 4,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '6')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 5,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '5')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 6,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '4')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: '-',
        className: classnames('minus'),
        onClick: this.handleClick
      }, void 0, '\u2212'))), _jsx('tr', {}, void 0, _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 3,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '3')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 2,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '2')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 1,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '1')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: '+',
        className: classnames('plus'),
        onClick: this.handleClick
      }, void 0, '+'))), _jsx('tr', {}, void 0, _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: '.',
        className: classnames('point'),
        onClick: this.handleClick
      }, void 0, '.')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 0,
        className: classnames('number'),
        onClick: this.handleClick
      }, void 0, '0')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: 'ans',
        className: classnames('ans'),
        onClick: this.handleClick
      }, void 0, 'Ans')), _jsx('td', {
        className: classnames('cell')
      }, void 0, _jsx(_Button2.default, {
        value: '=',
        className: classnames('equals'),
        onClick: this.handleClick
      }, void 0, '=')))));
    }
  }]);

  return Buttons;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onUserInput: function onUserInput(val) {
      return dispatch((0, _actions.handleUserInput)(val));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Buttons);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'button',
    _extends({ tabIndex: '0', type: 'button' }, props),
    children
  );
};

exports.default = Button;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = function (_Component) {
  _inherits(Display, _Component);

  function Display(props) {
    _classCallCheck(this, Display);

    var _this = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  _createClass(Display, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (!isNaN(event.key) || /[0-9+-/.*%]/.test(event.key)) {
        // return these values early
        return this.props.onKey(event.key);
        // augment the follwoing keyCodes
      } else if (+event.keyCode === 13) {
        return this.props.onKey('=');
      } else if (+event.keyCode === 8) {
        return this.props.onKey('del');
      } else if (+event.keyCode === 46) {
        return this.props.onKey('clear');
      } else if (+event.keyCode === 32) {
        // space bar
        return this.props.onKey('ans');
      }
      return undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: this.props.classnames('display')
      }, void 0, _jsx('input', {
        className: this.props.classnames('screen'),
        type: 'text',
        readOnly: 'true',
        value: this.props.display
      }));
    }
  }]);

  return Display;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    display: state.display
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onKey: function onKey(str) {
      return dispatch((0, _actions.handleUserInput)(str));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Display);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bind = __webpack_require__(13);

var _bind2 = _interopRequireDefault(_bind);

var _calculator = __webpack_require__(60);

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _bind2.default.bind(_calculator2.default);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {
	"calculator": "_calculator__calculator___DelFn",
	"display": "_calculator__display___1i72r",
	"screen": "_calculator__screen___21a_v",
	"buttons": "_calculator__buttons___2G9Pr",
	"cell": "_calculator__cell___286fs",
	"ac": "_calculator__ac___3FQVh",
	"ce": "_calculator__ce___2-Vh9",
	"mod": "_calculator__mod___30nh6",
	"divide": "_calculator__divide___bx-_-",
	"times": "_calculator__times___1I4xL",
	"minus": "_calculator__minus___uDxp6",
	"plus": "_calculator__plus___C2FvP",
	"number": "_calculator__number___WSbEo",
	"equals": "_calculator__equals___zLzw9",
	"point": "_calculator__point___28X93",
	"ans": "_calculator__ans___3mtZY"
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(62);

var _store2 = _interopRequireDefault(_store);

var _Menu = __webpack_require__(66);

var _Menu2 = _interopRequireDefault(_Menu);

var _Display = __webpack_require__(76);

var _Display2 = _interopRequireDefault(_Display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Recipes from './src/components/Recipes/Main';


var _ref = _jsx('div', {
  className: 'recipe-box'
}, void 0, _jsx(_Menu2.default, {}), _jsx(_Display2.default, {}));

var RecipeBox = function (_Component) {
  _inherits(RecipeBox, _Component);

  function RecipeBox(props) {
    _classCallCheck(this, RecipeBox);

    var _this = _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).call(this, props));

    _this.store = _store2.default;
    return _this;
  }

  _createClass(RecipeBox, [{
    key: 'render',
    value: function render() {
      return _jsx(_reactRedux.Provider, {
        store: this.store
      }, void 0, _ref);
    }
  }]);

  return RecipeBox;
}(_react.Component);

exports.default = RecipeBox;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _reduxPersist = __webpack_require__(63);

var _reduxThunk = __webpack_require__(17);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(64);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = typeof window !== 'undefined' && "development" !== 'production' ? (0, _redux.compose)(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), (0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _reduxPersist.autoRehydrate)())(_redux.createStore)(_reducer2.default) : (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), (0, _reduxPersist.autoRehydrate)())(_redux.createStore)(_reducer2.default);

(0, _reduxPersist.persistStore)(store, {
  blacklist: ['edit'],
  keyPrefix: '_recipes'
});

exports.default = store;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(65);

var _actions = __webpack_require__(6);

var DEFAULT_STATE = {
  active: -1,
  recipes: [],
  edit: false,
  menu: true
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case _constants.REHYDRATE:
      return _extends({}, state, payload);
    case _actions.RECIPE_VIEW:
      return _extends({}, state, { active: payload });
    case _actions.RECIPE_ADD:
      {
        if (state.active === -1) {
          /* adding a fresh one */
          var _recipes = [].concat(payload, state.recipes);
          return _extends({}, state, { recipes: _recipes, edit: false, active: 0 });
        }
        /* editing */
        var recipes = state.recipes.slice();
        recipes.splice(state.active, 1, payload.recipe);
        return _extends({}, state, { recipes: recipes, edit: false });
      }
    case _actions.ADD_NEW:
      return _extends({}, state, {
        active: -1,
        edit: true,
        menu: false
      });
    case _actions.TOGGLE_MENU:
      return _extends({}, state, {
        menu: !state.menu
      });
    case _actions.RECIPE_EDIT:
      return _extends({}, state, {
        edit: payload !== undefined ? payload : !state.edit
      });
    case _actions.RECIPE_DELETE:
      {
        var _recipes2 = state.recipes.slice();
        _recipes2.splice(payload, 1);
        return _extends({}, state, { recipes: _recipes2 });
      }
    case _actions.ACKNOWLEDGE_COOKIES:
      return _extends({}, state, {
        cookies: true
      });
    default:
      return state;
  }
}

exports.default = reducer;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/constants");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _classnames = __webpack_require__(67);

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(6);

var _Buttons = __webpack_require__(18);

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isActive: state.menu,
    recipes: state.recipes,
    recipe: state.active
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggleMenu: function onToggleMenu(event) {
      event.preventDefault();
      dispatch((0, _actions.toggleMenu)());
      return false;
    },
    onAddNew: function onAddNew(event) {
      event.preventDefault();
      dispatch((0, _actions.addNew)());
      return false;
    },
    onViewRecipe: function onViewRecipe(n) {
      return dispatch((0, _actions.recipeView)(n));
    }
  };
};

var _ref2 = _jsx('i', {
  className: 'material-icons'
}, void 0, 'playlist_add');

var Menu = function Menu(_ref) {
  var isActive = _ref.isActive,
      onToggleMenu = _ref.onToggleMenu,
      onAddNew = _ref.onAddNew,
      onViewRecipe = _ref.onViewRecipe,
      recipes = _ref.recipes,
      recipe = _ref.recipe;

  var mo = isActive ? 'menu--open' : 'menu--closed';
  return _jsx('nav', {
    className: (0, _classnames2.default)('menu', mo)
  }, void 0, _jsx(_Buttons2.default, {
    tabIndex: '0',
    className: 'material-icons menu__control',
    onClick: onToggleMenu
  }, void 0, isActive ? 'close' : 'menu'), !isActive ? false : _jsx('ul', {
    className: 'menu__content'
  }, void 0, _jsx('li', {
    className: 'menu__item'
  }, void 0, _jsx('a', {
    role: 'button',
    tabIndex: '0',
    onClick: onAddNew
  }, void 0, _ref2, 'New Recipe')), recipes.map(function (d, i) {
    var handleClick = function handleClick(event) {
      event.preventDefault();
      onViewRecipe(i);
      return false;
    };
    var k = d.name + ':' + i;
    var cn = (0, _classnames2.default)('menu__item', { 'menu__item--active': i === recipe });

    return _jsx('li', {
      className: cn
    }, k, _jsx('a', {
      role: 'button',
      tabIndex: '0',
      onClick: handleClick
    }, void 0, d.name));
  })));
};

var func = _react.PropTypes.func,
    bool = _react.PropTypes.bool,
    array = _react.PropTypes.array,
    number = _react.PropTypes.number;


Menu.defaultProps = { className: 'menu' };

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Menu);

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = function Add(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    'playlist_add'
  );
};

Add.defaultProps = {
  title: 'Add',
  className: 'material-icons'
};

exports.default = Add;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cancel = function Cancel(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    'cancel'
  );
};

Cancel.defaultProps = {
  title: 'Cancel',
  className: 'material-icons'
};

exports.default = Cancel;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function Close(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    'close'
  );
};

Close.defaultProps = { className: 'material-icons' };

exports.default = Close;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    'check'
  );
};

Confirm.defaultProps = {
  title: 'Confirm',
  className: 'material-icons'
};

exports.default = Confirm;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Delete = function Delete(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    'delete_forever'
  );
};

Delete.defaultProps = {
  className: 'material-icons',
  title: 'Delete'
};

exports.default = Delete;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Edit = function Edit(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    'mode_edit'
  );
};

Edit.defaultProps = {
  className: 'material-icons',
  title: 'Edit'
};

exports.default = Edit;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {
  return _react2.default.createElement(
    _Button2.default,
    props,
    'menu'
  );
};

Menu.defaultProps = {
  className: 'material-icons',
  title: 'Menu'
};

exports.default = Menu;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Done = function Done(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _Button2.default,
    props,
    children
  );
};

Done.defaultProps = {
  children: 'done', className: 'material-icons'
};

exports.default = Done;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(6);

var _WelcomeMessage = __webpack_require__(77);

var _WelcomeMessage2 = _interopRequireDefault(_WelcomeMessage);

var _Recipe = __webpack_require__(78);

var _Recipe2 = _interopRequireDefault(_Recipe);

var _Recipe3 = __webpack_require__(79);

var _Recipe4 = _interopRequireDefault(_Recipe3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    active: state.active,
    edit: state.edit,
    recipes: state.recipes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onDelete: function onDelete(n) {
      return dispatch((0, _actions.recipeDelete)(n));
    },
    onEdit: function onEdit() {
      return dispatch((0, _actions.recipeEdit)());
    },
    onSetView: function onSetView(n) {
      return dispatch((0, _actions.recipeView)(n));
    }
  };
};

var _ref = _jsx(_WelcomeMessage2.default, {});

var Display = function (_Component) {
  _inherits(Display, _Component);

  function Display(props) {
    _classCallCheck(this, Display);

    var _this = _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));

    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  _createClass(Display, [{
    key: 'handleEdit',
    value: function handleEdit() {
      this.props.onEdit(!this.props.edit);
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete() {
      this.props.onDelete(this.props.active);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          edit = _props.edit,
          recipes = _props.recipes,
          onSetView = _props.onSetView;

      if (!edit && (active === -1 || active >= recipes.length)) {
        return _ref;
      } else if (edit) {
        return _react2.default.createElement(_Recipe4.default, recipes[active]);
      }
      return _react2.default.createElement(_Recipe2.default, _extends({}, recipes[active], {
        onEdit: this.handleEdit,
        onClose: function onClose() {
          return onSetView(-1);
        },
        onDelete: this.handleDelete
      }));
    }
  }]);

  return Display;
}(_react.Component);

var number = _react.PropTypes.number,
    bool = _react.PropTypes.bool,
    array = _react.PropTypes.array,
    func = _react.PropTypes.func;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Display);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint max-len: off */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('header', {}, void 0, _jsx('h1', {}, void 0, 'Weclome'));

var _ref2 = _jsx('p', {}, void 0, 'This appliction stores your recipes in your browsers storage, these will be deleted along with any cookies.');

var _ref3 = _jsx('footer', {}, void 0, 'To add and view recipes click the ', _jsx('i', {
  className: 'material-icons'
}, void 0, 'menu'), ' button to diplay a side menu');

var WelcomeMessage = function WelcomeMessage(props) {
  return _react2.default.createElement(
    'article',
    props,
    _ref,
    _ref2,
    _ref3
  );
};

WelcomeMessage.defaultProps = {
  className: 'content'
};

exports.default = WelcomeMessage;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-array-index-key: off */


var _ref = _jsx("i", {}, void 0, "Ingredients");

var _ref2 = _jsx("i", {}, void 0, "Preperation Notes");

var Recipe = function (_Component) {
  _inherits(Recipe, _Component);

  function Recipe(props) {
    _classCallCheck(this, Recipe);

    var _this = _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this, props));

    _this.state = {
      options: false,
      enlarge: false
    };
    _this.handleOptions = _this.handleOptions.bind(_this);
    _this.handleImage = _this.handleImage.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  _createClass(Recipe, [{
    key: "handleEdit",
    value: function handleEdit(event) {
      event.preventDefault();
      this.props.onEdit();
      return false;
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(event) {
      event.preventDefault();
      this.props.onDelete();
      return false;
    }
  }, {
    key: "handleImage",
    value: function handleImage(event) {
      event.preventDefault();
      this.setState({ enlarge: !this.state.enlarge });
      return false;
    }
  }, {
    key: "handleOptions",
    value: function handleOptions(event) {
      event.preventDefault();
      this.setState({ options: !this.state.options });
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          name = _props.name,
          ingredients = _props.ingredients,
          picture = _props.picture,
          notes = _props.notes,
          onClose = _props.onClose;
      var options = this.state.options;

      return _jsx("article", {
        className: "recipe"
      }, void 0, _jsx("a", {
        role: "button",
        className: "material-icons close",
        tabIndex: "0",
        onClick: onClose,
        title: "close recipe"
      }, void 0, "close"), _jsx("header", {
        className: "recipe__header"
      }, void 0, _jsx("h1", {}, void 0, name, picture ? _jsx("img", {
        className: "recipe__image",
        alt: name,
        src: picture
      }) : false)), _jsx("section", {
        className: "recipe__ingredients"
      }, void 0, _ref, _jsx("ul", {}, void 0, ingredients.map(function (d, i) {
        return _jsx("li", {}, i, d);
      }))), notes.length > 0 ? _jsx("section", {
        className: "recipe__notes"
      }, void 0, _ref2, _jsx("p", {}, void 0, notes)) : false, _jsx("footer", {
        className: "recipe__options"
      }, void 0, !options ? false : _jsx("span", {}, void 0, _jsx("a", {
        role: "button",
        tabIndex: "0",
        onClick: this.handleEdit,
        className: "material-icons",
        title: "edit recipe"
      }, void 0, "mode_edit"), _jsx("a", {
        role: "button",
        tabIndex: "0",
        onClick: this.handleDelete,
        className: "material-icons",
        title: "remove recipe"
      }, void 0, "delete_forever")), _jsx("a", {
        role: "button",
        tabIndex: "0",
        onClick: this.handleOptions,
        className: "material-icons",
        title: options ? 'close options' : 'open options'
      }, void 0, options ? 'close' : 'settings_applications')));
    }
  }]);

  return Recipe;
}(_react.Component);

var func = _react.PropTypes.func,
    string = _react.PropTypes.string,
    arrayOf = _react.PropTypes.arrayOf;


Recipe.defaultProps = { notes: '', picture: '' };

exports.default = Recipe;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _Buttons = __webpack_require__(18);

var _Buttons2 = _interopRequireDefault(_Buttons);

var _actions = __webpack_require__(6);

var _Ingredient = __webpack_require__(80);

var _Ingredient2 = _interopRequireDefault(_Ingredient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */
/* eslint react/self-closing-comp: off */


var mapStateToProps = function mapStateToProps(state) {
  return {
    active: state.active
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onCancel: function onCancel() {
      return dispatch((0, _actions.recipeEdit)(false));
    },
    onSubmit: function onSubmit(obj) {
      return dispatch((0, _actions.recipeAdd)(obj));
    }
  };
};

var _ref = _jsx('label', {
  htmlFor: 'name'
}, void 0, 'Recipe');

var _ref2 = _jsx('label', {
  htmlFor: 'notes'
}, void 0, 'Preperation Notes');

var _ref3 = _jsx(_Buttons2.default, {
  type: 'submit'
}, void 0, 'Submit');

var RecipeForm = function (_Component) {
  _inherits(RecipeForm, _Component);

  function RecipeForm(props) {
    _classCallCheck(this, RecipeForm);

    var _this = _possibleConstructorReturn(this, (RecipeForm.__proto__ || Object.getPrototypeOf(RecipeForm)).call(this, props));

    var name = props.name,
        ingredients = props.ingredients,
        notes = props.notes,
        picture = props.picture;

    _this.state = { name: name, ingredients: ingredients, notes: notes, picture: picture, editing: -1, edit: '' };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSumbit = _this.handleSumbit.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.handleImage = _this.handleImage.bind(_this);
    _this.deleteImage = _this.deleteImage.bind(_this);
    _this.drawImage = _this.drawImage.bind(_this);
    return _this;
  }

  _createClass(RecipeForm, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onCancel(false);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleSumbit',
    value: function handleSumbit(event) {
      event.preventDefault();
      var _state = this.state,
          name = _state.name,
          notes = _state.notes,
          ingredients = _state.ingredients,
          picture = _state.picture;

      var recipe = { name: name, notes: notes, ingredients: ingredients, picture: picture };
      if (this.state.editing !== -1 && this.state.edit.length > 0) {
        recipe.ingredients[this.state.editing] = this.state.edit;
      }
      this.props.onSubmit(recipe, this.props.active);
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      var _props = this.props,
          name = _props.name,
          ingredients = _props.ingredients,
          notes = _props.notes,
          picture = _props.picture;

      this.setState({ name: name, ingredients: ingredients, notes: notes, picture: picture });
    }
  }, {
    key: 'handleImage',
    value: function handleImage(event) {
      var _this2 = this;

      event.preventDefault();
      var f = this.file.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        _this2.setState({ picture: reader.result }, _this2.drawImage);
      };
      reader.readAsDataURL(f);
    }
  }, {
    key: 'deleteImage',
    value: function deleteImage() {
      this.file.value = '';
      this.file.type = '';
      this.file.type = 'file';
      if (this.canvas) {
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.width = 0;
        this.canvas.height = 0;
      }
      this.setState({ picture: '' });
    }
  }, {
    key: 'drawImage',
    value: function drawImage() {
      var mH = 400;
      var mW = 300;
      var img = new Image();
      img.src = this.state.picture;
      var w = img.width;
      var h = img.height;
      if (w > h && w > mW) {
        h *= mW / w;
        w = mW;
      } else if (h > mH) {
        w *= mH / h;
        h = mH;
      }
      this.canvas.width = w;
      this.canvas.height = h;
      var ctx = this.canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      this.setState({ picture: this.canvas.toDataURL() });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          name = _state2.name,
          ingredients = _state2.ingredients,
          notes = _state2.notes,
          picture = _state2.picture;
      var _props2 = this.props,
          className = _props2.className,
          onCancel = _props2.onCancel;

      return _jsx('form', {
        onSubmit: this.handleSumbit,
        className: className
      }, void 0, _jsx('header', {}, void 0, _jsx('h1', {}, void 0, 'Recipe Editor', _jsx('a', {
        role: 'button',
        tabIndex: '0',
        className: 'material-icons close',
        onClick: onCancel,
        title: 'Exit'
      }, void 0, 'close'))), _jsx('section', {}, void 0, _ref, _jsx('input', {
        name: 'name',
        type: 'text',
        placeholder: 'Title',
        value: name,
        onChange: this.handleChange,
        required: true
      })), _jsx('section', {
        className: 'image'
      }, void 0, _jsx('label', {
        htmlFor: 'picture'
      }, void 0, 'Image', picture && _jsx('a', {
        role: 'button',
        tabIndex: '0',
        className: 'material-icons delete',
        title: 'remove picture',
        onClick: this.deleteImage
      }, void 0, 'close')), _react2.default.createElement('input', {
        name: 'picture',
        type: 'file',
        accept: 'image/*',
        onChange: this.handleImage,
        ref: function ref(file) {
          _this3.file = file;
        },
        disabled: picture
      }), _jsx('section', {
        className: 'preview'
      }, void 0, picture.length > 0 && this.state.picture === this.props.picture ? _jsx('img', {
        alt: 'preview',
        src: picture
      }) : _react2.default.createElement('canvas', { width: '0', height: '0', ref: function ref(canvas) {
          _this3.canvas = canvas;
        } }))), _jsx('section', {
        className: 'ingredients'
      }, void 0, _jsx('legend', {}, void 0, 'Ingredients ', _jsx(_Buttons.Add, {
        title: 'Add Ingredient',
        onClick: function onClick() {
          return _this3.setState({
            edit: '',
            editing: ingredients.length,
            ingredients: ingredients.filter(function (ing) {
              return ing.length > 0;
            }).concat('')
          });
        }
      })), _jsx('ul', {
        className: 'ingredients__list'
      }, void 0, ingredients.map(function (d, i) {
        var k = i;
        var e = _this3.state.editing;
        var v = _this3.state.edit;
        return _jsx(_Ingredient2.default, {
          value: i === e ? v : d,
          editing: e === i,
          onEdit: function onEdit() {
            return _this3.setState({
              editing: i,
              edit: d
            });
          },
          onDelete: function onDelete() {
            var arr = ingredients.slice();
            arr.splice(i, 1);
            _this3.setState({ ingredients: arr });
          },
          onSave: function onSave() {
            if (v.length > 0) {
              var _arr = ingredients.slice();
              _arr.splice(i, 1, v);
              return _this3.setState({
                ingredients: _arr,
                edit: '',
                editing: -1
              });
            }
            var arr = ingredients.filter(function (ing) {
              return ing.length > 0;
            });
            return _this3.setState({ ingredients: arr, edit: '', editing: -1 });
          },
          onCancel: function onCancel() {
            return _this3.setState({
              ingredients: ingredients.filter(function (ing) {
                return ing.length > 0;
              }),
              editing: -1,
              edit: ''
            });
          },
          onChange: function onChange(event) {
            return _this3.setState({ edit: event.target.value });
          }
        }, k);
      }))), _jsx('section', {}, void 0, _ref2, _jsx('textarea', {
        name: 'notes',
        value: notes,
        onChange: this.handleChange
      })), _ref3, _jsx(_Buttons2.default, {
        type: 'reset',
        onClick: this.handleReset
      }, void 0, 'Reset'));
    }
  }]);

  return RecipeForm;
}(_react.Component);

var string = _react.PropTypes.string,
    array = _react.PropTypes.array,
    func = _react.PropTypes.func,
    number = _react.PropTypes.number;


RecipeForm.defaultProps = {
  name: '',
  ingredients: [],
  notes: '',
  picture: '',
  className: 'recipe recipe__form'
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RecipeForm);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ref2 = _jsx('label', {
  htmlFor: 'ingredient'
}, void 0, 'Ingredient');

var Ingredient = function Ingredient(_ref) {
  var editing = _ref.editing,
      value = _ref.value,
      onCancel = _ref.onCancel,
      onSave = _ref.onSave,
      onDelete = _ref.onDelete,
      onEdit = _ref.onEdit,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ['editing', 'value', 'onCancel', 'onSave', 'onDelete', 'onEdit', 'onChange']);

  var handleKeyPress = function handleKeyPress(event) {
    switch (event.key) {
      case 'Escape':
        return onCancel();
      case 'Enter':
        return onSave();
      default:
        return undefined;
    }
  };
  if (editing) {
    return _react2.default.createElement(
      'li',
      props,
      _jsx('span', {
        className: 'controls'
      }, void 0, _jsx('a', {
        role: 'button',
        className: 'material-icons done',
        tabIndex: '0',
        onClick: onSave,
        title: 'save'
      }, void 0, 'check'), _jsx('a', {
        role: 'button',
        className: 'material-icons close',
        tabIndex: '0',
        onClick: onCancel,
        title: 'cancel'
      }, void 0, 'close')),
      _ref2,
      _jsx('input', {
        name: 'ingredient',
        type: 'text',
        value: value,
        onChange: onChange,
        onKeyPress: handleKeyPress,
        required: true
      })
    );
  }
  return _react2.default.createElement(
    'li',
    props,
    _jsx('span', {
      className: 'controls'
    }, void 0, _jsx('a', {
      role: 'button',
      className: 'material-icons edit',
      tabIndex: '0',
      onClick: onEdit,
      title: 'edit ingredient'
    }, void 0, 'mode_edit'), _jsx('a', {
      role: 'button',
      className: 'material-icons delete',
      tabIndex: '0',
      onClick: onDelete,
      title: 'remove ingredient'
    }, void 0, 'delete')),
    value
  );
};

var func = _react.PropTypes.func,
    bool = _react.PropTypes.bool,
    string = _react.PropTypes.string;


Ingredient.defaultProps = { value: '' };

exports.default = Ingredient;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(82);

var _reactRouter = __webpack_require__(83);

var _reactHelmet = __webpack_require__(12);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _staticAssets = __webpack_require__(84);

var _staticAssets2 = _interopRequireDefault(_staticAssets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApp = function createApp(props) {
  return (0, _server.renderToString)(_react2.default.createElement(_reactRouter.StaticRouter, props));
};

var buildPage = function buildPage(_ref) {
  var componentHTML = _ref.componentHTML,
      headAssets = _ref.headAssets;
  return '<!DOCTYPE html>\n  <html class="mdc-typography">\n    <head>\n      ' + headAssets.title.toString() + '    ' + headAssets.meta.toString() + '    ' + headAssets.link.toString() + '    ' + _staticAssets2.default.createStylesheets() + '\n    </head>\n  <body>\n    <div id="app">' + componentHTML + '</div>\n    ' + _staticAssets2.default.createAppScript() + '\n  </body>\n</html>';
};

exports.default = function (props) {
  var componentHTML = createApp(props);
  var headAssets = _reactHelmet2.default.renderStatic();
  return buildPage({ componentHTML: componentHTML, headAssets: headAssets });
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-undef: 0 */
var createStaticAssets =  false ? require('./prod') : __webpack_require__(85);

exports.default = createStaticAssets;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createAppScript() {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/app';

  return '<script type="text/javascript" charset="utf-8" src="' + src + '.js"></script>';
}

var createStylesheets = function createStylesheets() {
  return '';
};

exports.createAppScript = createAppScript;
exports.createStylesheets = createStylesheets;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * process.env.NODE_ENV - used to determine whether we generate a production or development bundle
 *
 * webpack --env.browser - used to determine whether to generate a browser or server bundle
 */
// const path = require('path');
var rules = __webpack_require__(89);
var externals = __webpack_require__(95);
var PATHS = __webpack_require__(5);
var plugins = __webpack_require__(97);
var resolve = __webpack_require__(99);
var entry = __webpack_require__(100);

// const SRV_ENTRY = path.resolve(PATHS.src.server, 'index.js');

module.exports = function () {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isProduction = "development" === 'production';
  var isBrowser = env.browser;
  console.log('Running webpack in ' + "development" + ' mode on ' + (isBrowser ? 'browser' : 'server'));

  // const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
  var node = { __dirname: true, __filename: true };

  var prodServerRender = {
    devtool: 'source-map',
    // context: PATHS.app,
    // entry: { server: SRV_ENTRY },
    entry: entry({ production: true, browser: false }),
    target: 'node',
    node: node,
    externals: externals,
    output: {
      path: PATHS.dist.server,
      filename: '[name].js',
      // publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: rules({ production: true, browser: false })
    },
    resolve: resolve,
    plugins: plugins({ production: true, browser: false })
  };

  var prodBrowserRender = {
    devtool: 'cheap-module-source-map',
    // context: PATHS.app,
    // entry: { app: ['./Client'] },
    entry: entry({ production: true, browser: true }),
    node: node,
    output: {
      path: PATHS.dist.public,
      filename: '[chunkhash].js',
      chunkFilename: '[name].[chunkhash:6].js' // for code splitting. will work without but useful to set
      // publicPath: PATHS.public
    },
    module: {
      rules: rules({ production: true, browser: true })
    },
    resolve: resolve,
    plugins: plugins({ production: true, browser: true })
  };

  var devBrowserRender = {
    devtool: 'inline-source-map',
    // context: PATHS.src.client,
    /* entry: {
      app: ['./client.jsx', hotMiddlewareScript],
    }, */
    entry: entry({ production: false, browser: true }),
    node: node,
    output: {
      path: PATHS.dist.public,
      filename: '[name].js'
      // publicPath: PATHS.public
    },
    module: {
      rules: rules({ production: false, browser: true })
    },
    resolve: resolve,
    plugins: plugins({ production: false, browser: true })
  };

  var devServerRender = {
    devtool: 'sourcemap',
    // context: PATHS.app,
    // entry: { server: SRV_ENTRY },
    entry: entry({ production: false, browser: false }),
    target: 'node',
    node: node,
    externals: externals,
    output: {
      path: PATHS.dist.server,
      filename: '[name].dev.js',
      // publicPath: PATHS.public,
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: rules({ production: false, browser: false })
    },
    resolve: resolve,
    plugins: plugins({ production: false, browser: false })
  };

  var prodConfig = isBrowser ? prodBrowserRender : prodServerRender;
  var devConfig = isBrowser ? devBrowserRender : devServerRender;
  var configuration = isProduction ? prodConfig : devConfig;

  return configuration;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var images = __webpack_require__(90);
var scripts = __webpack_require__(91);
var styles = __webpack_require__(92);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var js = scripts({ production: production, browser: browser });
  var css = styles({ production: production, browser: browser });
  // const imgs = images();
  var imgs = images({ browser: browser });
  return [].concat(js, css, imgs);
  // return [].concat(js, css);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 8192 : _ref$limit;

  var name = production ? '[hash].[ext]' : '[path]-[name].[ext]';
  return [{
    test: /\.(gif|svg|woff(2)?|ttf|eot)$/,
    loader: 'url-loader',
    options: { limit: limit, name: name, emitFile: browser }
  }, {
    test: /\.(png|jpg|jpeg)$/,
    loader: 'file-loader',
    options: { name: name, emitFile: browser }
  }];
};

/*
module.exports = ({ limit = 10000 } = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg|woff(2)?|ttf|eot)$/,
  loader: 'url-loader',
  options: { name: '[hash].[ext]', limit },
  include: PATHS.src.client,
});

module.exports = ({
  browser = false,
} = {}) => ({
  test: /\.(png|jpg|jpeg|gif|svg|woff(2)?|ttf|eot)$/,
  loader: 'file-loader',
  options: { emitFile: browser },
});
*/

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(5);

var createPresets = function createPresets(bool) {
  var presets = ['react', 'env', 'stage-0'];
  return bool ? ['react-hmre'].concat(presets) : presets.concat('react-optimize');
};

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var isHot = !production && browser;
  var presets = createPresets(isHot);
  var plugins = production ? [] : [];

  return [{ test: /\.jsx?$/, enforce: 'pre', exclude: PATHS.modules, loader: 'eslint-loader' }, { test: /\.jsx?$/, loader: 'babel-loader', options: { presets: presets, plugins: plugins }, exclude: PATHS.modules }];
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesCss = __webpack_require__(93);
var stylesScss = __webpack_require__(94);

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var css = stylesCss({ production: production, browser: browser });
  var scss = stylesScss({ production: production, browser: browser });
  return [css, scss];
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var ExtractTextPlugin = __webpack_require__(9);
var localIdentName = __webpack_require__(19);

var createLoaders = function createLoaders(browser) {
  return [{
    loader: browser ? 'css-loader' : 'css-loader/locals',
    options: {
      sourceMap: true,
      modules: true,
      localIdentName: localIdentName,
      importLoaders: 1
    }
  },
  /*{
    loader: 'postcss-loader',
    options: {
      indent: 'postcss',
      sourceMap: true,
      plugins: (loader) => [
        require('postcss-import')({ root: loader.resourcePath }),
        require('postcss-cssnext')(),
        // require('autoprefixer')(),
        require('cssnano')(),
        require('postcss-reporter')({
          clearReportedMessages: true,
        }),
      ],
    },
  },*/
  /* precss works prety well */
  {
    loader: 'postcss-loader',
    options: {
      indent: 'postcss',
      sourceMap: true,
      config: {
        ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} }
      }
    }
  }, 'resolve-url-loader'];
};

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var loaders = createLoaders(browser);
  var client = production ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders }) : [].concat({
    loader: 'style-loader',
    options: { hmr: production }
  }, loaders);
  // const client = ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders });
  // const server = ['style-loader', ...loaders];
  return { test: /\.css$/, use: browser ? client : loaders };
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var ExtractTextPlugin = __webpack_require__(9);
var PATHS = __webpack_require__(5);
var localIdentName = __webpack_require__(19);

var createLoader = function createLoader(_ref) {
  var production = _ref.production,
      browser = _ref.browser;
  return [{
    loader: browser ? 'css-loader' : 'css-loader/locals',
    options: {
      modules: true,
      sourceMap: true,
      importLoaders: 3,
      localIdentName: localIdentName
    }
  }, /* {
     loader: 'postcss-loader',
     options: {
      indent: 'postcss',
      sourceMap: true,
      plugins: (loader) => [
        require('postcss-import')({ root: loader.resourcePath }),
        require('postcss-cssnext')(),
        // require('autoprefixer')(),
        require('cssnano')(),
        require('postcss-reporter')({
          clearReportedMessages: true,
        }),
      ],
     },
     }, */
  {
    loader: 'postcss-loader',
    options: {
      indent: 'postcss',
      sourceMap: true, // production && browser,
      config: {
        ctx: { cssnext: {}, cssnano: {}, autoprefixer: {} }
      }
    }
  }, 'resolve-url-loader', {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: [PATHS.modules]
    }
  }];
};

module.exports = function () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$production = _ref2.production,
      production = _ref2$production === undefined ? false : _ref2$production,
      _ref2$browser = _ref2.browser,
      browser = _ref2$browser === undefined ? false : _ref2$browser;

  var loaders = createLoader({ production: production, browser: browser });
  var client = production ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders }) : [].concat({
    loader: 'style-loader',
    options: { hmr: production }
  }, loaders);
  // const client = ExtractTextPlugin.extract({ fallback: 'style-loader', use: loaders });
  // const server = ['style-loader', ...loaders];
  return { test: /\.scss$/, use: browser ? client : loaders };
  // return { test: /\.scss$/, use: browser ? client : loaders };
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nodeExternals = __webpack_require__(96);

module.exports = [nodeExternals()];

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(10),
    EnvironmentPlugin = _require.EnvironmentPlugin,
    DefinePlugin = _require.DefinePlugin,
    BannerPlugin = _require.BannerPlugin,
    HotModuleReplacementPlugin = _require.HotModuleReplacementPlugin,
    NoEmitOnErrorsPlugin = _require.NoEmitOnErrorsPlugin,
    UglifyJsPlugin = _require.optimize.UglifyJsPlugin;

var ExtractTextPlugin = __webpack_require__(9);
var ManifestPlugin = __webpack_require__(98);
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  var bannerOptions = { raw: true, banner: 'require("source-map-support").install();' };
  var compress = { warnings: false };

  /* Probally outbated */
  var compileTimeConstantForMinification = {
    __PRODUCTION__: JSON.stringify(production)
  };

  var defaultPlugins = [new EnvironmentPlugin('NODE_ENV'), new DefinePlugin(compileTimeConstantForMinification), new ExtractTextPlugin({
    filename: '[contenthash].css',
    allChunks: true,
    // disable: !production,
    disable: !browser,
    ignoreOrder: true
  })];
  if (!production && !browser) {
    return defaultPlugins.concat([new BannerPlugin(bannerOptions)]);
  }
  if (!production && browser) {
    return defaultPlugins.concat([new HotModuleReplacementPlugin(), new NoEmitOnErrorsPlugin()]);
  }
  if (production && !browser) {
    return defaultPlugins.concat([new BannerPlugin(bannerOptions), new UglifyJsPlugin({ compress: compress })]);
  }
  if (production && browser) {
    return defaultPlugins.concat([new UglifyJsPlugin({ compress: compress }), new ManifestPlugin({ fileName: 'manifest.json' })]);
  }
  return defaultPlugins;
};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("webpack-manifest-plugin");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(5);

module.exports = {
  modules: [PATHS.modules],
  extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(7);
var PATHS = __webpack_require__(5);

var SRV_ENTRY = path.resolve(PATHS.src.server, 'index.js');

var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

function server() {
  return { server: SRV_ENTRY };
}

var AppDir = path.resolve(PATHS.src.client, 'index.jsx');

function client() {
  var production = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var base = {
    app: [AppDir]
  };
  return production ? base : Object.keys(base).reduce(function (a, b) {
    a[b].push(hotMiddlewareScript);
    return a;
  }, base);
}
module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$production = _ref.production,
      production = _ref$production === undefined ? false : _ref$production,
      _ref$browser = _ref.browser,
      browser = _ref$browser === undefined ? false : _ref$browser;

  return browser ? client(production) : server();
};

/***/ })
/******/ ]);
//# sourceMappingURL=server.dev.js.map