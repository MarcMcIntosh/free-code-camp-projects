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
// Calculator
// Pomodoro
// Tic-Tac-Toe
// Simon

import TributePreview from './src/assets/tribute.png';
import QuoteMachinePreview from './src/assets/quote.png';
import LocalWeatherPreview from './src/assets/local-weather.png';
import PlaceHolder from './src/assets/placeholder.png';

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
    preview: PlaceHolder,
    info: WikipediaViewerTask,
  },
];
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
      </Route>
    </Route>
  </Router>
);

export default Routes;
