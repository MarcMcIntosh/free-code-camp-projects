// import React from 'react';
import { App, About, Gallary } from '../app/pages';
import {
  TributePage,
  AboutTributePage,
} from '../projects/tribute-page';
import appUrls from './app-urls';
//
// const Tribute = () => (<h1>Hodor</h1>);
//
// const Tribute1 = () => (<h1>Hodor</h1>);
// const AboutTribute1 = () => (<h2>About</h2>);
/*
export default () => (<Route path="/" component={App}>
  <IndexRoute component={Gallary} />
  <Route path="about" component={About} />
</Route>);
*/
const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Gallary,
      },
      { path: '/about', component: About },
      {
        path: appUrls.tribute.url,
        component: TributePage,
        routes: [
          {
            path: appUrls.tribute.about,
            component: AboutTributePage,
          },
        ],
      },
    ],
  },
];

export default routes;
