import { FunctionComponent } from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const App: FunctionComponent = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/edit">
            {/* */}
          </Route>
          <Route exact path="/">
            {/* */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
