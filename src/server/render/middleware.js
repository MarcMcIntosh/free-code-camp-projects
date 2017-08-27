// import { StaticRouter } from 'react-router';
// import createMemoryHistory from 'history/createMemoryHistory';
import { renderRoutes } from 'react-router-config';
// import createRoutes from '../../common/routes';
import routes from '../../common/routes';
import pageRenderer from './pageRenderer';

export default function render(req, res) {
  // const history = createMemoryHistory();
  // const routes = createRoutes();
  const context = {};
  const children = renderRoutes(routes);
  const html = pageRenderer({
    context,
    location: req.url,
    children,
  });
  res.status(200).send(html);
}
