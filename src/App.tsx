import { FunctionComponent } from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { NavigationMenu } from './components/NavigationMenu/NavigationMenu';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import { EditTodo } from './components/EditTodo/EditTodo';
import { Todos } from './components/Todos/Todos';

const App: FunctionComponent = () => {
  return (
    <div>
      <Router>
        <NavigationMenu />
        <Switch>
          <Route exact path="/edit">
            <EditTodo />
          </Route>
          <Route exact path="/">
            <CreateTodo />
          </Route>
          <Route exact path="/todos">
            <Todos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
