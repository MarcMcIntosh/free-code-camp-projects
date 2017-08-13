// import { StaticRouter } from 'react-router';
// import createMemoryHistory from 'history/createMemoryHistory';
import createRoutes from '../../common/routes';
import configureStore from '../../common/configureStore';
import pageRenderer from './pageRenderer';

export default function render(req, res) {
  // const history = createMemoryHistory();
  const store = configureStore({});
  const routes = createRoutes(store);
  const context = {};
  const html = pageRenderer(store, {
    context,
    location: req.url,
    children: routes,
  });
  /* This fires twice ? */
  /* It was mentioned in reactGO */
  console.log(`Request: ${req.url}`);
  res.status(200).send(html);
  // console.log(routes);
  // console.log(store);
  /*
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).json(err);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      const html = pageRenderer(store, props);
      res.status(200).send(html);
    } else {
      res.sendStatus(404);
    }
  });
  */
}
