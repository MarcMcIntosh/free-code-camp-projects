import appRenderer from '../render/appRenderer';
import configureStore from '../../../projects/tribute-page/configureStore';
import configureRoutes from '../../../projects/tribute-page/routes';

function tributePage(req, res) {
  const store = configureStore();
  const routes = configureRoutes(store);
  const context = {};
  const html = appRenderer(store, {
    context,
    basename: '/tribute-page',
    location: req.url,
    children: routes,
  });
  res.status(200).send(html);
}

export default tributePage;
