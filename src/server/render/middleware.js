// import { StaticRouter } from 'react-router';
// import createMemoryHistory from 'history/createMemoryHistory';
import createRoutes from '../../common/routes';
import pageRenderer from './pageRenderer';

export default function render(req, res) {
  // const history = createMemoryHistory();
  const routes = createRoutes();
  const context = {};
  const html = pageRenderer({
    context,
    location: req.url,
    children: routes,
  });
  res.status(200).send(html);
}
