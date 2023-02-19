import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import FruitsComponent from './component/FruitComponent/FruitComponent'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route path="/detalhes">
          <FruitsComponent />
        </Route>
        <Route path="/fruits/:id" component={FruitCardComponent} />
      </Switch>
    </Router>
  );
};

export default App;
