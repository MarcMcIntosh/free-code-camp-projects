import React from 'react';
import {
  Route,
  IndexRoute,
  Redirect,
  Router,
  browserHistory,
} from 'react-router';
import Main from './src/pages/Main';
import Gallary from './src/components/Gallary/index';
import Container from './src/pages/apps';
// Tribute
import Tribute, { task as TributeTask } from './src/apps/Tribute';
// Quote Machine
import QuoteMachine, { task as QuoteMachineTask } from './src/apps/QuoteMachine';
// Weather
import LocalWeather, { task as LocalWeatherTask } from './src/apps/LocalWeather';
// Wikipedia
import WikipediaViewer, { task as WikipediaViewerTask } from './src/apps/WikipediaViewer';
// Twitch
import Twitch, { task as TwitchTask } from './src/apps/Twitch';
// Calculator
import Calculator, { task as CalculatorTask } from './src/apps/Calculator';
// Pomodoro
import Pomodoro, { task as PomodoroTask } from './src/apps/Pomodoro';
// Tic-Tac-Toe
import TicTacToe, { task as TicTacToeTask } from './src/apps/TicTacToe';
// Simon
import Simon, { task as SimonTask } from './src/apps/Simon';

import TributePreview from './src/assets/tribute.png';
import QuoteMachinePreview from './src/assets/quote.png';
import LocalWeatherPreview from './src/assets/local-weather.png';
import WikipediaViewerPreview from './src/assets/wikipedia.png';
import TwitchPreview from './src/assets/twitch.png';
import CalculatorPreview from './src/assets/calculator.png';
import PomodoroPreview from './src/assets/pomodoro.png';
import PlaceHolder from './src/assets/placeholder.png';
import TicTacToePreview from './src/assets/tic-tac-toe.png';
import SimonPreview from './src/assets/simon.png';

const apps = [
  {
    name: 'Tribute Page',
    description: 'Free Code Camp Project',
    path: '/apps/tribute',
    preview: TributePreview,
    info: TributeTask,
  },
  {
    name: 'Random Quote Machine',
    description: 'Free Code Camp Project',
    path: '/apps/quote-machine',
    preview: QuoteMachinePreview,
    info: QuoteMachineTask,
  },
  {
    name: 'Local Weather',
    description: 'Free Code Camp Propject',
    path: '/apps/local-weather',
    preview: LocalWeatherPreview,
    info: LocalWeatherTask,
  },
  {
    name: 'Wikipedia Viewer',
    description: 'Free Code Camp Project',
    path: '/apps/wikipedia-viewer',
    preview: WikipediaViewerPreview,
    info: WikipediaViewerTask,
  },
  {
    name: 'Twitch TV stream checker',
    description: 'Free Code Camp Propject',
    path: '/apps/twitch-tv',
    preview: TwitchPreview,
    info: TwitchTask,
  },
  {
    name: 'Calculator',
    description: 'Free Code Camp Project',
    path: '/apps/calculator',
    preview: CalculatorPreview,
    info: CalculatorTask,
  },
  {
    name: 'Pomodoro Clock',
    description: 'Free Code Camp Propject',
    path: '/apps/pomodoro',
    preview: PomodoroPreview,
    info: PomodoroTask,
  },
  {
    name: 'Tic Tac Toe',
    description: 'Free Code Camp Project',
    path: '/apps/tic-tac-toe',
    preview: TicTacToePreview,
    info: TicTacToeTask,
  },
  {
    name: 'Simon Says',
    description: 'Free Code Camp Project',
    path: '/apps/simon',
    preview: SimonPreview,
    info: SimonTask,
  },
].reverse();

const Apps = () => (<Gallary apps={apps} />);


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Apps} />
      <Route path="apps" component={Container}>
        <Redirect from="apps" to="/" />
        <Route path="tribute" component={Tribute} />
        <Route path="quote-machine" component={QuoteMachine} />
        <Route path="local-weather" component={LocalWeather} />
        <Route path="wikipedia-viewer" component={WikipediaViewer} />
        <Route path="twitch-tv" component={Twitch} />
        <Route path="calculator" component={Calculator} />
        <Route path="pomodoro" component={Pomodoro} />
        <Route path="tic-tac-toe" component={TicTacToe} />
        <Route path="simon" component={Simon} />
      </Route>
    </Route>
  </Router>
);

export default Routes;
