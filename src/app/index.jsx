import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { renderRoutes } from 'react-router-config';
import { MuiThemeProvider } from 'material-ui/styles';
import routes from '../common/routes';
import theme from '../common/theme';

const history = createHistory();

class App extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    return (<MuiThemeProvider theme={theme}>
      <BrowserRouter history={history}>{renderRoutes(routes)}
      </BrowserRouter>
    </MuiThemeProvider>);
  }
}
render(<App />, document.getElementById('app'));
