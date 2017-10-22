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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"mdc-textfield": "mdc-textfield__mdc-textfield___lDyc6",
	"mdc-textfield__input": "mdc-textfield__mdc-textfield__input___WO11I",
	"mdc-textfield__input--theme-dark": "mdc-textfield__mdc-textfield__input--theme-dark___3krqX",
	"mdc-theme--dark": "mdc-textfield__mdc-theme--dark___jF1E2",
	"mdc-textfield__label": "mdc-textfield__mdc-textfield__label___2k7LF",
	"mdc-textfield--theme-dark": "mdc-textfield__mdc-textfield--theme-dark___24_sV",
	"mdc-textfield__label--float-above": "mdc-textfield__mdc-textfield__label--float-above___1e4zo",
	"mdc-textfield--box": "mdc-textfield__mdc-textfield--box___U6GO9",
	"mdc-ripple-upgraded": "mdc-textfield__mdc-ripple-upgraded___2VrHC",
	"mdc-ripple-upgraded--unbounded": "mdc-textfield__mdc-ripple-upgraded--unbounded___1iF4D",
	"mdc-ripple-upgraded--foreground-activation": "mdc-textfield__mdc-ripple-upgraded--foreground-activation___2vQtd",
	"mdc-ripple-upgraded--foreground-deactivation": "mdc-textfield__mdc-ripple-upgraded--foreground-deactivation___uggkP",
	"mdc-textfield--disabled": "mdc-textfield__mdc-textfield--disabled___3Xfvo",
	"mdc-textfield__bottom-line": "mdc-textfield__mdc-textfield__bottom-line___3oCkS",
	"mdc-textfield--focused": "mdc-textfield__mdc-textfield--focused___3w3GD",
	"mdc-textfield--invalid": "mdc-textfield__mdc-textfield--invalid___1pGrM",
	"mdc-textfield--dense": "mdc-textfield__mdc-textfield--dense___3AJWc",
	"mdc-textfield--upgraded": "mdc-textfield__mdc-textfield--upgraded___1Bk_g",
	"mdc-textfield--fullwidth": "mdc-textfield__mdc-textfield--fullwidth___HUb3q",
	"mdc-textfield--multiline": "mdc-textfield__mdc-textfield--multiline___2Et2C",
	"mdc-textfield-helptext": "mdc-textfield__mdc-textfield-helptext___TQ2fu",
	"mdc-textfield--fullwidth--theme-dark": "mdc-textfield__mdc-textfield--fullwidth--theme-dark___39sIg",
	"mdc-textfield-helptext--theme-dark": "mdc-textfield__mdc-textfield-helptext--theme-dark___3NAtg",
	"mdc-textfield-helptext--validation-msg": "mdc-textfield__mdc-textfield-helptext--validation-msg___1N9Ix",
	"mdc-textfield-helptext--persistent": "mdc-textfield__mdc-textfield-helptext--persistent___3cLzf",
	"mdc-form-field": "mdc-textfield__mdc-form-field___2_nSF",
	"mdc-ripple-fg-radius-in": "mdc-textfield__mdc-ripple-fg-radius-in___1ULXh",
	"mdc-ripple-fg-opacity-in": "mdc-textfield__mdc-ripple-fg-opacity-in___JAUhG",
	"mdc-ripple-fg-opacity-out": "mdc-textfield__mdc-ripple-fg-opacity-out___2SiDI"
};

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"mdc-grid-list": "mdc-grid-list__mdc-grid-list___33OZu",
	"mdc-grid-tile__primary": "mdc-grid-list__mdc-grid-tile__primary___1_xWW",
	"mdc-grid-tile": "mdc-grid-list__mdc-grid-tile___1l7H8",
	"mdc-grid-tile__secondary": "mdc-grid-list__mdc-grid-tile__secondary___3rVD7",
	"mdc-grid-list__tiles": "mdc-grid-list__mdc-grid-list__tiles___VesJM",
	"mdc-grid-list--tile-gutter-1": "mdc-grid-list__mdc-grid-list--tile-gutter-1___1TEpr",
	"mdc-grid-list--tile-aspect-16x9": "mdc-grid-list__mdc-grid-list--tile-aspect-16x9___3pQ0F",
	"mdc-grid-list--tile-aspect-3x2": "mdc-grid-list__mdc-grid-list--tile-aspect-3x2___3m5Z_",
	"mdc-grid-list--tile-aspect-2x3": "mdc-grid-list__mdc-grid-list--tile-aspect-2x3___2OGGR",
	"mdc-grid-list--tile-aspect-4x3": "mdc-grid-list__mdc-grid-list--tile-aspect-4x3___3I0-A",
	"mdc-grid-list--tile-aspect-3x4": "mdc-grid-list__mdc-grid-list--tile-aspect-3x4___ar3QO",
	"mdc-grid-list--twoline-caption": "mdc-grid-list__mdc-grid-list--twoline-caption___DSN1D",
	"mdc-grid-list--header-caption": "mdc-grid-list__mdc-grid-list--header-caption___MlXsw",
	"mdc-grid-list--with-icon-align-start": "mdc-grid-list__mdc-grid-list--with-icon-align-start___2BmpX",
	"mdc-grid-tile__icon": "mdc-grid-list__mdc-grid-tile__icon___1q46x",
	"mdc-grid-list--with-icon-align-end": "mdc-grid-list__mdc-grid-list--with-icon-align-end___DURdi",
	"mdc-grid-tile__primary-content": "mdc-grid-list__mdc-grid-tile__primary-content___2nk9N",
	"mdc-grid-tile__title": "mdc-grid-list__mdc-grid-tile__title___l6ObG",
	"mdc-grid-tile__support-text": "mdc-grid-list__mdc-grid-tile__support-text___2jkKz"
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(9),
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.save = exports.getRecipes = exports.setView = exports.toggleEdit = exports.TOGGLE_EDIT = exports.SET_VIEW = exports.ERROR = exports.REFRESH = undefined;

var _db = __webpack_require__(66);

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = function prefix(str) {
  return 'RECIPE_BOX_' + str;
};

var REFRESH = exports.REFRESH = prefix('REFRESH');
var ERROR = exports.ERROR = prefix('ERROR');
var SET_VIEW = exports.SET_VIEW = prefix('SET_VIEW');

var TOGGLE_EDIT = exports.TOGGLE_EDIT = prefix('TOGGLE_EDIT');

var toggleEdit = exports.toggleEdit = function toggleEdit() {
  return { type: TOGGLE_EDIT };
};

var setView = exports.setView = function setView() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return { type: SET_VIEW, payload: payload };
};

var formatDocs = function formatDocs() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (arr.length === -1) {
    return [/*  default recipe */];
  }
  return arr.map(function (d) {
    return d.doc;
  }).reduce(function (a, b) {
    return Object.assign({}, a, _defineProperty({}, b._id, b));
  }, {});
};

var refresh = function refresh(payload) {
  return { type: REFRESH, payload: formatDocs(payload) };
};

var error = function error(payload) {
  return { type: ERROR, payload: payload };
};

var getRecipes = exports.getRecipes = function getRecipes() {
  return function (dispatch) {
    return _db2.default.allDocs({ include_docs: true }).then(function (res) {
      return res.rows;
    }).then(formatDocs).then(function (payload) {
      return dispatch(refresh(payload));
    }).catch(function (err) {
      return dispatch(error(err));
    });
  };
};

var save = exports.save = function save(payload) {
  return function (dispatch) {
    if (payload._id) {
      return _db2.default.put(payload).then(function () {
        return dispatch(getRecipes());
      }).catch(function (err) {
        return dispatch(error(err));
      });
    }
    return _db2.default.post(payload).then(function () {
      return dispatch(getRecipes());
    }).catch(function (err) {
      return dispatch(error(err));
    });
  };
};

var remove = exports.remove = function remove(payload) {
  return function (dispatch) {
    return _db2.default.get(payload).then(function (doc) {
      return _db2.default.remove(doc);
    }).then(function () {
      return dispatch(getRecipes());
    }).catch(function (err) {
      return dispatch(error(err));
    });
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
	"mdc-form-field": "mdc-form-field__mdc-form-field___2MjS8",
	"mdc-form-field--theme-dark": "mdc-form-field__mdc-form-field--theme-dark___3AweF",
	"mdc-theme--dark": "mdc-form-field__mdc-theme--dark___jYYOs",
	"mdc-form-field--align-end": "mdc-form-field__mdc-form-field--align-end___2g7BL"
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var localIdentName = '[name]__[local]___[hash:base64:5]';

module.exports = localIdentName;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(23);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(13);

var _webpack2 = _interopRequireDefault(_webpack);

var _helmet = __webpack_require__(24);

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = __webpack_require__(25);

var _compression2 = _interopRequireDefault(_compression);

var _env = __webpack_require__(26);

var _middleware = __webpack_require__(27);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /* eslint global-require: 0 */


if (_env.ENV === 'development') {
  // enable webpack hot module replacement
  var webpackDevMiddleware = __webpack_require__(89);
  var webpackHotMiddleware = __webpack_require__(90);
  var webpackConfig = __webpack_require__(91);
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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _reactRouterConfig = __webpack_require__(14);

var _routes = __webpack_require__(28);

var _routes2 = _interopRequireDefault(_routes);

var _pageRenderer = __webpack_require__(84);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pages = __webpack_require__(29);

var _tributePage = __webpack_require__(51);

var _tributePage2 = _interopRequireDefault(_tributePage);

var _appUrls = __webpack_require__(16);

var _appUrls2 = _interopRequireDefault(_appUrls);

var _calculator = __webpack_require__(55);

var _calculator2 = _interopRequireDefault(_calculator);

var _recipeBox = __webpack_require__(63);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(30);

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _About = __webpack_require__(36);

Object.defineProperty(exports, 'About', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_About).default;
  }
});

var _Gallary = __webpack_require__(37);

Object.defineProperty(exports, 'Gallary', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gallary).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _Page = __webpack_require__(31);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(32);

var _App2 = _interopRequireDefault(_App);

var _assets = __webpack_require__(34);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(15);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterConfig = __webpack_require__(14);

__webpack_require__(33);

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
/* 33 */
/***/ (function(module, exports) {



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = exports.meta = exports.title = undefined;

var _favicon = __webpack_require__(35);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-favicon.png";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('h2', {}, void 0, 'About');

var About = function About() {
  return _ref;
};

exports.default = About;

/***/ }),
/* 37 */
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

var _Preview = __webpack_require__(38);

var _Preview2 = _interopRequireDefault(_Preview);

var _appUrls = __webpack_require__(16);

var _appUrls2 = _interopRequireDefault(_appUrls);

var _ = __webpack_require__(41);

var _2 = _interopRequireDefault(_);

var _calculator = __webpack_require__(42);

var _calculator2 = _interopRequireDefault(_calculator);

var _localWeather = __webpack_require__(43);

var _localWeather2 = _interopRequireDefault(_localWeather);

var _tribute = __webpack_require__(44);

var _tribute2 = _interopRequireDefault(_tribute);

var _pomodoro = __webpack_require__(45);

var _pomodoro2 = _interopRequireDefault(_pomodoro);

var _quote = __webpack_require__(46);

var _quote2 = _interopRequireDefault(_quote);

var _simon = __webpack_require__(47);

var _simon2 = _interopRequireDefault(_simon);

var _ticTacToe = __webpack_require__(48);

var _ticTacToe2 = _interopRequireDefault(_ticTacToe);

var _twitch = __webpack_require__(49);

var _twitch2 = _interopRequireDefault(_twitch);

var _wikipedia = __webpack_require__(50);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

var _propTypes = __webpack_require__(2);

var _bind = __webpack_require__(10);

var _bind2 = _interopRequireDefault(_bind);

var _preview = __webpack_require__(40);

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
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 40 */
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
	"action": "preview__action___278GE " + __webpack_require__(4)["mdc-button"] + " " + __webpack_require__(4)["mdc-button--compact"] + " " + __webpack_require__(1)["mdc-card__action"] + ""
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-4-3.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-calculator.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-local-weather.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-tribute.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-pomodoro.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-quote.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-simon.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-tic-tac-toe.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-twitch.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/app/images/-wikipedia.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HodorImg = __webpack_require__(54);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(53);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {
	"tribute-page": "_tribute-page__tribute-page___3LaeR",
	"tribute-page__heading": "_tribute-page__tribute-page__heading___duhrt",
	"tribute-page__content": "_tribute-page__tribute-page__content___1v_19",
	"tribute-page__image": "_tribute-page__tribute-page__image___2QKsr",
	"tribute-page__caption": "_tribute-page__tribute-page__caption___lRDsr"
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/projects/tribute-page/src/images/-Season_6_hodor_main.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _store = __webpack_require__(56);

var _store2 = _interopRequireDefault(_store);

var _CalculatorButtons = __webpack_require__(58);

var _CalculatorButtons2 = _interopRequireDefault(_CalculatorButtons);

var _Display = __webpack_require__(60);

var _Display2 = _interopRequireDefault(_Display);

var _styles = __webpack_require__(61);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(17);

var _reduxThunk = __webpack_require__(18);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(57);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = typeof window !== 'undefined' && "development" !== 'production' ? (0, _redux.createStore)(_reducer2.default, (0, _redux.compose)(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), (0, _redux.applyMiddleware)(_reduxThunk2.default)) : (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(11);

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

var _propTypes = __webpack_require__(2);

var _reactRedux = __webpack_require__(7);

var _Button = __webpack_require__(59);

var _Button2 = _interopRequireDefault(_Button);

var _actions = __webpack_require__(11);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _reactRedux = __webpack_require__(7);

var _actions = __webpack_require__(11);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bind = __webpack_require__(10);

var _bind2 = _interopRequireDefault(_bind);

var _calculator = __webpack_require__(62);

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _bind2.default.bind(_calculator2.default);

/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _store = __webpack_require__(64);

var _store2 = _interopRequireDefault(_store);

var _RecipeBox = __webpack_require__(71);

var _RecipeBox2 = _interopRequireDefault(_RecipeBox);

var _styles = __webpack_require__(81);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_RecipeBox2.default, {
  cx: _styles2.default
});

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(17);

var _reduxForm = __webpack_require__(6);

var _reduxThunk = __webpack_require__(18);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(65);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { persistStore, autoRehydrate } from 'redux-persist';

var r = (0, _redux.combineReducers)({
  recipeBox: _reducer2.default,
  form: _reduxForm.reducer
});

/*
const store = (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') ? compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk), autoRehydrate())(createStore)(reducer) : compose(applyMiddleware(thunk), autoRehydrate())(createStore)(reducer);

persistStore(store, {
  blacklist: ['form'],
  whitelist: ['recipeBox.recipes']
  keyPrefix: '_recipes',
});
*/
var store = typeof window !== 'undefined' && "development" !== 'production' ? (0, _redux.createStore)(r, (0, _redux.compose)(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), (0, _redux.applyMiddleware)(_reduxThunk2.default)) : (0, _redux.createStore)(r, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(19);

var DEFAULT_STATE = { active: '', recipes: {}, edit: false, error: '' };

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _actions.REFRESH:
      return _extends({}, state, { recipes: action.payload });
    case _actions.SET_VIEW:
      return _extends({}, state, { active: action.payload });
    case _actions.TOGGLE_EDIT:
      return _extends({}, state, { edit: !state.edit });
    case _actions.ERROR:
      return _extends({}, state, { error: action.payload });
    default:
      return state;
  }
}

exports.default = reducer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pouchdbCore = __webpack_require__(67);

var _pouchdbCore2 = _interopRequireDefault(_pouchdbCore);

var _pouchdbAdapterIdb = __webpack_require__(68);

var _pouchdbAdapterIdb2 = _interopRequireDefault(_pouchdbAdapterIdb);

var _pouchdbAdapterWebsql = __webpack_require__(69);

var _pouchdbAdapterWebsql2 = _interopRequireDefault(_pouchdbAdapterWebsql);

var _pouchdbAdapterMemory = __webpack_require__(70);

var _pouchdbAdapterMemory2 = _interopRequireDefault(_pouchdbAdapterMemory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const PouchDB = require('pouchdb-core');
// PouchDB.plugin(require('pouchdb-adapter-idb'))
// .plugin(require('pouchdb-adapter-websql'))
//  .plugin(require('pouchdb-adapter-memory'));
//
var Pouch = _pouchdbCore2.default.plugin(_pouchdbAdapterIdb2.default).plugin(_pouchdbAdapterWebsql2.default).plugin(_pouchdbAdapterMemory2.default);
/*
PouchDB.on('created', function (dbName) {
  // called whenever a db is created.
});
*/
var db = new Pouch('recipes');
console.log(db.adapter);

exports.default = db;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("pouchdb-core");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("pouchdb-adapter-idb");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("pouchdb-adapter-websql");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("pouchdb-adapter-memory");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _reactRedux = __webpack_require__(7);

var _reactModal = __webpack_require__(72);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Editor = __webpack_require__(73);

var _Editor2 = _interopRequireDefault(_Editor);

var _AddButton = __webpack_require__(80);

var _AddButton2 = _interopRequireDefault(_AddButton);

var _actions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Recipe from './components/Recipe';


var mapStateToProps = function mapStateToProps(_ref) {
  var recipeBox = _ref.recipeBox;
  return {
    recipes: recipeBox.recipes,
    active: recipeBox.active,
    edit: recipeBox.edit
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // onToggleMenu: () => dispatch(toggleMenu()),
    onView: function onView(event) {
      return dispatch((0, _actions.setView)(event.target.value));
    },
    // onEdit: values => dispatch(recipeEdit(values)),
    onRefresh: function onRefresh() {
      return dispatch((0, _actions.getRecipes)());
    },
    onEdit: function onEdit() {
      return dispatch((0, _actions.toggleEdit)());
    },
    onDelete: function onDelete(event) {
      return dispatch((0, _actions.remove)(event.target.value));
    },
    onSubmit: function onSubmit(values) {
      return dispatch((0, _actions.save)(values));
    }
  };
};

var RecipeBox = function (_Component) {
  _inherits(RecipeBox, _Component);

  function RecipeBox() {
    _classCallCheck(this, RecipeBox);

    return _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).apply(this, arguments));
  }

  _createClass(RecipeBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onRefresh();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onView = _props.onView,
          recipes = _props.recipes,
          active = _props.active,
          edit = _props.edit,
          onEdit = _props.onEdit,
          onDelete = _props.onDelete,
          onSubmit = _props.onSubmit,
          cx = _props.cx;

      return _jsx('div', {
        className: cx('recipe-box')
      }, void 0, _jsx(_reactModal2.default, {
        isOpen: active || edit
      }, void 0, edit ? _jsx(_Editor2.default, {
        cx: cx,
        initialValues: active ? recipes[active] : {},
        onSubmit: onSubmit
      }) : _jsx('div', {}, void 0, 'recipe')), _jsx('div', {
        className: cx('recipe-box-menu')
      }, void 0, _jsx(_AddButton2.default, {
        cx: cx,
        onClick: onEdit
      }), _jsx('button', {
        onClick: onDelete
      }, void 0, 'remove'), _jsx('ul', {
        role: 'menu',
        className: cx('recipe-box-menu__tiles')
      }, void 0, Object.keys(recipes).map(function (recipe) {
        var _recipes$recipe = recipes[recipe],
            _id = _recipes$recipe._id,
            name = _recipes$recipe.name,
            picture = _recipes$recipe.picture;

        return _jsx('li', {
          value: _id,
          role: 'menuitem',
          className: cx('recipe-box-tile'),
          onClick: onView
        }, _id, _jsx('div', {
          className: cx('recipe-box-tile__primary')
        }, void 0, _jsx('img', {
          className: cx('recipe-box-tile__primary-content'),
          src: picture,
          alt: ''
        })), _jsx('span', {
          className: cx('recipe-box-tile__secondary')
        }, void 0, _jsx('span', {
          className: cx('recipe-box-tile__title')
        }, void 0, name)));
      }))));
    }
  }]);

  return RecipeBox;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RecipeBox);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _reduxForm = __webpack_require__(6);

var _validate = __webpack_require__(74);

var _Ingredients = __webpack_require__(75);

var _Ingredients2 = _interopRequireDefault(_Ingredients);

var _Instructions = __webpack_require__(77);

var _Instructions2 = _interopRequireDefault(_Instructions);

var _Picture = __webpack_require__(78);

var _Picture2 = _interopRequireDefault(_Picture);

var _InputRequired = __webpack_require__(79);

var _InputRequired2 = _interopRequireDefault(_InputRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecipeForm = function RecipeForm(_ref) {
  var cx = _ref.cx,
      handleSubmit = _ref.handleSubmit,
      pristine = _ref.pristine,
      reset = _ref.reset,
      submitting = _ref.submitting;
  return _jsx('form', {
    className: cx('recipe-box-form'),
    onSubmit: handleSubmit
  }, void 0, _jsx(_reduxForm.Field, {
    cx: cx,
    label: 'Name of Recipe',
    name: 'name',
    component: _InputRequired2.default,
    type: 'text'
  }), _jsx(_reduxForm.Field, {
    cx: cx,
    name: 'picture',
    type: 'text',
    component: _Picture2.default
  }), _jsx(_reduxForm.FieldArray, {
    cx: cx,
    name: 'ingredients',
    component: _Ingredients2.default
  }), _jsx(_reduxForm.Field, {
    cx: cx,
    name: 'instructions',
    component: _Instructions2.default
  }), _jsx('button', {
    tabIndex: '0',
    className: cx('recipe-box-button'),
    type: 'submit',
    disabled: submitting
  }, void 0, 'Submit'), _jsx('button', {
    tabIndex: '0',
    classNames: cx('recipe-box-button'),
    type: 'button',
    disabled: pristine || submitting,
    onClick: reset
  }, void 0, 'Clear Values'));
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'create-recipe',
  // apply initialValues as a prop if need be
  warn: _validate.warn,
  validate: _validate.validate
})(RecipeForm);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var validate = exports.validate = function validate(values) {
  var errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

var warn = exports.warn = function warn(values) {
  var warnings = {};
  if (!values.ingredients || !values.ingredients.length) {
    warnings.ingredients = { _error: 'making somthing for nothing?' };
  }
  if (!values.instructions || !values.instructions.length) {
    warnings.instructions = 'Instructions would be nice';
  }
  if (!values.picture) {
    warnings.picture = 'Use the default picture or select a file';
  }
  return warnings;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(6);

var _propTypes = __webpack_require__(2);

var _InputField = __webpack_require__(76);

var _InputField2 = _interopRequireDefault(_InputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* const renderField = ({ input, label, type, meta: { touched, error } }) => (<div className="recipe-box__ingredient">
  <label htmlFor={input.name}>{label}</label>
  <div>
    <input {...input} type={type} placeholder={label} />
    {touched && error && <span>{error}</span>}
  </div>
</div>);
*/

var renderIngredients = function renderIngredients(_ref) {
  var cx = _ref.cx,
      fields = _ref.fields,
      error = _ref.meta.error;
  return _jsx('ul', {
    className: 'recipe-box__ingredients'
  }, void 0, _jsx('li', {}, void 0, _jsx('button', {
    type: 'button',
    onClick: function onClick() {
      return fields.push();
    }
  }, void 0, 'Add An Ingredient')), fields.map(function (d, i) {
    return _jsx('li', {}, d || i, _jsx('button', {
      type: 'button',
      title: 'Remove Ingredient',
      onClick: function onClick() {
        return fields.remove(i);
      }
    }), _jsx(_reduxForm.Field, {
      cx: cx,
      name: d,
      type: 'text',
      component: _InputField2.default,
      label: 'Ingredient #' + (i + 1)
    }));
  }), error && _jsx('li', {
    className: 'error'
  }, void 0, error));
};

exports.default = renderIngredients;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _reduxForm = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputField = function InputField(_ref) {
  var cx = _ref.cx,
      input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;

  var cnt = cx('recipe-box-form-textfield', {
    'recipe-box-form-textfield--upgraded': touched,
    'recipe-box-form-textfield--invalid': error || warning
  });

  var lbl = cx('recipe-box-form-textfield__label', {
    'recipe-box-form-textfield__label--float-above': touched,
    'recipe-box-form-textfield__label--shake': error || warning
  });

  var inp = cx('recipe-box-form-textfield__input');

  var lne = cx('recipe-box-form-textfield__bottom-line');

  var hlp = cx('recipe-box-form-textfield-helptext');

  return _jsx('div', {
    className: cnt
  }, void 0, _jsx('label', {
    className: lbl,
    htmlFor: input.name
  }, void 0, label), _react2.default.createElement('input', _extends({ type: type, className: inp }, input)), _jsx('div', {
    className: lne
  }), touched && (error || warning) && _jsx('p', {
    className: hlp,
    alert: error
  }, void 0, error || warning));
};

exports.default = InputField;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _reduxForm = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderInstructions = function renderInstructions(_ref) {
  var cx = _ref.cx,
      input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      warning = _ref$meta.warning;
  return _jsx('div', {
    className: cx('recipe-box__instructions')
  }, void 0, touched && warning && _jsx('span', {
    className: cx('recipe-box__error')
  }, void 0, warning), _react2.default.createElement('textarea', _extends({ className: cx('recipe-box__textarea') }, input)));
};

exports.default = renderInstructions;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderPicture = function renderPicture(field) {
  return _jsx("div", {
    style: field.input.value ? {
      backgroundImage: "url(" + field.input.value + ")"
    } : {}
  }, void 0, _jsx("input", {
    type: "file",
    accept: "image/*",
    onChange: function onChange(event) {
      var reader = new FileReader();
      reader.onloadend = function (d) {
        field.input.onChange(d.target.result);
      };
      reader.readAsDataURL(event.files[0]);
    }
  }));
};

exports.default = renderPicture;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _reduxForm = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputRequired = function InputRequired(_ref) {
  var cx = _ref.cx,
      input = _ref.input,
      type = _ref.type,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  var cn = cx('recipe-box-form-textfield', {
    'recipe-box-form-textfield--upgraded': touched,
    'recipe-box-form-textfield--invalid': error
  });
  var lbl = cx('recipe-box-form-textfield__label', {
    'recipe-box-form-textfield__label--float-above': touched,
    'recipe-box-form-textfield__label--shake': error
  });
  return _jsx('div', {
    className: cn
  }, void 0, _react2.default.createElement('input', _extends({ type: type, required: true, className: cx('recipe-box-form-textfield__input') }, input)), _jsx('label', {
    htmlFor: input.name,
    className: lbl
  }, void 0, label), _jsx('div', {
    className: cx('recipe-box-form-textfield__bottom-line')
  }), _jsx('p', {
    className: cx('recipe-box-form-textfield-helptext'),
    alert: error
  }, void 0, error || 'required'));
};

exports.default = InputRequired;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AddButton = function AddButton(_ref) {
  var cx = _ref.cx,
      props = _objectWithoutProperties(_ref, ['cx']);

  return _react2.default.createElement(
    'button',
    _extends({ type: 'button', className: cx('recipe-box-button'), tabIndex: '0', title: 'Add' }, props),
    _jsx('i', {
      className: cx('recipe-box-button__icon')
    }, void 0, 'add')
  );
};

exports.default = AddButton;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bind = __webpack_require__(10);

var _bind2 = _interopRequireDefault(_bind);

var _recipeBox = __webpack_require__(82);

var _recipeBox2 = _interopRequireDefault(_recipeBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _bind2.default.bind(_recipeBox2.default);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	"recipe-box-button": "recipe-box__recipe-box-button___3gOfd " + __webpack_require__(4)["mdc-button"] + " " + __webpack_require__(4)["mdc-button--compact"] + "",
	"recipe-box-button__icon": "recipe-box__recipe-box-button__icon___cffRt " + __webpack_require__(83)["material-icons"] + " " + __webpack_require__(4)["mdc-button__icon"] + "",
	"recipe-box-menu": "recipe-box__recipe-box-menu___udIVd " + __webpack_require__(5)["mdc-grid-list"] + "",
	"recipe-box-menu__tiles": "recipe-box__recipe-box-menu__tiles___xJlTU " + __webpack_require__(5)["mdc-grid-list__tiles"] + "",
	"recipe-box-tile": "recipe-box__recipe-box-tile___svnna " + __webpack_require__(5)["mdc-grid-tile"] + "",
	"recipe-box-tile__primary": "recipe-box__recipe-box-tile__primary___2t8ya " + __webpack_require__(5)["mdc-grid-tile__primary"] + "",
	"recipe-box-tile__primary-content": "recipe-box__recipe-box-tile__primary-content___l2eJO " + __webpack_require__(5)["mdc-grid-tile__primary-content"] + "",
	"recipe-box-tile__secondary": "recipe-box__recipe-box-tile__secondary___DFvL_ " + __webpack_require__(5)["mdc-grid-tile__secondary"] + "",
	"recipe-box-tile__title": "recipe-box__recipe-box-tile__title___1sU0b " + __webpack_require__(5)["mdc-grid-tile__title"] + "",
	"recipe-box-form": "recipe-box__recipe-box-form___2yb4e",
	"recipe-box-form-field": "recipe-box__recipe-box-form-field___3c87J " + __webpack_require__(20)["mdc-form-field"] + " " + __webpack_require__(20)["mdc-form-field--align-end"] + "",
	"recipe-box-form-textfield": "recipe-box__recipe-box-form-textfield___2Vown " + __webpack_require__(3)["mdc-textfield"] + "",
	"recipe-box-form-textfield-helptext": "recipe-box__recipe-box-form-textfield-helptext___3ilbI " + __webpack_require__(3)["mdc-textfield-helptext"] + " " + __webpack_require__(3)["mdc-textfield-helptext--validation-msg"] + "",
	"recipe-box-form-textfield--upgraded": "recipe-box__recipe-box-form-textfield--upgraded___3qTkx " + __webpack_require__(3)["mdc-textfield--upgraded"] + "",
	"recipe-box-form-textfield--invalid": "recipe-box__recipe-box-form-textfield--invalid___27eXf " + __webpack_require__(3)["mdc-textfield--invalid"] + "",
	"recipe-box-form-textfield__input": "recipe-box__recipe-box-form-textfield__input___3sye2 " + __webpack_require__(3)["mdc-textfield__input"] + "",
	"recipe-box-form-textfield__bottom-line": "recipe-box__recipe-box-form-textfield__bottom-line___VhdpB " + __webpack_require__(3)["mdc-textfield__bottom-line"] + "",
	"recipe-box-form-textfield__label": "recipe-box__recipe-box-form-textfield__label___1TyoC " + __webpack_require__(3)["mdc-textfield__label"] + "",
	"recipe-box-form-textfield__label--shake": "recipe-box__recipe-box-form-textfield__label--shake___l1voa " + __webpack_require__(3)["mdc-textfield__label--shake"] + "",
	"recipe-box-form-textfield__label--float-above": "recipe-box__recipe-box-form-textfield__label--float-above___2St2g " + __webpack_require__(3)["mdc-textfield__label--float-above"] + "",
	"recipe-box-recipe": "recipe-box__recipe-box-recipe___3J-_l " + __webpack_require__(1)["mdc-card"] + "",
	"recipe-box-recipe__content": "recipe-box__recipe-box-recipe__content___3lWye " + __webpack_require__(1)["mdc-card__horizontal-block"] + "",
	"recipe-box-recipe__primary": "recipe-box__recipe-box-recipe__primary___3-BnS " + __webpack_require__(1)["mdc-card__primary"] + "",
	"recipe-box-recipe__title": "recipe-box__recipe-box-recipe__title___Dfu79 " + __webpack_require__(1)["mdc-card__title"] + " " + __webpack_require__(1)["mdc-card__title--large"] + "",
	"recipe-box-recipe__subtitle": "recipe-box__recipe-box-recipe__subtitle___1BpBB " + __webpack_require__(1)["mdc-card__subtitle"] + "",
	"recipe-box-recipe__media-item": "recipe-box__recipe-box-recipe__media-item___1jI-D " + __webpack_require__(1)["mdc-card__media-item"] + "",
	"recipe-box-recipe__instructions": "recipe-box__recipe-box-recipe__instructions___36BKw " + __webpack_require__(1)["mdc-card__supporting-text"] + "",
	"recipe-box-recipe__actions": "recipe-box__recipe-box-recipe__actions___26ykF " + __webpack_require__(1)["mdc-card__actions"] + "",
	"recipe-box-recipe__action": "recipe-box__recipe-box-recipe__action___1QUET " + __webpack_require__(4)["mdc-button"] + " " + __webpack_require__(4)["mdc-button--compact"] + " " + __webpack_require__(1)["mdc-card__action"] + ""
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
	"material-icons": "material-icons__material-icons___1Hh7W"
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(85);

var _reactRouter = __webpack_require__(86);

var _reactHelmet = __webpack_require__(15);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _staticAssets = __webpack_require__(87);

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
/* 85 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-undef: 0 */
var createStaticAssets =  false ? require('./prod') : __webpack_require__(88);

exports.default = createStaticAssets;

/***/ }),
/* 88 */
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
/* 89 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * process.env.NODE_ENV - used to determine whether we generate a production or development bundle
 *
 * webpack --env.browser - used to determine whether to generate a browser or server bundle
 */
// const path = require('path');
var rules = __webpack_require__(92);
var externals = __webpack_require__(98);
var PATHS = __webpack_require__(8);
var plugins = __webpack_require__(100);
var resolve = __webpack_require__(102);
var entry = __webpack_require__(103);

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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var images = __webpack_require__(93);
var scripts = __webpack_require__(94);
var styles = __webpack_require__(95);

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
/* 93 */
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(8);

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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesCss = __webpack_require__(96);
var stylesScss = __webpack_require__(97);

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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var ExtractTextPlugin = __webpack_require__(12);
var localIdentName = __webpack_require__(21);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var ExtractTextPlugin = __webpack_require__(12);
var PATHS = __webpack_require__(8);
var localIdentName = __webpack_require__(21);

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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nodeExternals = __webpack_require__(99);

module.exports = [nodeExternals()];

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(13),
    EnvironmentPlugin = _require.EnvironmentPlugin,
    DefinePlugin = _require.DefinePlugin,
    BannerPlugin = _require.BannerPlugin,
    HotModuleReplacementPlugin = _require.HotModuleReplacementPlugin,
    NoEmitOnErrorsPlugin = _require.NoEmitOnErrorsPlugin,
    UglifyJsPlugin = _require.optimize.UglifyJsPlugin;

var ExtractTextPlugin = __webpack_require__(12);
var ManifestPlugin = __webpack_require__(101);
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
/* 101 */
/***/ (function(module, exports) {

module.exports = require("webpack-manifest-plugin");

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PATHS = __webpack_require__(8);

module.exports = {
  modules: [PATHS.modules],
  extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(9);
var PATHS = __webpack_require__(8);

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